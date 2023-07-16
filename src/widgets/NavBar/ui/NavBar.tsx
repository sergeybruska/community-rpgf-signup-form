import { useRouter } from 'next/router';
import type { FC } from 'react';

import { NavLink } from '@/shared/ui/NavLink/NavLink';
import { NAVLINKS } from '@/widgets/NavBar/lib/consts';

const navBarClassName =
  'flex flex-row justify-center items-center absolute inset-x-2/4';

export const NavBar: FC = () => {
  const router = useRouter();

  return (
    <nav className={navBarClassName}>
      {NAVLINKS.map((item) => (
        <NavLink
          key={`nav-link.${item.label}`}
          href={item.path}
          path={router.pathname}
          ariaLabel={item.label}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
