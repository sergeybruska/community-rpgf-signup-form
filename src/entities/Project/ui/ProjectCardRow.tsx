import { Badge, Image, rem, Skeleton, Text } from '@mantine/core';
import Link from 'next/link';
import { type FC } from 'react';

import { useCategory } from '@/entities/Category';
import { clsxMerge } from '@/shared/lib/clsxMerge';
import { checkProjectStatus } from '@/shared/lib/utils';
import { navigationRoutes } from '@/shared/routes/routes';
import { Title } from '@/shared/ui/Title/Title';

import { type ProjectModel } from '../model/types';

type ProjectCardRowProps = {
  project: ProjectModel;
  className?: string;
};

export const ProjectCardRow: FC<ProjectCardRowProps> = (props) => {
  const { project, className } = props;
  const { data: category, isLoading } = useCategory(project.category);
  const mergedClassName = clsxMerge(
    'flex flex-row w-full rounded-xl bg-white border border-gray-100 p-4',
    className && className,
  );

  if (isLoading) {
    return <Skeleton height={rem(70)} radius='md' width='100%' mb={16} />;
  }

  return (
    <Link
      href={`${navigationRoutes.projects}/${project._id}`}
      className={mergedClassName}
    >
      {project.cover ? (
        <Image
          src={project.cover}
          width={rem(56)}
          height={rem(56)}
          alt={project.name}
          className='mb-4 shrink-0'
        />
      ) : (
        <div className='block w-[3.5rem] h-[3.5rem] rounded-full bg-gray-200 mb-4'></div>
      )}
      <div className='flex flex-col w-full px-4'>
        <div className='flex w-full flex-row items-center mb-2'>
          <Title order={5} className='font-display mr-2' lineClamp={1}>
            {project.name}
          </Title>
          {category && (
            <Badge color={`${category.color}.6`} mr={4}>
              {category.name}
            </Badge>
          )}
          {checkProjectStatus(project.createdAt) && (
            <Badge color='green.4'>New</Badge>
          )}
        </div>

        <Text size='sm' color='gray' mb={16} align='left' lineClamp={2}>
          {project.description}
        </Text>
        <div className='flex w-full flex-row'></div>
      </div>
    </Link>
  );
};
