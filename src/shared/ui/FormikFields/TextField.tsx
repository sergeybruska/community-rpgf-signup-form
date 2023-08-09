import { FastField, Field, type FieldProps } from 'formik';
import { type FC } from 'react';

import { InputGenerator } from '../Input';

type TextFieldProps = {
  type?: string;
  name: string;
  label?: string;
  placeholder?: string;
  className: string;
  disabled?: boolean;
  required?: boolean;
  isFastField?: boolean;
};

export const TextField: FC<TextFieldProps> = (props) => {
  const {
    name,
    label,
    type = 'text',
    placeholder,
    className,
    disabled,
    required,
    isFastField,
  } = props;

  if (isFastField) {
    return (
      <FastField name={name}>
        {({ field, meta }: FieldProps) => (
          <div className={className}>
            <InputGenerator
              {...field}
              type={type}
              placeholder={placeholder}
              label={label}
              disabled={disabled}
              error={meta.touched && meta.error}
              isRequired={required}
            />
          </div>
        )}
      </FastField>
    );
  }

  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div className={className}>
          <InputGenerator
            {...field}
            type={type}
            placeholder={placeholder}
            label={label}
            disabled={disabled}
            error={meta.touched && meta.error && meta.error}
            isRequired={required}
          />
        </div>
      )}
    </Field>
  );
};
