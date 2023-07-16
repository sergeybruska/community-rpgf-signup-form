import {
  type InputProps,
  type InputSharedProps,
  TextInput,
} from '@mantine/core';
import type { FC, InputHTMLAttributes, ReactNode } from 'react';

type InputGeneratorProps = InputSharedProps &
  InputProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label?: ReactNode;
    isOptional?: boolean;
    placeholder?: string;
    className?: string;
    isRequired?: boolean;
  };

const inputWrapperClassName = 'flex flex-col w-full ';

export const InputGenerator: FC<InputGeneratorProps> = ({
  isRequired,
  ...props
}) => {
  const { placeholder, value, onChange, error } = props;

  return (
    <div className={inputWrapperClassName}>
      <TextInput
        {...props}
        withAsterisk={isRequired}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        classNames={{
          input:
            'border-gray-200 rounded-lg min-h-[3.125rem] focus:border-gray-400',
          label:
            'text-sm text-left font-semibold text-black mb-1 whitespace-nowrap',
        }}
        error={error}
      />
    </div>
  );
};
