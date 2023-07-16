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
  } = props;
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <div className={className}>
          <MultiSelect
            {...field}
            name={name}
            label={label}
            options={options}
            itemComponent={itemComponent}
            setSelectedValues={(value) => form.setFieldValue(name, value)}
            isSearchable={isSearchable}
            maxSelections={maxSelections}
            icon={icon}
            placeholder={placeholder}
            disabled={disabled}
            nothingFound={nothingFound}
          />
        </div>
      )}
    </Field>
  );
};
