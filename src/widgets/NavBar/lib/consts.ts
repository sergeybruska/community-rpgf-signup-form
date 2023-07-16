import { navigationRoutes } from '@/shared/routes/routes';

export type NavLinkTypes = {
  label: string;
  path: string;
};

export const NAVLINKS: NavLinkTypes[] = [
  {
    label: 'Announcements',
    path: navigationRoutes.announcements,
  },
  {
    label: 'Projects',
    path: navigationRoutes.projects,
  },
  {
    label: 'About',
    path: navigationRoutes.about,
  },
];
