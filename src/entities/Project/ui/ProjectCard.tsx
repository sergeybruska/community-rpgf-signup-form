import { Badge, Image, rem, Skeleton, Text } from '@mantine/core';
import Link from 'next/link';
import { type FC } from 'react';

import { useCategory } from '@/entities/Category';
import { clsxMerge } from '@/shared/lib/clsxMerge';
import { navigationRoutes } from '@/shared/routes/routes';
import { Title } from '@/shared/ui/Title/Title';

import { type ProjectModel } from '../model/types';

type ProjectCardProps = {
  project: ProjectModel;
  className?: string;
};

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { project, className } = props;
  const { data: category, isLoading } = useCategory(project.category);
  const mergedClassName = clsxMerge(
    'flex flex-col w-full rounded-xl bg-white border border-gray-100 p-8',
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
          className='mb-4'
        />
      ) : (
        <div className='block w-[3.5rem] h-[3.5rem] rounded-full bg-gray-200 mb-4'></div>
      )}
      <Title order={5} mb={4} className='font-display'>
        {project.name}
      </Title>
      <Text size='sm' color='gray' mb={16} align='left' lineClamp={4}>
        {project.description}
      </Text>
      <div className='flex w-full flex-row'>
        {category && (
          <Badge color={`${category.color}.6`}>{category.name}</Badge>
        )}
      </div>
    </Link>
  );
};
