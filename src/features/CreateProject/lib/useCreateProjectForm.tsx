import { type FormikConfig } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useCategories } from '@/entities/Category';
import {
  type CreateProjectState,
  useCreateProjectApi,
} from '@/features/CreateProject';
import { CreateProjectDefault } from '@/features/CreateProject/lib/consts';
import { errorHandler } from '@/shared/api/apiClient';
import {
  notification,
  notificationMessages,
  notificationTitles,
} from '@/shared/helpers/notificationMessages';
import { createSelectOptions } from '@/shared/lib/utils';
import { navigationRoutes } from '@/shared/routes/routes';

export const useCreateProjectForm = () => {
  const router = useRouter();
  const { data: categories, isLoading: isLoadingCategories } = useCategories();
  const {
    mutateAsync,
    isLoading: isLoadingCreate,
    isSuccess: isSuccessCreate,
  } = useCreateProjectApi();

  const [initialValues] = useState<CreateProjectState>(
    () => CreateProjectDefault,
  );

  const isLoading = isLoadingCategories || isLoadingCreate;

  const submitForm: FormikConfig<CreateProjectState>['onSubmit'] = async (
    values,
  ) => {
    try {
      await mutateAsync(values);
    } catch (error) {
      errorHandler(error);
    }
  };

  useEffect(() => {
    if (isSuccessCreate) {
      notification.success(
        notificationTitles.success,
        notificationMessages.createProjectSuccess,
      );
      router.push(navigationRoutes.home);
    }
  }, [isSuccessCreate]);

  const categoriesOptions = createSelectOptions(categories);

  return {
    initialValues,
    categoriesOptions,
    isLoading,
    submitForm,
  };
};
