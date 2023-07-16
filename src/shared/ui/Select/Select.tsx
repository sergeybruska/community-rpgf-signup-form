import { Select as MantineSelect } from '@mantine/core';
import { type FC, type ReactNode } from 'react';

import { type OptionSelect } from '../MultiSelect';

type SelectProps = {
  name: string;
  options: OptionSelect[];
  value: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  isSearchable?: boolean;
  placeholder?: string;
  setSelectedValue: (values: string) => void;
};

export const Select: FC<SelectProps> = (props) => {
  const {
    name,
    options,
    label,
    icon,
    value,
    isSearchable,
    placeholder,
    disabled,
    setSelectedValue,
  } = props;
  return (
    <MantineSelect
      name={name}
      label={label}
      icon={icon}
      value={value}
      placeholder={placeholder}
      onChange={setSelectedValue}
      data={options}
      searchable={isSearchable}
      disabled={disabled}
      styles={(theme) => ({
        item: {
          '&[data-selected]': {
            '&, &:hover': {
              backgroundColor: theme.colors.green[5],
              color: theme.white,
            },
          },

          '&[data-hovered]': {},
        },
      })}
      classNames={{
        label: 'mb-1 font-semibold',
        input:
          'border-gray-400 rounded-sm focus:border-green active:border-green font-body',
      }}
    />
  );
};
