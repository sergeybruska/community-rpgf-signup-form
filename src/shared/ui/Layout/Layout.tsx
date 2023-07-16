import { WalletConnectModalAuth } from '@walletconnect/modal-auth-react';
import { Open_Sans, Rubik } from 'next/font/google';
import Head from 'next/head';
import { type FC, type ReactNode } from 'react';

import { useWalletConnect } from '@/features/WalletConnect';
import { clsxMerge } from '@/shared/lib/clsxMerge';

const openSans = Open_Sans({ subsets: ['latin'] });
const rubik = Rubik({ subsets: ['latin'] });

type LayoutProps = {
  title: string;
  description: string;
  headerSlot: ReactNode;
  footerSlot: ReactNode;
  children: ReactNode;
  isCentered?: boolean;
};

export const Layout: FC<LayoutProps> = (props) => {
  const { title, description, headerSlot, footerSlot, children, isCentered } =
    props;
  const { projectId } = useWalletConnect();
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
        className={`flex min-h-screen bg-white flex-col py-[5.625rem] px-[2.5rem] items-center justify-start ${openSans.className} ${rubik.className}`}
      >
        <div className={mergedClassName}>{children}</div>
        <WalletConnectModalAuth
          projectId={projectId}
          metadata={{
            name: 'My Dapp',
            description: 'My Dapp description',
            url: 'https://my-dapp.com',
            icons: ['https://my-dapp.com/logo.png'],
          }}
        />
      </main>
      {footerSlot}
    </>
  );
};
