import { FileButton } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { type FC } from 'react';

type AddImageButtonProps = {
  disabled?: boolean;
  onChange: (file: File) => void;
};

const addImageBlockClassName =
  'flex relative flex-col justify-center items-center w-[calc(1/3*100%-1rem)] mx-[0.5rem] mb-4 min-h-[12.25rem] border border-gray-400 rounded-sm hover:border-green transition easy-150';

const addImageButtonClassName =
  'flex w-full h-full flex-col justify-center items-center bg-transparent text-sm';

export const AddImageButton: FC<AddImageButtonProps> = (props) => {
  const { disabled, onChange } = props;
  return (
    <div className={addImageBlockClassName}>
      <FileButton onChange={onChange} accept='image/png,image/jpeg'>
        {(props) => (
          <button
            {...props}
            type='button'
            className={addImageButtonClassName}
            disabled={disabled}
          >
            <IconPlus size={20} color='green' />
            <div className='mt-1'>Add image</div>
          </button>
        )}
      </FileButton>
    </div>
  );
};
