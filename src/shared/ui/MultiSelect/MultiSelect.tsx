import { MultiSelect as MantineMultiSelect } from '@mantine/core';
import { type FC, type ReactNode, useEffect, useState } from 'react';

export type OptionSelect = {
  value: string;
  label: string;
};

type MultiSelectProps = {
  name: string;
  options: OptionSelect[];
  label?: string;
  icon?: ReactNode;
  disabled?: boolean;
  maxSelections?: number;
  isSearchable?: boolean;
  placeholder?: string;
  value: string[];
  valueComponent?: FC<ReactNode> | undefined;
  itemComponent?: FC<ReactNode> | undefined;
  setSelectedValues: (values: string[]) => void;
  nothingFound?: ReactNode;
  error?: ReactNode;
  isRequired?: boolean;
};

export const MultiSelect: FC<MultiSelectProps> = (props) => {
  const {
    name,
    options,
    label,
    icon,
    maxSelections,
    disabled,
    isSearchable,
    placeholder,
    value,
    valueComponent,
    itemComponent,
    nothingFound = 'Not found',
    error,
    isRequired,
    setSelectedValues,
  } = props;

  const [select, setSelect] = useState<string[]>([]);

  useEffect(() => {
    setSelect(value);
  }, [value]);

  return (
    <MantineMultiSelect
      label={label}
      name={name}
      data={options}
      placeholder={placeholder}
      valueComponent={valueComponent}
      itemComponent={itemComponent}
      value={select}
      onChange={setSelectedValues}
      icon={icon}
      searchable={isSearchable}
      maxSelectedValues={maxSelections}
      disabled={disabled}
      radius='xs'
      nothingFound={nothingFound}
      error={error}
      withAsterisk={isRequired}
      classNames={{
        label: 'mb-1 font-semibold',
        input:
          'flex flex-row items-center border-gray-200 rounded-lg min-h-[3.125rem] focus:border-gray-400',
        value:
          'border border-gray-200 bg-gray-200 rounded-md min-h-[2rem] text-sm text-gray-500 font-semibold fill-white',
        defaultValueRemove: 'text-gray-500',
        dropdown: 'rounded-lg',
      }}
    />
  );
};
