import { Text } from '@mantine/core';
import { IconChevronRight, IconPlus } from '@tabler/icons-react';
import Link from 'next/link';

import { navigationRoutes } from '@/shared/routes/routes';
import { Button } from '@/shared/ui/Button';
import { Footer } from '@/shared/ui/Footer/Footer';
import { Layout } from '@/shared/ui/Layout';
import { Title } from '@/shared/ui/Title/Title';
import { Header } from '@/widgets/Header';
import { ProjectsContainer } from '@/widgets/ProjectsContainer';

export default function Home() {
  return (
    <Layout
      title='Nominate a Project in the Optimism Ecosystem'
      description='Tell the community RetroPGF about your project and how it will be useful, so you increase the likelihood of getting grants'
      headerSlot={<Header />}
      footerSlot={<Footer />}
      isCentered
    >
      <section className='flex w-full flex-col items-center pt-[4rem]'>
        <div className='flex flex-col items-center'>
          <Title
            order={1}
            mb={16}
            className='font-display max-w-[56.5rem] text-4xl md:text-5xl'
            align='center'
          >
            Nominate a Project in the Optimism Ecosystem
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
            linkTo={navigationRoutes.addProject}
            isLinkButton
            variant='primary'
            color='red'
            size='lg'
            leftIcon={<IconPlus size={16} />}
          >
            Apply Now
          </Button>
        </div>
      </section>
      <section className='flex w-full flex-col items-center py-[4rem]'>
        <div className='flex w-full flex-col max-w-[64rem]'>
          <div className='flex flex-row w-full justify-between'>
            <Title order={3} mb={16} className='font-display'>
              Last projects
            </Title>
            <Link
              href={navigationRoutes.projects}
              className='flex flex-row items-center text-md text-black hover:text-red-700 font-semibold mb-4'
            >
              More projects{' '}
              <div className='ml-2'>
                <IconChevronRight size={16} color='red' />
              </div>
            </Link>
          </div>
          <ProjectsContainer classNameCard='w-full mb-2' isRow />
        </div>
      </section>
    </Layout>
  );
}
