import { useEffect, useState } from 'react';

import { createBlobFromFile } from '@/shared/lib/utils';

export const useUploadCover = (
  file: string | null,
  setFile: (value: string) => void,
) => {
  const [localImage, setLocalImage] = useState<string | null>(null);

  useEffect(() => {
    setLocalImage(file);
  }, [file]);

  const handleUploadFile = (file: File) => {
    const blob = createBlobFromFile(file);
    setFile(URL.createObjectURL(blob));
  };

  return {
    localImage,
    handleUploadFile,
  };
};
