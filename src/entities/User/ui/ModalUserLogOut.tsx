import { Text } from '@mantine/core';
import { useRouter } from 'next/router';
import { type FC } from 'react';

import { useModalController } from '@/app/providers/ModalProvider';
import { navigationRoutes } from '@/shared/routes/routes';
import { Button } from '@/shared/ui/Button';

import { logOutUser } from '../model/store';

export const ModalUserLogOut: FC = () => {
  const router = useRouter();
  const modalController = useModalController();

  const handlerLogOut = () => {
    logOutUser();
    modalController.popModal();
    router.push(navigationRoutes.login);
  };

  return (
    <>
      <Text size='md'>Do you want to Log out?</Text>
      <div className='flex flex-row w-full space-x-4 mt-6'>
        <Button
          variant='outline'
          color='gray'
          size='lg'
          onClick={() => modalController.popModal()}
          fullWidth
        >
          Cancel
        </Button>
        <Button
          variant='primary'
          color='red'
          size='lg'
          fullWidth
          onClick={handlerLogOut}
        >
          Log Out
        </Button>
      </div>
    </>
  );
};
