import { type FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className='flex flex-col w-full px-[2.5rem] bg-white border-t border-gray-200'>
      <div className='text-sm text-gray-400'>
        &copy; 2023 Community RetroPGF
      </div>
    </footer>
  );
};
