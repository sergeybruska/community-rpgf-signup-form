import { Text, Title } from '@mantine/core';
import { type FC } from 'react';

export const NoProjects: FC = () => {
  return (
    <div className='flex flex-col w-full min-h-[8.5rem] justify-center items-center border border-dashed border-gray-200 rounded-lg bg-white-100 hover:bg-white-200'>
      <Title order={5} mb={4}>
        There are no projects here yet
      </Title>
      <Text size='sm' color='gray.7'>
        Nominate your first project
      </Text>
    </div>
  );
};
