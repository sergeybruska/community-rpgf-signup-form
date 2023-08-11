import { Pagination } from '@mantine/core';
import type { FC } from 'react';

type PagePaginationProps = {
  totalPage: number;
  activePage: number;
  setPage: (value: number) => void;
};

const paginationContainerClassName =
  'flex flex-row justify-center items-center flex-1';

export const PagePagination: FC<PagePaginationProps> = (props) => {
  const { totalPage, activePage, setPage } = props;
  return (
    <div className={paginationContainerClassName}>
      <Pagination
        value={activePage}
        onChange={setPage}
        total={totalPage}
        radius='xs'
        color='red.5'
        styles={(theme) => ({
          control: {
            '&[data-active]:hover': {
              background: theme.colors.red[5],
            },
          },
        })}
      />
    </div>
  );
};
