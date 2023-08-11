// import { WalletConnectModalAuth } from '@walletconnect/modal-auth-react';
import { Open_Sans, Rubik } from 'next/font/google';
import Head from 'next/head';
import { type FC, type ReactNode } from 'react';

import { clsxMerge } from '@/shared/lib/clsxMerge';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--body-font' });
const rubik = Rubik({ subsets: ['latin'], variable: '--display-font' });

type LayoutProps = {
  title: string;
  description: string;
  headerSlot: ReactNode;
  footerSlot?: ReactNode;
  children: ReactNode;
  isCentered?: boolean;
};

export const Layout: FC<LayoutProps> = (props) => {
  const { title, description, headerSlot, footerSlot, children, isCentered } =
    props;

  const mergedClassName = clsxMerge(
    'flex flex-col w-full px-0 max-w-[82.5rem]',
    isCentered && 'items-center',
  );

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {headerSlot}
      <main
        className={`flex min-h-screen bg-white-600 flex-col py-[4rem] md:py-[5.625rem] px-4 md:px-[2.5rem] items-center justify-start ${openSans.variable} ${rubik.variable}`}
      >
        {/* <div className={mergedClassName}>{children}</div> */}
        {children}
      </main>
      {footerSlot}
    </>
  );
};
