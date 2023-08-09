import { Field, type FieldProps } from 'formik';
import { type FC, type ReactNode } from 'react';

import { MultiSelect, type OptionSelect } from '@/shared/ui/MultiSelect';

type MultiSelectFieldProps = {
  name: string;
  label?: string;
  options: OptionSelect[];
  icon?: ReactNode;
  placeholder?: string;
  className: string;
  maxSelections?: number;
  isSearchable?: boolean;
  disabled?: boolean;
  itemComponent?: FC<ReactNode> | undefined;
  nothingFound?: ReactNode;
  isRequired?: boolean;
};

export const MultiSelectField: FC<MultiSelectFieldProps> = (props) => {
  const {
    name,
    label,
    options,
    icon,
    placeholder,
    className,
    maxSelections,
    itemComponent,
    isSearchable,
    disabled,
    nothingFound,
    isRequired,
  } = props;

  const handleChange = (
    value: string[] | null,
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
          <MultiSelect
            {...field}
            name={name}
            label={label}
            options={options}
            itemComponent={itemComponent}
            setSelectedValues={(value) =>
              handleChange(value, form.setFieldValue, form.setFieldTouched)
            }
            isSearchable={isSearchable}
            maxSelections={maxSelections}
            icon={icon}
            placeholder={placeholder}
            disabled={disabled}
            nothingFound={nothingFound}
            isRequired={isRequired}
            error={meta.touched && meta.error}
          />
        </div>
      )}
    </Field>
  );
};
