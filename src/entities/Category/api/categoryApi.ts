import { useQuery } from '@tanstack/react-query';

import { type Category } from '@/entities/Category/model/types';
import { apiClient } from '@/shared/api/apiClient';
import { apiRoutes } from '@/shared/api/apiRoutes';

const categoriesQueryKey = ['categories'];
const currentCategoryQueryKey = ['currentCategory'];

export const fetchCategories = async () => {
  const response = await apiClient.get<Category[]>(apiRoutes.getCategories);
  console.log(response);
  return response.data;
};

export const useCategories = () => {
  const data = useQuery({
    queryKey: categoriesQueryKey,
    queryFn: fetchCategories,
  });
  return data;
};

export const useCategory = (id?: string) =>
  useQuery({
    queryKey: [currentCategoryQueryKey, id],
    queryFn: fetchCategories,
    select: (categories) => categories.find((category) => category._id === id),
    enabled: !!id,
  });
