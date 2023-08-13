import {
  useMutation,
  type UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { type AxiosError, type AxiosResponse } from 'axios';

import {
  currentProjectQueryKey,
  type Project,
  projectsQueryKey,
} from '@/entities/Project';
import { allProjectsQueryKey } from '@/entities/Project/api/projectApi';
import { apiClient } from '@/shared/api/apiClient';
import { apiRoutes } from '@/shared/api/apiRoutes';
import { objectUrlToBlob } from '@/shared/lib/utils';

import { type EditProjectRequest } from '../model/types';

export const editProject = async (body: EditProjectRequest) => {
  const { _id, category, cover, ...restBody } = body;

  const requestBody = { ...restBody, _id, category: category[0] };

  const response = await apiClient.patch<
    EditProjectRequest,
    AxiosResponse<EditProjectRequest>
  >(`${apiRoutes.editProjectById}/${_id}`, requestBody);
  const modifiedResponse = { ...response, cover };
  return modifiedResponse;
};

export const updateProjectCover = async (
  id_project: string,
  cover: string,
): Promise<AxiosResponse<Project>> => {
  const coverFile = await objectUrlToBlob(cover);
  const formData = new FormData();
  const mimeTypeParts = coverFile.type.split('/');
  const fileExtension = mimeTypeParts[1];
  formData.append('cover', coverFile, `cover_${Date.now()}.${fileExtension}`);

  const response = await apiClient.patch(
    `${apiRoutes.updateProjectCover}/${id_project}/cover`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response;
};

export const deleteProjectCover = async (
  id_project: string,
): Promise<AxiosResponse<Project>> => {
  const response = await apiClient.delete(
    `${apiRoutes.deleteProjectCover}/${id_project}/cover`,
  );
  return response;
};

export const useEditProjectApi = (): UseMutationResult<
  AxiosResponse<EditProjectRequest>,
  AxiosError<unknown>,
  EditProjectRequest
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body) => editProject(body),
    onSuccess: async (res) => {
      let responseCover: AxiosResponse<Project>;
      if (
        res.cover &&
        !res.cover.startsWith(process.env.NEXT_PUBLIC_S3_URL as string)
      ) {
        responseCover = await updateProjectCover(res.data._id, res.cover);
      }
      if (!res.cover) {
        responseCover = await deleteProjectCover(res.data._id);
      }

      const existingData =
        queryClient.getQueryData<Project[]>(allProjectsQueryKey);
      const newData = existingData?.map((item) =>
        item._id === responseCover.data._id ? responseCover.data : item,
      );
      queryClient.setQueryData(allProjectsQueryKey, newData);
      queryClient.invalidateQueries([currentProjectQueryKey, res.data._id]);
      queryClient.invalidateQueries(projectsQueryKey);
    },
  });
};
