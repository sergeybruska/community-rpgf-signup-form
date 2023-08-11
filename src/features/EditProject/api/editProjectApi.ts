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

import { type EditProjectRequest } from '../model/types';

export const editProject = async (body: EditProjectRequest) => {
  const { _id, category, ...restBody } = body;

  const requestBody = { ...restBody, _id, category: category[0] };

  const response = await apiClient.patch<
    EditProjectRequest,
    AxiosResponse<EditProjectRequest>
  >(`${apiRoutes.editProjectById}/${_id}`, requestBody);
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
      const existingData =
        queryClient.getQueryData<Project[]>(allProjectsQueryKey);
      const newData = existingData?.map((item) =>
        item._id === res.data._id ? res.data : item,
      );
      queryClient.invalidateQueries([currentProjectQueryKey, res.data._id]);
      queryClient.setQueryData(allProjectsQueryKey, newData);
      queryClient.invalidateQueries(projectsQueryKey);
    },
  });
};
