import {
  ActionIcon as ActionIconButton,
  type ButtonProps,
  FileButton,
} from '@mantine/core';
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
    <FileButton onChange={onClick} accept={accept}>
      {(props) => (
        <ActionIconButton
          {...props}
          aria-label={ariaLabel}
          color='green.5'
          variant='subtle'
          disabled={disabled}
        >
          <IconPlus size={20} />
        </ActionIconButton>
      )}
    </FileButton>
  );
};
