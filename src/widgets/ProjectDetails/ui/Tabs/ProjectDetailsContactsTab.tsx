import { Text } from '@mantine/core';
import { type FC } from 'react';

import { type ProjectModel } from '@/entities/Project';

type ProjectDetailsContactsTabProps = {
  project: ProjectModel;
};

export const ProjectDetailsContactsTab: FC<ProjectDetailsContactsTabProps> = (
  props,
) => {
  const { project } = props;
  return (
    <div className='flex flex-col w-full py-4'>
      <Text size='sm' className='font-semibold mb-1 font-display'>
        Contact name
      </Text>
      <Text size='md' color='gray.7' mb={16} align='left'>
        {project.contact_name}
      </Text>
      <Text size='sm' className='font-semibold mb-1 font-display'>
        Email
      </Text>
      <a
        href={`mailto:${project.contact_email}`}
        className='text-md text-red-500 hover:text-red-400 mb-3'
      >
        {project.contact_email}
      </a>

      <Text size='sm' className='font-semibold mb-1 font-display'>
        Telegram
      </Text>
      <Text size='md' color='gray.7' mb={16} align='left'>
        {project.contact_tg}
      </Text>
    </div>
  );
};
