import { type FormikConfig } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import {
  type LoginFormState,
  useLoginUserApi,
} from '@/features/Authentication/Login';
import {
  notification,
  notificationMessages,
  notificationTitles,
} from '@/shared/helpers/notificationMessages';

import { LoginFormDefault } from './consts';

export const useLoginForm = () => {
  const router = useRouter();
  const { mutateAsync, isLoading, isSuccess, isError } = useLoginUserApi();
  const [initialValues] = useState<LoginFormState>(LoginFormDefault);

  useEffect(() => {
    if (isError) {
      notification.error(
        notificationTitles.error,
        notificationMessages.loginError,
      );
    }
    if (isSuccess) {
      router.push('/');
    }
  }, [isSuccess, isError]);

  const submitForm: FormikConfig<LoginFormState>['onSubmit'] = async (
    values,
  ) => {
    try {
      await mutateAsync(values);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    initialValues,
    isLoading,
    submitForm,
  };
};
