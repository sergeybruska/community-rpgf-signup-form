import { useRouter } from 'next/router';
import { useState } from 'react';

import { useCategory } from '@/entities/Category';
import { useProjectById } from '@/entities/Project';
import { ProjectDetailsTab } from '@/widgets/ProjectDetails';

export const useProjectDetails = () => {
  const router = useRouter();
  const { _id } = router.query;

  const {
    data: currentProject,
    isLoading: isLoadingCurrentProject,
    isError: isErrorCurrentProject,
  } = useProjectById(_id as string);
  const {
    data: currentCategory,
    isLoading: isLoadingCurrentCategory,
    isError: isErrorCurrentCategory,
  } = useCategory(currentProject?.category);

  const isLoading = isLoadingCurrentProject || isLoadingCurrentCategory;

  const isError = isErrorCurrentProject || isErrorCurrentCategory;

  const [activeTab, setActiveTab] = useState<string | null>(
    ProjectDetailsTab.summary,
  );

  return {
    currentProject,
    currentCategory,
    isLoading,
    isError,
    activeTab,
    setActiveTab,
  };
};
