import { Form, Formik } from 'formik';
import { type FC } from 'react';

import { hasTokenOptions } from '@/features/CreateProject';
import { EditProjectSchema, useEditProjectForm } from '@/features/EditProject';
import { Button } from '@/shared/ui/Button';
import {
  MultiSelectField,
  TextAreaField,
  TextField,
  UploadImageField,
} from '@/shared/ui/FormikFields';
import { SelectField } from '@/shared/ui/FormikFields/SelectField';
import { SwitchField } from '@/shared/ui/FormikFields/SwitchField';
import { Title } from '@/shared/ui/Title/Title';

export const EditProjectForm: FC = () => {
  const { initialValues, categoriesOptions, isLoading, submitForm } =
    useEditProjectForm();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      enableReinitialize
      validationSchema={EditProjectSchema}
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
          placeholder='https://yourproject.io'
          required
          disabled={isLoading}
        />
        <TextField
          name='url_whitepaper'
          label='Link to technical docs or whitepaper'
          className='flex flex-col w-full mb-4'
          placeholder='https://yourproject.io/whitepaper'
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
          description='Size, Date, Funders, if none, just write No'
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
        <SwitchField
          name='is_moderate'
          label='Has the project been checked?'
          description='Once verified, the project will be added to the public list'
          className='mb-8'
        />
        <div className='flex flex-col w-full'>
          <Button
            type='submit'
            variant='primary'
            color='red'
            size='lg'
            fullWidth
            disabled={isLoading}
          >
            Save Changes
          </Button>
        </div>
      </Form>
    </Formik>
  );
};
