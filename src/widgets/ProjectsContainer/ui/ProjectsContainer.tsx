import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import { type FC } from 'react';

import { ProjectCard } from '@/entities/Project';
import { navigationRoutes } from '@/shared/routes/routes';
import { Title } from '@/shared/ui/Title/Title';

import { MOCK_PROJECTS } from '../lib/mock';

type ProjectsContainerProps = {
  classNameCard?: string;
};

export const ProjectsContainer: FC<ProjectsContainerProps> = (props) => {
  const { classNameCard } = props;

  return (
    <section className='flex w-full flex-col py-[6rem]'>
      <div className='flex flex-row w-full justify-between'>
        <Title order={3} mb={16}>
          Popular projects
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

      <div className='flex w-[calc(100%+1rem)] ml-[-0.5rem] flex-row flex-wrap items-stretch'>
        {MOCK_PROJECTS?.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            className={classNameCard}
          />
        ))}
      </div>
    </section>
  );
};
