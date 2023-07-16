import { type FC } from 'react';

import { SubscribeForm } from '@/features/SubscribeForm';

export const SubscribeContainer: FC = () => {
  return (
    <section className='flex flex-col w-full bg-white-100 p-8 rounded-lg'>
      <SubscribeForm />
    </section>
  );
};
