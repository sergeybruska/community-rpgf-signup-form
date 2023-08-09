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
  'flex justify-center items-center px-3.5 h-7.5 border border-transparent rounded-sm whitespace-nowrap font-semibold text-center text-sm leading-7 text-black hover:text-red-500';

const isActiveClassName = 'border border-green text-green';

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
