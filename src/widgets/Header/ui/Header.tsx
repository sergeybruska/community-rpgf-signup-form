import { ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMenu } from '@tabler/icons-react';
import { Open_Sans } from 'next/font/google';
import type { FC } from 'react';

import { UserBlockHeader, useUserStore } from '@/entities/User';
import { clsxMerge } from '@/shared/lib/clsxMerge';
import { navigationRoutes } from '@/shared/routes/routes';
import { Button } from '@/shared/ui/Button';
import { NavBar } from '@/widgets/NavBar';

import { HeaderLogo } from './HeaderLogo';
import { MobileMenu } from './MobileMenu';

const openSans = Open_Sans({ subsets: ['latin'] });

const wrapperClassName = clsxMerge(
  'flex justify-center items-center flex-col px-4 md:px-[2.5rem] bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-20',
  openSans.className,
);

const rowClassName =
  'flex relative flex-row justify-between items-center w-full flex-1 py-4 max-w-[82.5rem]';

const actionSideClassName = 'hidden md:flex flex-row items-center';

export const Header: FC = () => {
  const { user } = useUserStore();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <header className={wrapperClassName}>
        <div className={rowClassName}>
          <HeaderLogo />
          <NavBar />
          <div className={actionSideClassName}>
            {user ? (
              <UserBlockHeader />
            ) : (
              <Button
                isLinkButton
                linkTo={navigationRoutes.addProject}
                variant='primary'
                color='red'
                size='base'
              >
                Apply Now
              </Button>
            )}
          </div>
          <ActionIcon onClick={open} className='flex md:hidden'>
            <IconMenu size={16} />
          </ActionIcon>
        </div>
      </header>
      <MobileMenu isOpen={opened} handleClose={close} />
    </>
  );
};
