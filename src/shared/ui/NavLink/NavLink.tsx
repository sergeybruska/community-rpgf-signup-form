import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';

import { clsxMerge } from '@/shared/lib/clsxMerge';

type NavLinkProps = {
  href: string;
  path: string;
  className?: string;
  ariaLabel: string;
};

const navLinkClassName =
  'flex justify-center items-center px-4 h-9 rounded-md whitespace-nowrap font-semibold text-center text-sm leading-7 text-black hover:text-red-500';

const isActiveClassName = 'bg-white-100 text-red-500';

export const NavLink: FC<PropsWithChildren<unknown> & NavLinkProps> = (
  props,
) => {
  const { href, className, path, ariaLabel, children } = props;

  const isActive = path.startsWith(href);

  const mergedClassName = clsxMerge(
    navLinkClassName,
    isActive && isActiveClassName,
    className,
  );

  return (
    <Link href={href} className={mergedClassName} aria-label={ariaLabel}>
      {children}
    </Link>
  );
};
