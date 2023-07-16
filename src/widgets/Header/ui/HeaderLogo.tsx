import Link from 'next/link';
import type { FC } from 'react';

import { Logo } from '@/shared/ui/Icons';

export const HeaderLogo: FC = () => {
  return (
    <Link href='/'>
      <Logo />
    </Link>
  );
};
