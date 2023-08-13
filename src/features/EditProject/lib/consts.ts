import * as yup from 'yup';

import {
  validationMessage,
  validationRegEx,
} from '@/shared/helpers/validationMessages';
import { type OptionSelect } from '@/shared/ui/MultiSelect';

import { type EditProjectState } from '../model/types';

export const EditProjectDefault: EditProjectState = {
  _id: '',
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
  is_moderate: false,
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

export const EditProjectSchema = yup.object<EditProjectState>().shape({
  name: yup.string().required(validationMessage.required),
  description: yup.string().required(validationMessage.required),
  category: yup
    .array()
    .min(1, validationMessage.noEmptyCategory)
    .required(validationMessage.required),
  about_team: yup.string().required(validationMessage.required),
  team_company: yup.string().required(validationMessage.required),
  contact_email: yup
    .string()
    .matches(validationRegEx.emailFormat, validationMessage.invalidEmail)
    .required(validationMessage.required),
  contact_name: yup.string().required(validationMessage.required),
  contact_tg: yup.string().required(validationMessage.required),
  url_website: yup
    .string()
    .required(validationMessage.required)
    .url(validationMessage.invalidUrl),
  url_whitepaper: yup
    .string()
    .required(validationMessage.required)
    .url(validationMessage.invalidUrl),
  has_token: yup.string().required(validationMessage.required),
  fund_history: yup.string().required(validationMessage.required),
  size_grant: yup
    .number()
    .required(validationMessage.invalidWithFormat)
    .positive()
    .integer(),
});
