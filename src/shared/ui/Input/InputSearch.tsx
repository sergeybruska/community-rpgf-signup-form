import { Input, type InputSharedProps } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import type { FC, InputHTMLAttributes } from 'react';

type InputSearchProps = InputSharedProps &
  InputHTMLAttributes<HTMLInputElement> & {
    placeholder: string;
  };

export const InputSearch: FC<InputSearchProps> = (props) => {
  const { placeholder, onChange } = props;
  return (
    <Input.Wrapper>
      <Input
        icon={<IconSearch size={16} />}
        placeholder={placeholder}
        onChange={onChange}
        classNames={{
          wrapper: 'w-full',
          input: 'border-gray-400 rounded-sm focus:border-green',
        }}
      />
    </Input.Wrapper>
  );
};
