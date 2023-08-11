import { Title } from '@mantine/core';

import { Footer } from '@/shared/ui/Footer/Footer';
import { Layout } from '@/shared/ui/Layout';
import { Header } from '@/widgets/Header';
import { ProjectsModerateContainer } from '@/widgets/ProjectsContainer';

export default function ProjectPage() {
  return (
    <Layout
      title='Admin'
      description='Admin'
      headerSlot={<Header />}
      footerSlot={<Footer />}
    >
      <section className='flex flex-col items-center w-full pt-[4rem]'>
        <Title order={1} mb={16} className='font-display text-4xl md:text-5xl'>
          Admin/Projects
        </Title>
        <ProjectsModerateContainer isRow isProjectPage />
      </section>
    </Layout>
  );
}
