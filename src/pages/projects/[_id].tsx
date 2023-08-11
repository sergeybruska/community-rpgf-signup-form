import { Footer } from '@/shared/ui/Footer/Footer';
import { Layout } from '@/shared/ui/Layout';
import { Header } from '@/widgets/Header';
import { ProjectDetails } from '@/widgets/ProjectDetails';

export default function ProjectPage() {
  return (
    <Layout
      title='Edit category'
      description='Edit category'
      headerSlot={<Header />}
      footerSlot={<Footer />}
    >
      <section className='flex flex-col items-center w-full pt-[4rem]'>
        <ProjectDetails />
      </section>
    </Layout>
  );
}
