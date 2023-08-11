import { Text, Title } from '@mantine/core';

import { Footer } from '@/shared/ui/Footer/Footer';
import { Layout } from '@/shared/ui/Layout';
import { Header } from '@/widgets/Header';

export default function ProjectPage() {
  return (
    <Layout
      title='Projects'
      description='Projects'
      headerSlot={<Header />}
      footerSlot={<Footer />}
    >
      <section className='flex flex-col items-center w-full pt-[4rem]'>
        <Title order={1} mb={16} className='font-display text-4xl md:text-5xl'>
          About
        </Title>
        <Text
          size='xl'
          color='gray'
          mb={16}
          align='left'
          className='max-w-[43rem]'
        >
          Innovative projects seeking grants
        </Text>
      </section>
      <section className='flex w-full flex-col items-center py-[4rem]'>
        <div className='flex w-full flex-col max-w-[64rem]'></div>
      </section>
    </Layout>
  );
}
