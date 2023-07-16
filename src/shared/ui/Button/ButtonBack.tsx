import { IconChevronLeft } from '@tabler/icons-react';
import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';

import { clsxMerge } from '@/shared/lib/clsxMerge';

type ButtonPackProps = {
  href: string;
  className?: string;
};

const buttonClassName =
  'flex flex-row items-center rounded-sm cursor-pointer ease-in duration-150 text-sm text-green pr-2';

const iconBoxClassName = 'flex place-content-center shrink-0 mr-2.5';

export const ButtonBack: FC<PropsWithChildren<unknown> & ButtonPackProps> = ({
  children,
  href,
  className,
}) => {
  const mergedClassName = clsxMerge(buttonClassName, className);

  return (
    <Link href={href} className={mergedClassName}>
      <div className={iconBoxClassName}>
        <IconChevronLeft size={14} stroke={3} color='#087F5B' />
      </div>
      {children}
    </Link>
  );
};
