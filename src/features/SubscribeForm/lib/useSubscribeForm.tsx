import { type FormikConfig } from 'formik';
import { useState } from 'react';

import { SubscribeFormDefault } from '@/features/SubscribeForm/lib/consts';
import { type SubscribeFormState } from '@/features/SubscribeForm/model/types';

export const useSubscribeForm = () => {
  const [initialValues, setInitialValues] =
    useState<SubscribeFormState>(SubscribeFormDefault);

  const submitForm: FormikConfig<SubscribeFormState>['onSubmit'] = async (
    values,
  ) => {
    try {
      console.log(values);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    initialValues,
    submitForm,
  };
};
