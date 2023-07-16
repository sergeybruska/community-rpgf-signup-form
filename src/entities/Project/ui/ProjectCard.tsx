import { Badge, Image, rem, Text } from '@mantine/core';
import { IconThumbUp } from '@tabler/icons-react';
import Link from 'next/link';
import { type FC } from 'react';

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

  const mergedClassName = clsxMerge(
    'flex flex-col w-full rounded-xl bg-white border border-gray-100 p-8',
    className && className,
  );

  return (
    <Link
      href={`${navigationRoutes.projects}/${project.id}`}
      className={mergedClassName}
    >
      {project.logo ? (
        <Image
          src={project.logo}
          width={rem(56)}
          height={rem(56)}
          alt={project.name}
        />
      ) : (
        <div className='block w-[3.5rem] h-[3.5rem] rounded-full bg-gray-200 mb-4'></div>
      )}
      <Title order={5} mb={4}>
        {project.name}
      </Title>
      <Text size='sm' color='gray' mb={16} align='left' lineClamp={2}>
        {project.description}
      </Text>
      <div className='flex w-full flex-row mb-8'>
        <Badge color='teal.6'>{project.category}</Badge>
      </div>

      <div className='flex flex-row items-center'>
        <div className='flex flex-row items-center text-red-700 text-sm font-bold'>
          <IconThumbUp size={22} color='red' />
          <span className='ml-1'>{project.likes}</span>
        </div>
      </div>
    </Link>
  );
};
