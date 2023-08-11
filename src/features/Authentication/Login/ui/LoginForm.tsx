import { Form, Formik } from 'formik';
import { type FC } from 'react';

import { LoginFormSchema, useLoginForm } from '@/features/Authentication/Login';
import { Button } from '@/shared/ui/Button';
import { TextField } from '@/shared/ui/FormikFields';

export const LoginForm: FC = () => {
  const { initialValues, isLoading, submitForm } = useLoginForm();

  return (
    <div className='flex flex-col max-w-[24rem] w-full bg-white rounded-lg p-8'>
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={LoginFormSchema}
      >
        <Form>
          <TextField
            label='E-mail'
            name='email'
            required
            className='flex flex-col w-full mb-2'
            disabled={isLoading}
          />
          <TextField
            label='Password'
            name='password'
            type='password'
            required
            className='flex flex-col w-full mb-4'
            disabled={isLoading}
          />
          <Button
            type='submit'
            fullWidth
            color='red'
            variant='primary'
            size='lg'
            disabled={isLoading}
          >
            Log In
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
