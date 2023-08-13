import { type FormikConfig } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useCategories } from '@/entities/Category';
import { useProjectForModerateById } from '@/entities/Project';
import {
  EditProjectDefault,
  type EditProjectState,
  useEditProjectApi,
} from '@/features/EditProject';
import { errorHandler } from '@/shared/api/apiClient';
import {
  notification,
  notificationMessages,
  notificationTitles,
} from '@/shared/helpers/notificationMessages';
import { createSelectOptions } from '@/shared/lib/utils';
import { navigationRoutes } from '@/shared/routes/routes';

export const useEditProjectForm = () => {
  const router = useRouter();
  const { _id } = router.query;
  const {
    data: currentProject,
    isLoading: isLoadingCurrentProject,
    isError: isErrorCurrentProject,
  } = useProjectForModerateById(_id as string);
  const { data: categories, isLoading: isLoadingCategories } = useCategories();
  const {
    mutateAsync,
    isLoading: isLoadingEdit,
    isSuccess: isSuccessEdit,
  } = useEditProjectApi();

  const [initialValues, setInitialValues] = useState<EditProjectState>(
    () => EditProjectDefault,
  );

  const isLoading =
    isLoadingCategories || isLoadingEdit || isLoadingCurrentProject;

  const submitForm: FormikConfig<EditProjectState>['onSubmit'] = async (
    values,
  ) => {
    try {
      await mutateAsync(values);
    } catch (error) {
      errorHandler(error);
    }
  };

  useEffect(() => {
    if (currentProject) {
      setInitialValues((prevValues) => ({
        ...prevValues,
        ...currentProject,
        cover: currentProject.cover || null,
        category: [currentProject.category],
      }));
    }
    if (isErrorCurrentProject) {
      notification.error(
        notificationTitles.error,
        notificationMessages.somethingWentWrong,
      );
      router.push(navigationRoutes.home);
    }
  }, [currentProject, isErrorCurrentProject]);

  useEffect(() => {
    if (isSuccessEdit) {
      notification.success(
        notificationTitles.success,
        notificationMessages.editProjectSuccess,
      );
      router.push(navigationRoutes.admin);
    }
  }, [isSuccessEdit]);

  const categoriesOptions = createSelectOptions(categories);

  return {
    initialValues,
    categoriesOptions,
    isLoading,
    submitForm,
  };
};
