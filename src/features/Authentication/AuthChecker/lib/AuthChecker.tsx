import { useRouter } from 'next/router';
import { type FC, type PropsWithChildren, useEffect } from 'react';

import { useUserStore } from '@/entities/User';
import { navigationRoutes } from '@/shared/routes/routes';
import { Spinner } from '@/shared/ui/Icons';

import { useSession } from './SessionProvider';

export const AuthChecker: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useSession();
  const { user } = useUserStore();

  const isLoginPage = router.pathname.startsWith(navigationRoutes.login);
  const isAdminPage = router.pathname.startsWith(navigationRoutes.admin);

  useEffect(() => {
    if (!user && isAdminPage) {
      router.push(navigationRoutes.login);
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className='flex flex-col w-full min-h-screen items-center justify-center'>
        <Spinner />
      </div>
    );
  }

  if (isAuthenticated && isLoginPage) {
    router.push(navigationRoutes.home);
    return null;
  }

  if (!isAuthenticated && isAdminPage) {
    router.push(navigationRoutes.login);
    return null;
  }

  return <>{children}</>;
};
