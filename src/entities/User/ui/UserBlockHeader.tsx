import { ActionIcon as ActionIconButton, Menu } from '@mantine/core';
import { IconArticle, IconChevronDown, IconLogout } from '@tabler/icons-react';
import Link from 'next/link';
import { type FC } from 'react';

import { useModalController } from '@/app/providers/ModalProvider';
import { navigationRoutes } from '@/shared/routes/routes';

import { ModalUserLogOut } from './ModalUserLogOut';
import { useUserStore } from '../model/store';

const userRowClassName = 'flex flex-row justify-start items-center';

const userNameClassName =
  'flex flex-row items-center text-sm font-semibold mr-2 cursor-pointer';

export const UserBlockHeader: FC = () => {
  const modalController = useModalController();
  const { user } = useUserStore();

  const openModalUserLogOut = () => {
    modalController.pushModal({
      title: 'Log out',
      content: <ModalUserLogOut />,
      isCentered: true,
    });
  };

  return (
    <div className={userRowClassName}>
      <Menu
        shadow='md'
        width={200}
        offset={{
          mainAxis: 10,
          crossAxis: -60,
        }}
        classNames={{
          dropdown: 'rounded-md',
        }}
      >
        <Menu.Target>
          <div className={userNameClassName}>
            Hi, {user?.name}{' '}
            <ActionIconButton radius='md' size='md' className='ml-1'>
              <IconChevronDown size={16} />
            </ActionIconButton>
          </div>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            icon={<IconArticle size={16} />}
            component={Link}
            href={navigationRoutes.admin}
          >
            Dashboard
          </Menu.Item>
          {/* <Menu.Item
            icon={<IconSettings size={16} />}
            component={Link}
            href={navigationRoutes.admin}
          >
            Settings
          </Menu.Item> */}
          <Menu.Item
            icon={<IconLogout size={16} />}
            component='button'
            onClick={openModalUserLogOut}
          >
            Log Out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};
