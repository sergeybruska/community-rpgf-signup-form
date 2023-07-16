import { Textarea as MantineTextarea, type TextareaProps } from '@mantine/core';
import type { FC, TextareaHTMLAttributes } from 'react';

type TextareaComponentProps = TextareaProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    isRequired?: boolean;
  };

export const Textarea: FC<TextareaComponentProps> = (props) => {
  const { isRequired } = props;

  return (
    <MantineTextarea
      {...props}
      withAsterisk={isRequired}
      classNames={{
        label: 'mb-1 font-semibold',
        input: 'border-gray-200 rounded-lg focus:border-green min-h-[8.25rem]',
      }}
    />
  );
};
