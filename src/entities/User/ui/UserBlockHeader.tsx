import { ActionIcon as ActionIconButton } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';
import { type FC } from 'react';

const userRowClassName = 'flex flex-row justify-start items-center';

const userNameClassName = 'text-sm font-semibold mr-2';

export const UserBlockHeader: FC = () => {
  return (
    <div className={userRowClassName}>
      <ActionIconButton
        component='button'
        color='gray.6'
        onClick={() => console.log('hui')}
        aria-label='Log out'
        size='lg'
        radius='md'
      >
        <IconLogout size={20} />
      </ActionIconButton>
    </div>
  );
};
