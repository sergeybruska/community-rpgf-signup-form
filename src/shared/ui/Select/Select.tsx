import {
  Select as MantineSelect,
  type SelectProps as MantineSelectProps,
} from '@mantine/core';
import { type FC, type ReactNode } from 'react';

type SelectProps = MantineSelectProps & {
  name: string;
  value: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  isSearchable?: boolean;
  placeholder?: string;
  isRequired?: boolean;
  error?: ReactNode;
};

export const Select: FC<SelectProps> = (props) => {
  const {
    name,
    data,
    label,
    icon,
    value,
    isSearchable,
    placeholder,
    isRequired,
    disabled,
    error,
    onChange,
  } = props;

  return (
    <MantineSelect
      name={name}
      label={label}
      icon={icon}
      value={value}
      placeholder={placeholder}
      withAsterisk={isRequired}
      onChange={onChange}
      data={data}
      searchable={isSearchable}
      disabled={disabled}
      error={error}
      styles={(theme) => ({
        item: {
          '&[data-selected]': {
            '&, &:hover': {
              backgroundColor: theme.colors.gray[2],
              color: theme.black,
            },
          },

          '&[data-hovered]': {},
        },
      })}
      classNames={{
        label: 'mb-1 font-semibold',
        input:
          'border-gray-200 rounded-lg min-h-[3.125rem] focus:border-gray-400',
        dropdown: 'rounded-lg',
      }}
    />
  );
};
