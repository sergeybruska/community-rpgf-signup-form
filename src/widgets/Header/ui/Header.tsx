import { Open_Sans } from 'next/font/google';
import type { FC } from 'react';

import { UserBlockHeader } from '@/entities/User';
import { clsxMerge } from '@/shared/lib/clsxMerge';
import { NavBar } from '@/widgets/NavBar';

import { HeaderLogo } from './HeaderLogo';

const openSans = Open_Sans({ subsets: ['latin'] });

const wrapperClassName = clsxMerge(
  'flex justify-center items-center flex-col px-[2.5rem] bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-20',
  openSans.className,
);

const rowClassName =
  'flex relative flex-row justify-between items-center w-full flex-1 py-4 max-w-[82.5rem]';

type HeaderProps = {
  isAuth?: boolean;
};

export const Header: FC<HeaderProps> = (props) => {
  const { isAuth } = props;
  return (
    <header className={wrapperClassName}>
      <div className={rowClassName}>
        <HeaderLogo />
        <NavBar />
        <UserBlockHeader />
      </div>
    </header>
  );
};
