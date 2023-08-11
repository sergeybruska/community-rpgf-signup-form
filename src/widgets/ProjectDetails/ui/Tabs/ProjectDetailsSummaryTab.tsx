import { Spoiler, Text } from '@mantine/core';
import { IconFileDescription, IconWorld } from '@tabler/icons-react';
import { type FC } from 'react';

import { type Project } from '@/entities/Project';
import {
  displayPriceInLocalFormat,
  ensureHttpProtocol,
} from '@/shared/lib/utils';

type ProjectDetailsSummaryTabProps = {
  project: Project;
};

export const ProjectDetailsSummaryTab: FC<ProjectDetailsSummaryTabProps> = (
  props,
) => {
  const { project } = props;
  return (
    <div className='flex flex-col w-full py-4'>
      <div className='flex flex-row w-full space-x-8 mb-4'>
        <a
          href={ensureHttpProtocol(project.url_website)}
          className='flex flex-row items-center text-md font-semibold text-red-500'
          target='_blank'
        >
          <IconWorld size={16} className='mr-1' />
          Website
        </a>
        <a
          href={ensureHttpProtocol(project.url_whitepaper)}
          className='flex flex-row items-center text-md font-semibold text-red-500'
          target='_blank'
        >
          <IconFileDescription size={16} className='mr-1' />
          Whitepaper
        </a>
      </div>

      <Text size='sm' className='font-semibold mb-1 font-display'>
        Project description
      </Text>
      <Spoiler
        maxHeight={200}
        showLabel='Show more'
        hideLabel='Hide'
        classNames={{ root: 'mb-4', control: 'text-md text-red-500' }}
      >
        <Text
          size='md'
          color='gray.7'
          mb={16}
          align='left'
          component='p'
          className='whitespace-pre-wrap'
        >
          {project.description}
        </Text>
      </Spoiler>
      <Text size='sm' className='font-semibold mb-1 font-display'>
        Token
      </Text>
      <Text size='md' color='gray.7' mb={16} align='left' className='uppercase'>
        {project.has_token}
      </Text>
      <Text size='sm' className='font-semibold mb-1 font-display'>
        Size of Grant (USD)
      </Text>
      <Text size='md' color='gray.7' mb={16} align='left' className='uppercase'>
        {displayPriceInLocalFormat(project.size_grant * 100)}
      </Text>
      <Text size='sm' className='font-semibold mb-1 font-display'>
        Fundraising History
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
          {project.fund_history}
        </Text>
      </Spoiler>
    </div>
  );
};
