import { Spoiler, Text } from '@mantine/core';
import { type FC } from 'react';

import { type ProjectModel } from '@/entities/Project';

type ProjectDetailsTeamTabProps = {
  project: ProjectModel;
};

export const ProjectDetailsTeamTab: FC<ProjectDetailsTeamTabProps> = (
  props,
) => {
  const { project } = props;
  return (
    <div className='flex flex-col w-full py-4'>
      <Text size='sm' className='font-semibold mb-2 font-display'>
        Company / Team Name
      </Text>
      <Text size='md' color='gray.7' mb={16} align='left'>
        {project.team_company}
      </Text>
      <Text size='sm' className='font-semibold mb-2 font-display'>
        About team
      </Text>
      <Spoiler
        maxHeight={200}
        showLabel='Show more'
        hideLabel='Hide'
        classNames={{ control: 'text-md text-red-500' }}
      >
        <Text
          size='md'
          color='gray.7'
          mb={16}
          align='left'
          component='p'
          className='whitespace-pre-wrap'
        >
          {project.about_team}
        </Text>
      </Spoiler>
    </div>
  );
};
