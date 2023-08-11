import { EditProjectForm } from '@/features/EditProject';
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
          <Title
            order={1}
            mb={16}
            className='font-display text-4xl md:text-5xl'
          >
            Edit project
          </Title>
          <EditProjectForm />
        </div>
      </section>
    </Layout>
  );
}
