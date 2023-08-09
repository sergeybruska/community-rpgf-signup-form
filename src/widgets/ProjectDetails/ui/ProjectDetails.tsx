import { Badge, Image, rem, Tabs } from '@mantine/core';
import { type FC } from 'react';

import { checkProjectStatus } from '@/shared/lib/utils';
import { Spinner } from '@/shared/ui/Icons';
import { Title } from '@/shared/ui/Title/Title';
import {
  ProjectDetailsContactsTab,
  ProjectDetailsSummaryTab,
  ProjectDetailsTab,
  ProjectDetailsTeamTab,
  useProjectDetails,
} from '@/widgets/ProjectDetails';

export const ProjectDetails: FC = () => {
  const {
    currentProject,
    currentCategory,
    isLoading,
    isError,
    activeTab,
    setActiveTab,
  } = useProjectDetails();

  if (isError) {
    return <span>Something went wrong</span>;
  }

  if (isLoading || typeof currentProject === 'undefined') {
    return (
      <div className='flex flex-col justify-center items-center min-h-[9.625rem]'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='flex flex-col w-full max-w-[42.5rem] bg-white p-8 rounded-lg'>
      <div className='flex flex-row w-full space-x-4'>
        {currentProject.cover ? (
          <Image
            src={currentProject.cover}
            width={rem(80)}
            height={rem(80)}
            alt={currentProject.name}
            className='mb-4 shrink-0'
          />
        ) : (
          <div className='block w-[3.5rem] h-[3.5rem] rounded-full bg-gray-200 mb-4'></div>
        )}
        <div className='flex flex-col items-start w-full'>
          <Title
            order={1}
            size={rem(32)}
            mb={16}
            className='font-display'
            align='left'
          >
            {currentProject.name}
          </Title>
          <div className='flex w-full flex-row space-x-2'>
            {currentCategory && (
              <Badge color={`${currentCategory.color}.6`}>
                {currentCategory.name}
              </Badge>
            )}
            {checkProjectStatus(currentProject.createdAt) && (
              <Badge color='green.4'>New</Badge>
            )}
          </div>
        </div>
      </div>
      <Tabs
        value={activeTab}
        onTabChange={setActiveTab}
        color='red'
        classNames={{ tab: 'font-semibold font-display' }}
      >
        <Tabs.List>
          <Tabs.Tab value={ProjectDetailsTab.summary}>
            {ProjectDetailsTab.summary}
          </Tabs.Tab>
          <Tabs.Tab value={ProjectDetailsTab.team}>
            {ProjectDetailsTab.team}
          </Tabs.Tab>
          <Tabs.Tab value={ProjectDetailsTab.contacts}>
            {ProjectDetailsTab.contacts}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value={ProjectDetailsTab.summary}>
          <ProjectDetailsSummaryTab project={currentProject} />
        </Tabs.Panel>
        <Tabs.Panel value={ProjectDetailsTab.team}>
          <ProjectDetailsTeamTab project={currentProject} />
        </Tabs.Panel>
        <Tabs.Panel value={ProjectDetailsTab.contacts}>
          <ProjectDetailsContactsTab project={currentProject} />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};
