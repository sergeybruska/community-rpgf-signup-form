import { type ButtonProps, FileButton } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import type { FC } from 'react';

type UploadButtonProps = ButtonProps & {
  onClick: (files: File) => void;
  accept?: string;
  ariaLabel?: string;
};

export const UploadButton: FC<UploadButtonProps> = (props) => {
  const {
    onClick,
    accept = 'image/png,image/jpeg',
    ariaLabel,
    disabled,
  } = props;
  return (
    <FileButton onChange={onClick} accept={accept} disabled={disabled}>
      {(props) => (
        <div
          {...props}
          aria-label={ariaLabel}
          className='flex flex-col justify-center items-center shrink-0 cursor-pointer w-[10rem] h-[10rem] border border-dashed border-gray-200 rounded-lg bg-white hover:bg-white-100'
        >
          <IconPlus size={20} />
        </div>
      )}
    </FileButton>
  );
};
