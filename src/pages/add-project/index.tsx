import { rem, Text } from '@mantine/core';

import { CreateProjectForm } from '@/features/CreateProject';
import { Footer } from '@/shared/ui/Footer/Footer';
import { Layout } from '@/shared/ui/Layout';
import { Title } from '@/shared/ui/Title/Title';
import { Header } from '@/widgets/Header';

export default function AddProjectPage() {
  return (
    <Layout
      title='Community RPGF Signup Form'
      description='descr'
      headerSlot={<Header />}
      footerSlot={<Footer />}
    >
      <section className='flex w-full flex-col items-center pt-[4rem]'>
        <div className='flex flex-col items-start'>
          <Title order={1} size={rem(52)} mb={16} className='font-display'>
            Nominate project
          </Title>
          <Text
            size='xl'
            color='gray'
            mb={32}
            align='left'
            className='max-w-[43rem]'
          >
            Please provide all the necessary information about the project.
          </Text>
          <CreateProjectForm />
        </div>
      </section>
    </Layout>
  );
}
