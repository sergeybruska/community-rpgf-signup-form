import { Badge, Image, rem, Skeleton, Text } from '@mantine/core';
import Link from 'next/link';
import { type FC } from 'react';

import { useCategory } from '@/entities/Category';
import { clsxMerge } from '@/shared/lib/clsxMerge';
import { checkProjectStatus } from '@/shared/lib/utils';
import { navigationRoutes } from '@/shared/routes/routes';
import { Title } from '@/shared/ui/Title/Title';

import { type Project } from '../model/types';

type ProjectCardRowProps = {
  project: Project;
  className?: string;
  isModerate?: boolean;
};

export const ProjectCardRow: FC<ProjectCardRowProps> = (props) => {
  const { project, className, isModerate } = props;
  const { data: category, isLoading } = useCategory(project.category);
  const mergedClassName = clsxMerge(
    'flex flex-row w-full rounded-xl bg-white border border-gray-100 p-4 mb-2',
    className && className,
  );

  if (isLoading) {
    return <Skeleton height={rem(140)} radius='md' width='100%' mb={8} />;
  }

  return (
    <Link
      href={
        isModerate
          ? `${navigationRoutes.adminEditProject}/${project._id}`
          : `${navigationRoutes.projects}/${project._id}`
      }
      className={mergedClassName}
    >
      {project.cover ? (
        <Image
          src={project.cover}
          width={rem(56)}
          height={rem(56)}
          alt={project.name}
          className='mb-4 shrink-0 rounded-lg'
        />
      ) : (
        <div className='block w-[3.5rem] h-[3.5rem] shrink-0 rounded-lg bg-gray-200 mb-4'></div>
      )}
      <div className='flex flex-col w-full px-4'>
        <Title order={5} className='font-display mb-1' lineClamp={1}>
          {project.name}
        </Title>
        <Text size='sm' color='gray' mb={16} align='left' lineClamp={2}>
          {project.description}
        </Text>
        <div className='flex w-full flex-row'>
          {category && (
            <Badge color={`${category.color}.6`} mr={4}>
              {category.name}
            </Badge>
          )}
          {checkProjectStatus(project.createdAt) && (
            <Badge color='green.4' mr={4}>
              New
            </Badge>
          )}
          {!project.is_moderate && isModerate && (
            <Badge color='red.8'>Unmoderated</Badge>
          )}
        </div>
      </div>
    </Link>
  );
};
