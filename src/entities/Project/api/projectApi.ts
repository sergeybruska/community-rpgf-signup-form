import {
  useMutation,
  type UseMutationResult,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { type AxiosError, type AxiosResponse } from 'axios';

import { type Project, type ProjectModerateRequest } from '@/entities/Project';
import { apiClient } from '@/shared/api/apiClient';
import { apiRoutes } from '@/shared/api/apiRoutes';

export const projectsQueryKey = ['projects'];
export const allProjectsQueryKey = ['allProjects'];
export const currentProjectQueryKey = ['currentProject'];

export const fetchProjects = async () => {
  const response = await apiClient.get<Project[]>(apiRoutes.getProjects);
  return response.data;
};

export const fetchAllProjects = async () => {
  const response = await apiClient.get<Project[]>(apiRoutes.getAllProjects);
  return response.data;
};

export const moderateProjectById = async (
  id: string,
  body: ProjectModerateRequest,
) => {
  const response = await apiClient.patch<AxiosResponse<unknown>>(
    `${apiRoutes.moderateProjectById}/${id}`,
    body,
  );
  return response.data;
};

export const fetchProject = async (id?: string) => {
  const response = await apiClient.get<Project>(
    `${apiRoutes.getProject}/${id}`,
  );
  return response.data;
};

export const fetchProjectForModerateById = async (id?: string) => {
  const response = await apiClient.get<Project>(
    `${apiRoutes.getProjectModerateById}/${id}`,
  );
  return response.data;
};

export const useProjects = () => useQuery(projectsQueryKey, fetchProjects);

export const useAllProjects = () =>
  useQuery(allProjectsQueryKey, fetchAllProjects);

export const useProjectForModerateById = (id?: string) => {
  const data = useQuery({
    queryKey: [currentProjectQueryKey, id],
    queryFn: () => fetchProjectForModerateById(id),
    enabled: !!id,
  });

  return data;
};

export const useProjectById = (id?: string) => {
  const data = useQuery({
    queryKey: [currentProjectQueryKey, id],
    queryFn: () => fetchProject(id),
    enabled: !!id,
  });

  return data;
};

export const useChangeProjectIsModerateApi = (
  id: string,
): UseMutationResult<
  AxiosResponse<unknown>,
  AxiosError<unknown>,
  {
    id: string;
    body: ProjectModerateRequest;
  }
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, body }) => moderateProjectById(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries([currentProjectQueryKey, id]);
      queryClient.invalidateQueries(allProjectsQueryKey);
    },
  });
};
