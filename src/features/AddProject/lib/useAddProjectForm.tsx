import { type FormikConfig } from 'formik';
import { useState } from 'react';

import { AddProjectDefault } from '@/features/AddProject/lib/consts';
import { type AddProjectState } from '@/features/AddProject/model/types';

export const useAddProjectForm = () => {
  const [initialValues, setInitialValues] =
    useState<AddProjectState>(AddProjectDefault);

  const submitForm: FormikConfig<AddProjectState>['onSubmit'] = async (
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
