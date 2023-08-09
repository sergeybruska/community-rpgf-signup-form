import { Textarea as MantineTextarea, type TextareaProps } from '@mantine/core';
import type { FC, TextareaHTMLAttributes } from 'react';

type TextareaComponentProps = TextareaProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    isRequired?: boolean;
  };

export const Textarea: FC<TextareaComponentProps> = (props) => {
  const { isRequired, ...restProps } = props;

  return (
    <MantineTextarea
      {...restProps}
      withAsterisk={isRequired}
      classNames={{
        label: 'font-semibold',
        description: 'mb-2 text-sm leading-4',
        input:
          'border-gray-200 rounded-lg focus:border-gray-400 min-h-[8.25rem]',
      }}
    />
  );
};
