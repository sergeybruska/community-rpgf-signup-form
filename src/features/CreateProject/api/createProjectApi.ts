import {
  useMutation,
  type UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { type AxiosError, type AxiosResponse } from 'axios';

import { type Category } from '@/entities/Category';
import { projectsQueryKey } from '@/entities/Project';
import { apiClient } from '@/shared/api/apiClient';
import { apiRoutes } from '@/shared/api/apiRoutes';
import { objectUrlToBlob } from '@/shared/lib/utils';

import { type CreateProjectRequest } from '../model/types';

export const createProject = async (body: CreateProjectRequest) => {
  const { cover, ...restBody } = body;

  const requestData = new FormData();
  Object.entries(restBody).forEach(([key, value]) => {
    requestData.append(key, String(value));
  });

  if (cover) {
    const file = await objectUrlToBlob(cover as string);
    requestData.append('cover', file);
  }

  const response = await apiClient.post<
    CreateProjectRequest,
    AxiosResponse<CreateProjectRequest>
  >(apiRoutes.createProject, requestData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

export const useCreateProjectApi = (): UseMutationResult<
  AxiosResponse<CreateProjectRequest>,
  AxiosError<unknown>,
  CreateProjectRequest
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body) => createProject(body),
    onSuccess: async (res) => {
      const existingData =
        queryClient.getQueryData<Category[]>(projectsQueryKey);
      const newData = existingData && [...existingData, res.data];
      queryClient.setQueryData(projectsQueryKey, newData);
      return newData;
    },
  });
};
