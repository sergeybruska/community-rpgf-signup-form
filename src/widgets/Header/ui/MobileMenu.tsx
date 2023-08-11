import { Drawer } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import Link from 'next/link';
import { type FC } from 'react';

import { navigationRoutes } from '@/shared/routes/routes';
import { Button } from '@/shared/ui/Button';

import { HeaderLogo } from './HeaderLogo';

type MobileMenuProps = {
  isOpen: boolean;
  handleClose: () => void;
};

export const MobileMenu: FC<MobileMenuProps> = (props) => {
  const { isOpen, handleClose } = props;

  return (
    <Drawer opened={isOpen} onClose={handleClose} title={<HeaderLogo />}>
      <div className='flex flex-col flex-1 justify-between'>
        <div className='flex flex-col w-full pt-4 mb-4'>
          <Link
            href={navigationRoutes.projects}
            className='text-lg font-semibold py-4'
          >
            Projects
          </Link>
          <Link
            href={navigationRoutes.about}
            className='text-lg font-semibold py-4'
          >
            About
          </Link>
        </div>
        <Button
          linkTo={navigationRoutes.addProject}
          isLinkButton
          variant='primary'
          color='red'
          size='lg'
          fullWidth
          leftIcon={<IconPlus size={16} />}
        >
          Apply Now
        </Button>
      </div>
    </Drawer>
  );
};
