import * as yup from 'yup';

import { type LoginFormState } from '@/features/Authentication/Login';
import {
  validationMessage,
  validationRegEx,
} from '@/shared/helpers/validationMessages';

export const LoginFormDefault: LoginFormState = {
  email: '',
  password: '',
};

export const LoginFormSchema = yup.object<LoginFormState>().shape({
  email: yup
    .string()
    .matches(validationRegEx.emailFormat, validationMessage.invalidEmail)
    .required(validationMessage.required),
  password: yup
    .string()
    .min(8, validationMessage.invalidShortPassword)
    .required(validationMessage.required),
});
