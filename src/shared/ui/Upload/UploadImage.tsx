import {
  ActionIcon as ActionIconButton,
  Image,
  rem,
  Text,
} from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { type FC } from 'react';

import { useUploadCover } from '@/shared/lib/useUploadCover';

import { UploadButton } from '../Button';

type UploadImageProps = {
  onClick: (file: string) => void;
  removeImage: () => void;
  file: string | null;
  label?: string;
  disabled?: boolean;
};

const uploadContainerClassName = 'flex flex-row w-full items-center';

const uploadRemoveImageClassName = 'flex flex-row absolute top-2 right-2 z-10';

const uploadLabelClassName =
  'text-sm text-left font-semibold text-black mb-1 whitespace-nowrap';

const uploadImgContainerClassName =
  'flex relative flex-col justify-center items-center';

const uploadHintBlockClassName = 'flex flex-col max-w-[13.75rem] p-4';

export const UploadImage: FC<UploadImageProps> = ({
  file,
  label,
  disabled,
  onClick,
  removeImage,
}) => {
  const { localImage, handleUploadFile } = useUploadCover(file, onClick);

  return (
    <>
      {label && <div className={uploadLabelClassName}>{label}</div>}
      <div className={uploadContainerClassName}>
        {localImage ? (
          <div className={uploadImgContainerClassName}>
            <div className={uploadRemoveImageClassName}>
              <ActionIconButton
                type='button'
                color='gray.6'
                variant='subtle'
                onClick={removeImage}
                disabled={disabled}
              >
                <IconTrash size={20} />
              </ActionIconButton>
            </div>
            <Image
              src={localImage}
              alt='Preview'
              width={rem(160)}
              height={rem(160)}
              radius='md'
              fit='cover'
            />
          </div>
        ) : (
          <UploadButton
            type='button'
            onClick={handleUploadFile}
            disabled={disabled}
          />
        )}
        <div className={uploadHintBlockClassName}>
          <Text size='sm' color='gray.6'>
            480x480 recommended and max size 300kb
          </Text>
        </div>
      </div>
    </>
  );
};
