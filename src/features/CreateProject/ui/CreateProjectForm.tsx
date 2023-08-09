import { Field, type FieldProps, Form, Formik } from 'formik';
import { type FC } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import {
  CreateProjectSchema,
  hasTokenOptions,
  useCreateProjectForm,
} from '@/features/CreateProject';
import { Button } from '@/shared/ui/Button';
import {
  MultiSelectField,
  TextAreaField,
  TextField,
  UploadImageField,
} from '@/shared/ui/FormikFields';
import { SelectField } from '@/shared/ui/FormikFields/SelectField';
import { Title } from '@/shared/ui/Title/Title';

export const CreateProjectForm: FC = () => {
  const { initialValues, categoriesOptions, isLoading, submitForm } =
    useCreateProjectForm();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      enableReinitialize
      validationSchema={CreateProjectSchema}
      validateOnChange={false}
    >
      <Form className='flex flex-col w-full max-w-[37.5rem]'>
        <UploadImageField
          name='cover'
          label='Project cover'
          disabled={isLoading}
          className='flex flex-col mb-4'
        />
        <TextField
          name='name'
          label='Project name'
          className='flex flex-col w-full mb-4'
          required
          disabled={isLoading}
        />
        <TextAreaField
          name='description'
          label='Project description'
          description='What project/product do you intend to build with the grant funding?'
          className='flex flex-col w-full mb-4'
          required
          disabled={isLoading}
        />
        <MultiSelectField
          label='Category'
          name='category'
          options={categoriesOptions}
          className='flex flex-col w-full mb-4'
          maxSelections={1}
          isSearchable
          disabled={isLoading}
          isRequired
        />
        <TextField
          name='url_website'
          label='Link to website'
          className='flex flex-col w-full mb-4'
          required
          disabled={isLoading}
        />
        <TextField
          name='url_whitepaper'
          label='Link to technical docs or whitepaper'
          className='flex flex-col w-full mb-4'
          required
          disabled={isLoading}
        />
        <div className='flex flex-row w-full mb-4'>
          <TextField
            name='size_grant'
            type='number'
            label='Size of Grant (USD)'
            className='flex flex-col w-1/2'
            required
            disabled={isLoading}
          />
        </div>

        <div className='flex flex-row w-full mb-4'>
          <SelectField
            name='has_token'
            label='Have you launched a token?'
            options={hasTokenOptions}
            disabled={isLoading}
            className='flex flex-col w-1/2'
            isRequired
          />
        </div>
        <TextAreaField
          name='fund_history'
          label='Fundraising History'
          description='Size, Date, Funders'
          className='flex flex-col w-full mb-8'
          required
          disabled={isLoading}
        />
        <Title order={3} mb={8} className='font-display'>
          Team
        </Title>
        <TextField
          name='team_company'
          label='Company / Team Name'
          className='flex flex-col w-full mb-4'
          required
          disabled={isLoading}
        />
        <TextAreaField
          name='about_team'
          label='About team'
          description='Please provide details such as the start of your collaboration, how you met, and your previous experiences.'
          className='flex flex-col w-full mb-8'
          required
          disabled={isLoading}
        />
        <Title order={3} mb={8} className='font-display'>
          Contacts
        </Title>
        <TextField
          name='contact_name'
          label='Contact name'
          className='flex flex-col w-full mb-4'
          required
          disabled={isLoading}
        />
        <TextField
          name='contact_email'
          label='Your email address'
          className='flex flex-col w-full mb-4'
          required
          disabled={isLoading}
        />
        <TextField
          name='contact_tg'
          label='Your Telegram'
          className='flex flex-col w-full mb-4'
          required
          disabled={isLoading}
        />
        <Field name='captcha'>
          {({ field, meta, form: { setFieldValue } }: FieldProps) => (
            <div className='flex flex-col items-center w-full mb-8'>
              <ReCAPTCHA
                {...field}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY || ''}
                onChange={(token) => setFieldValue(field.name, token)}
              />
              {meta.touched && meta.error && (
                <span className='text-xs text-red-500'>{meta.error}</span>
              )}
            </div>
          )}
        </Field>
        <div className='flex flex-col w-full'>
          <Button
            type='submit'
            variant='primary'
            color='red'
            size='lg'
            fullWidth
            disabled={isLoading}
          >
            Submit Project
          </Button>
        </div>
      </Form>
    </Formik>
  );
};
