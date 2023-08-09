import { Field, type FieldProps } from 'formik';
import { type FC } from 'react';

import { Textarea } from '../Textarea';

type TextAreaFieldProps = {
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
  className: string;
  disabled?: boolean;
  required?: boolean;
};

export const TextAreaField: FC<TextAreaFieldProps> = (props) => {
  const {
    name,
    label,
    description,
    className,
    placeholder,
    disabled,
    required,
  } = props;
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div className={className}>
          <Textarea
            {...field}
            value={field.value ? field.value : ''}
            placeholder={placeholder}
            description={description}
            label={label}
            disabled={disabled}
            error={meta.touched && meta.error}
            isRequired={required}
          />
        </div>
      )}
    </Field>
  );
};
