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
  isRequired?: boolean;
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
    isRequired,
  } = props;

  const handleChange = (
    value: string | null,
    setFieldValue: (field: string, value: unknown) => void,
    setFieldTouched: (field: string, isTouched?: boolean) => void,
  ) => {
    setFieldValue(name, value);
    setTimeout(() => setFieldTouched(name, true));
  };

  return (
    <Field name={name}>
      {({ field, form, meta }: FieldProps) => (
        <div className={className}>
          <Select
            {...field}
            label={label}
            data={options}
            onChange={(value) =>
              handleChange(value, form.setFieldValue, form.setFieldTouched)
            }
            isSearchable={isSearchable}
            icon={icon}
            disabled={disabled}
            placeholder={placeholder}
            isRequired={isRequired}
            error={meta.touched && meta.error}
          />
        </div>
      )}
    </Field>
  );
};
