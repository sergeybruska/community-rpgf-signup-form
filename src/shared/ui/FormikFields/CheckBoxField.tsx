import { Checkbox } from '@mantine/core';
import { Field, type FieldProps } from 'formik';
import { type FC } from 'react';

type CheckBoxFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  className: string;
  disabled?: boolean;
};

export const CheckBoxField: FC<CheckBoxFieldProps> = (props) => {
  const { name, label, placeholder, className, disabled } = props;

  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div className={className}>
          <Checkbox
            {...field}
            placeholder={placeholder}
            label={label}
            disabled={disabled}
            radius='xs'
            color='green.5'
            error={meta.touched && meta.error && meta.error}
          />
        </div>
      )}
    </Field>
  );
};
