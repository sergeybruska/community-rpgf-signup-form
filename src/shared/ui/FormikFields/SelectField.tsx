import { Field, type FieldProps } from 'formik';
import { type FC, type ReactNode } from 'react';

import { type OptionSelect } from '@/shared/ui/MultiSelect';
import { Select } from '@/shared/ui/Select/Select';

type SelectFieldProps = {
  name: string;
  label: string;
  options: OptionSelect[];
  icon?: ReactNode;
  placeholder?: string;
  className: string;
  isSearchable?: boolean;
  disabled: boolean;
};

export const SelectField: FC<SelectFieldProps> = (props) => {
  const {
    name,
    label,
    options,
    icon,
    placeholder,
    className,
    isSearchable,
    disabled,
  } = props;
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <div className={className}>
          <Select
            {...field}
            name={name}
            label={label}
            options={options}
            setSelectedValue={(value) => form.setFieldValue(name, value)}
            isSearchable={isSearchable}
            icon={icon}
            disabled={disabled}
            placeholder={placeholder}
          />
        </div>
      )}
    </Field>
  );
};
