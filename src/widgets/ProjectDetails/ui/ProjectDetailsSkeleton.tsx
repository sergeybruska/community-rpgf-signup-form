import { rem, Skeleton } from '@mantine/core';
import { type FC } from 'react';

export const ProjectDetailsSkeleton: FC = () => {
  return (
    <div className='flex flex-col w-full max-w-[42.5rem] bg-white p-8 rounded-lg'>
      <div className='flex flex-row w-full space-x-4'>
        <Skeleton
          width={rem(80)}
          height={rem(80)}
          className='mb-4 shrink-0'
          radius='lg'
        />
        <div className='flex flex-col items-start w-full pt-1'>
          <Skeleton
            height={rem(36)}
            width={rem(200)}
            className='mb-2'
            radius='md'
          />
          <div className='flex w-full flex-row space-x-2'>
            <Skeleton
              height={rem(20)}
              width={rem(70)}
              className='mr-2'
              radius='md'
            />
            <Skeleton height={rem(20)} width={rem(70)} radius='md' />
          </div>
        </div>
      </div>
      <Skeleton height={rem(36)} width='100%' radius='md' className='mb-4' />
      <Skeleton height={8} radius='xl' />
      <Skeleton height={8} mt={6} radius='xl' />
      <Skeleton height={8} mt={6} width='70%' radius='xl' />
    </div>
  );
};
