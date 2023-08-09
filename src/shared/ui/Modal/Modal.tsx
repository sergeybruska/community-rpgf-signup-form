import { Modal as MantineModal } from '@mantine/core';
import { type FC, type PropsWithChildren } from 'react';

import { useModalController } from '@/app/providers/ModalProvider';

export const Modal: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { isOpen, modal, popModal } = useModalController();

  return (
    <MantineModal
      opened={isOpen}
      onClose={popModal}
      title={<div className='text-2xl font-bold text-black'>{modal.title}</div>}
      centered={modal.isCentered}
      radius='xs'
      size={modal.size}
      classNames={{
        content: modal.isContentOverflowYVisible
          ? 'overflow-y-visible'
          : 'overflow-y-auto',
      }}
    >
      {children}
    </MantineModal>
  );
};
