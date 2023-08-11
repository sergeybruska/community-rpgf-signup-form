import { type FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className='flex flex-col w-full items-center px-[2.5rem] py-4 bg-white-600'>
      <div className='text-sm text-gray-400'>
        &copy; 2023 Community RetroPGF
      </div>
    </footer>
  );
};
