import { Field, type FieldProps } from 'formik';
import { type FC } from 'react';

import { Switch } from '../Switch/Switch';

type SwitchFieldProps = {
  name: string;
  label: string;
  description?: string;
  className?: string;
  disabled?: boolean;
};

export const SwitchField: FC<SwitchFieldProps> = (props) => {
  const { name, description, className, label, disabled } = props;
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <div className={className}>
          <Switch
            name={field.name}
            label={label}
            description={description}
            checked={field.value}
            onChange={(value) => form.setFieldValue(field.name, value)}
            disabled={disabled}
          />
        </div>
      )}
    </Field>
  );
};
