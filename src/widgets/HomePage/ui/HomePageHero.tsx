import { rem, Text } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { type FC } from 'react';

import { Button } from '@/shared/ui/Button';
import { Title } from '@/shared/ui/Title/Title';

export const HomePageHero: FC = () => {
  return (
    <section className='flex w-full flex-col items-center pt-[7rem]'>
      <div className='flex flex-col items-center'>
        <Title order={1} size={rem(52)} mb={16}>
          Nominate a Project in the Ecosystem
        </Title>
        <Text
          size='xl'
          color='gray'
          mb={32}
          align='center'
          className='max-w-[43rem]'
        >
          Tell the community RetroPGF about your project and how it will be
          useful, so you increase the likelihood of getting grants
        </Text>
        <Button
          variant='primary'
          color='red'
          size='lg'
          leftIcon={<IconPlus size={16} />}
        >
          Add nominante
        </Button>
      </div>
    </section>
  );
};
