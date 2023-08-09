import { rem, Text } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

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
      title='Community RPGF Signup Form'
      description='descr'
      headerSlot={<Header />}
      footerSlot={<Footer />}
      isCentered
    >
      <section className='flex w-full flex-col items-center pt-[4rem]'>
        <div className='flex flex-col items-center'>
          <Title
            order={1}
            size={rem(52)}
            mb={16}
            className='font-display'
            align='center'
          >
            Nominate a Project in the Ecosystem
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
            Add project
          </Button>
        </div>
      </section>
      {/* <ProjectsContainer classNameCard='w-[calc(1/4*100%-1rem)] m-[0.5rem]' isRow /> */}
      <ProjectsContainer classNameCard='w-full mb-2' isRow />
    </Layout>
  );
}
