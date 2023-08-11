import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import { type FC } from 'react';

import { ProjectCard, ProjectCardRow } from '@/entities/Project';
import { useAllProjects } from '@/entities/Project/api/projectApi';
import { clsxMerge } from '@/shared/lib/clsxMerge';
import { navigationRoutes } from '@/shared/routes/routes';
import { Spinner } from '@/shared/ui/Icons';
import { Title } from '@/shared/ui/Title/Title';

type ProjectsModerateContainerProps = {
  classNameCard?: string;
  isRow?: boolean;
  isProjectPage?: boolean;
};

export const ProjectsModerateContainer: FC<ProjectsModerateContainerProps> = (
  props,
) => {
  const { classNameCard, isRow, isProjectPage } = props;

  const { data: projects, isLoading, isError } = useAllProjects();

  const mergedClassName = clsxMerge(
    'flex w-full flex-col py-[4rem]',
    isRow && 'max-w-[64rem]',
  );

  if (isError) {
    return <span>Something went wrong</span>;
  }

  if (isLoading && typeof projects === 'undefined') {
    return (
      <div className='flex flex-col justify-center items-center min-h-[9.625rem]'>
        <Spinner />
      </div>
    );
  }

  return (
    <section className={mergedClassName}>
      {!isProjectPage && (
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
      )}

      {isRow ? (
        <div className='flex w-full flex-col flex-wrap items-stretch'>
          {projects?.map((project) => (
            <ProjectCardRow
              key={project._id}
              project={project}
              className={classNameCard}
              isModerate
            />
          ))}
        </div>
      ) : (
        <div className='flex w-[calc(100%+1rem)] ml-[-0.5rem] flex-row flex-wrap items-stretch'>
          {projects?.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              className={classNameCard}
            />
          ))}
        </div>
      )}
    </section>
  );
};
