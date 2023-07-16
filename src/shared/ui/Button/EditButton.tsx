import { ActionIcon as ActionIconButton } from '@mantine/core';
import { IconPencil } from '@tabler/icons-react';
import Link from 'next/link';
import type { FC } from 'react';

type EditButtonForCardsProps = {
  href: string;
};

const modelCardEditClassName = 'absolute right-0 top-0';

export const EditButtonForCards: FC<EditButtonForCardsProps> = ({
  href = '',
}) => {
  return (
    <div className={modelCardEditClassName}>
      <ActionIconButton
        component={Link}
        variant='default'
        href={href}
        color='gray.6'
        radius='xs'
      >
        <IconPencil size={20} color='#868E96' />
      </ActionIconButton>
    </div>
  );
};
