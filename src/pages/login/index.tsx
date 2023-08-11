import { rem, Title } from '@mantine/core';

import { LoginForm } from '@/features/Authentication/Login';
import { Layout } from '@/shared/ui/Layout';
import { Header } from '@/widgets/Header';

export default function Login() {
  return (
    <Layout
      title='Login'
      description='Login'
      headerSlot={<Header />}
      isCentered
    >
      <section className='flex flex-col items-center w-full pt-[4rem]'>
        <Title order={1} size={rem(36)} mb={16} className='font-display'>
          Log In
        </Title>
        <LoginForm />
      </section>
    </Layout>
  );
}
