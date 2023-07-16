import { Form, Formik } from 'formik';
import { type FC } from 'react';

import { useSubscribeForm } from '@/features/SubscribeForm';
import { Button } from '@/shared/ui/Button';
import { CheckBoxField } from '@/shared/ui/FormikFields';
import { TextField } from '@/shared/ui/FormikFields/TextField';

export const SubscribeForm: FC = () => {
  const { initialValues, submitForm } = useSubscribeForm();
  return (
    <Formik initialValues={initialValues} onSubmit={submitForm}>
      <Form>
        <div className='flex flex-row w-full max-w-[38rem] space-x-4 items-center'>
          <div className='flex flex-col w-full'>
            <TextField
              name='email'
              type='text'
              placeholder='your@email.com'
              className='flex flex-col w-full'
            />
          </div>
          <Button type='submit' variant='primary' color='red' size='lg'>
            Subscribe
          </Button>
        </div>
        <CheckBoxField name='is_confirm' className='flex w-full' label='wwww' />
      </Form>
    </Formik>
  );
};
