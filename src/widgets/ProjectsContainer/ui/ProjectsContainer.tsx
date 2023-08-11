import { type FC } from 'react';

import { ProjectCard, ProjectCardRow, useProjects } from '@/entities/Project';
import { clsxMerge } from '@/shared/lib/clsxMerge';
import { Spinner } from '@/shared/ui/Icons';

import { NoProjects } from './NoProjects';

type ProjectsContainerProps = {
  classNameCard?: string;
  isRow?: boolean;
  isProjectPage?: boolean;
};

export const ProjectsContainer: FC<ProjectsContainerProps> = (props) => {
  const { classNameCard, isRow, isProjectPage } = props;

  const { data: projects, isLoading, isError } = useProjects();

  const mergedClassName = clsxMerge(
    'flex w-full flex-col',
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
    <>
      {isRow ? (
        <div className='flex w-full flex-col flex-wrap items-stretch'>
          {projects.length > 0 ? (
            projects?.map((project) => (
              <ProjectCardRow
                key={project._id}
                project={project}
                className={classNameCard}
              />
            ))
          ) : (
            <NoProjects />
          )}
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
    </>
  );
};
