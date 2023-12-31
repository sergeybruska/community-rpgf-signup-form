import type { FC } from 'react';

type SpinnerTypes = {
  fill?: string;
};

export const Spinner: FC<SpinnerTypes> = ({ fill }) => {
  return (
    <div className='flex justify-center items-center w-6 h-6 shrink-0'>
      <svg
        className='animate-spin'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 32 32'
      >
        <path
          stroke='rgba(248, 248, 248, 0.8)'
          strokeLinecap='round'
          strokeWidth='5'
          d='M28.8585 16.1621c0 7.1008-5.7563 12.8572-12.8571 12.8572-7.10081 0-12.85715-5.7564-12.85715-12.8572 0-7.10077 5.75634-12.85711 12.85715-12.85711 4.9049 0 9.1683 2.74661 11.3361 6.78571.9705 1.8083 1.521 3.8756 1.521 6.0714Z'
        />
        <path
          stroke={fill || '#d31515'}
          strokeLinecap='round'
          strokeWidth='5'
          d='M16.0011 3.3053c4.9049 0 9.1684 2.74661 11.3362 6.7857'
        />
      </svg>
    </div>
  );
};
