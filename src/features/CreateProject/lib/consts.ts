import * as yup from 'yup';

import { validationMessage } from '@/shared/helpers/validationMessages';
import { type OptionSelect } from '@/shared/ui/MultiSelect';

import { type CreateProjectState } from '../model/types';

export const CreateProjectDefault: CreateProjectState = {
  name: '',
  description: '',
  about_team: '',
  category: [],
  has_token: '',
  size_grant: 0,
  fund_history: '',
  contact_name: '',
  contact_email: '',
  contact_tg: '',
  url_website: '',
  url_whitepaper: '',
  cover: null,
  team_company: '',
  captcha: '',
};

export const hasTokenOptions: OptionSelect[] = [
  {
    value: 'yes',
    label: 'Yes',
  },
  {
    value: 'no',
    label: 'No',
  },
];

export const CreateProjectSchema = yup.object<CreateProjectState>().shape({
  name: yup.string().required(validationMessage.required),
  description: yup.string().required(validationMessage.required),
  category: yup
    .array()
    .min(1, validationMessage.noEmptyCategory)
    .required(validationMessage.required),
  about_team: yup.string().required(validationMessage.required),
  team_company: yup.string().required(validationMessage.required),
  contact_email: yup.string().required(validationMessage.required),
  contact_name: yup.string().required(validationMessage.required),
  contact_tg: yup.string().required(validationMessage.required),
  url_website: yup.string().required(validationMessage.required),
  url_whitepaper: yup.string().required(validationMessage.required),
  has_token: yup.string().required(validationMessage.required),
  fund_history: yup.string().required(validationMessage.required),
  size_grant: yup
    .number()
    .required(validationMessage.invalidWithFormat)
    .positive()
    .integer(),
  captcha: yup.string().required(validationMessage.required),
  cover: yup
    .mixed()
    .test('fileSize', 'Max file size is 300kB', async (value) => {
      if (!value) return true; // No file uploaded, so no need to validate

      if (typeof value === 'string' && value.startsWith('blob:')) {
        // Fetch the blob and get its size
        const response = await fetch(value);
        const blob = await response.blob();
        const maxSizeBytes = 300 * 1024;

        return blob.size <= maxSizeBytes;
      }

      return false; // Invalid value type
    })
    .nullable(), // Allow null values
});
