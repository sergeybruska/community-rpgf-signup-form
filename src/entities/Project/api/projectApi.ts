import { useQuery } from '@tanstack/react-query';

import { type ProjectModel } from '@/entities/Project';
import { apiClient } from '@/shared/api/apiClient';
import { apiRoutes } from '@/shared/api/apiRoutes';

export const projectsQueryKey = ['projects'];
export const currentProjectQueryKey = ['currentProject'];

export const fetchProjects = async () => {
  const response = await apiClient.get<ProjectModel[]>(apiRoutes.getProjects);
  return response.data;
};

export const fetchProject = async (id?: string) => {
  const response = await apiClient.get<ProjectModel>(
    `${apiRoutes.getProject}/${id}`,
  );
  return response.data;
};

export const useProjects = () => useQuery(projectsQueryKey, fetchProjects);

export const useProjectById = (id?: string) => {
  const data = useQuery({
    queryKey: [currentProjectQueryKey, id],
    queryFn: () => fetchProject(id),
    enabled: !!id,
  });

  return data;
};
