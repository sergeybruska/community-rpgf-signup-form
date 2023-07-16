import { Form, Formik } from 'formik';
import { type FC } from 'react';

import { useAddProjectForm } from '@/features/AddProject';
import { TextAreaField, TextField } from '@/shared/ui/FormikFields';

export const AddProjectForm: FC = () => {
  const { initialValues, submitForm } = useAddProjectForm();

  return (
    <Formik initialValues={initialValues} onSubmit={submitForm}>
      <Form className='flex flex-col w-full'>
        <TextField
          name='name'
          label='Project name'
          className='flex flex-col w-full mb-4'
          required
        />
        <TextField
          name='team_organization'
          label='Team/Organization'
          className='flex flex-col w-full mb-4'
          required
        />
        <TextField
          name='name'
          label='Project name'
          className='flex flex-col w-full mb-4'
          required
        />
        <TextAreaField
          name='description'
          label='Project description'
          className='flex flex-col w-full mb-4'
        />
      </Form>
    </Formik>
  );
};
