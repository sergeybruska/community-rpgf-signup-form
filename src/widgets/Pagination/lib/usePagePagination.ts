import { useEffect, useState } from 'react';

import { type Project } from '@/entities/Project';

export const usePagePagination = (
  offset: number,
  itemsPerPage: number,
  items: Project[],
  changePageOffset: (value: number) => void,
) => {
  const [records, setRecords] = useState<Project[]>([]);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const activePage = Math.ceil(offset / itemsPerPage) + 1;

  const onChangePage = (value: number) => {
    const newOffset = (value - 1) * itemsPerPage;
    if (newOffset !== offset) {
      changePageOffset(newOffset);
    }
  };

  useEffect(() => {
    const from = offset;
    let to = from + itemsPerPage;
    if (to > items.length) to = items.length;

    setRecords((prevRecords) => {
      const newRecords = items.slice(from, to);
      return JSON.stringify(newRecords) !== JSON.stringify(prevRecords)
        ? newRecords
        : prevRecords;
    });
  }, [items, offset, itemsPerPage]);

  return {
    pageCount,
    activePage,
    onChangePage,
    records,
  };
};
