import { ActionIcon as ActionIconButton } from '@mantine/core';
import { IconLogout, IconWallet } from '@tabler/icons-react';
import { useWeb3Modal } from '@web3modal/react';
import type { FC } from 'react';

import { useUserStore } from '@/entities/User';
import { useWalletConnect } from '@/features/WalletConnect';
import { Button } from '@/shared/ui/Button';

const userRowClassName = 'flex flex-row justify-start items-center';

const userNameClassName = 'text-xs font-bold mr-2';

export const UserBlockHeader: FC = () => {
  const { user, logOut } = useUserStore();
  const { onSignIn, disabled } = useWalletConnect();
  const { open, close } = useWeb3Modal();

  if (!user) {
    return (
      <Button
        type='button'
        variant='primary'
        color='red'
        size='md'
        leftIcon={<IconWallet size={16} />}
        onClick={open}
        disabled={disabled}
      >
        Connect wallet
      </Button>
    );
  }

  return (
    <div className={userRowClassName}>
      <div className={userNameClassName}>{user?.name}</div>
      <ActionIconButton
        component='button'
        color='gray.6'
        onClick={logOut}
        aria-label='Log out'
        size='lg'
        radius='xs'
      >
        <IconLogout size={20} />
      </ActionIconButton>
    </div>
  );
};
