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
      classNames={{
        label: 'mb-1 font-semibold',
        input:
          'border-gray-400 rounded-sm focus:border-green active:border-green font-body',
        value:
          'border border-green bg-white uppercase text-green font-bold fill-green',
      }}
    />
  );
};
