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
      <Text size='sm' className='font-semibold mb-2 font-display'>
        Contact name
      </Text>
      <Text size='md' color='gray.7' mb={16} align='left'>
        {project.contact_name}
      </Text>
      <Text size='sm' className='font-semibold mb-2 font-display'>
        Email
      </Text>
      <Text size='md' color='gray.7' mb={16} align='left'>
        {project.contact_email}
      </Text>
      <Text size='sm' className='font-semibold mb-2 font-display'>
        Telegram
      </Text>
      <Text size='md' color='gray.7' mb={16} align='left'>
        {project.contact_tg}
      </Text>
    </div>
  );
};
