import { useQuery } from '@tanstack/react-query';

import { type Category } from '@/entities/Category/model/types';
import { apiClient } from '@/shared/api/apiClient';
import { apiRoutes } from '@/shared/api/apiRoutes';

const queryKey = ['categories'];

export const fetchCategories = async () => {
  const response = await apiClient.get<Category[]>(apiRoutes.getCategories);
  return response.data;
};

export const useCategories = () => {
  const data = useQuery({
    queryKey,
    queryFn: fetchCategories,
  });
  return data;
};

export const useCategory = (id: string) =>
  useQuery({
    queryKey,
    queryFn: fetchCategories,
    select: (categories) => categories.find((category) => category.id === id),
  });
