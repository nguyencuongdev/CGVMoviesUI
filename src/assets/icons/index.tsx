import { cn } from '@/libs/utils';

type Icon = {
  className?: string;
  width?: string;
  height?: string;
  fill?: string;
};

export function ArrowRightBorderIcon({ className, width = '24px', height = '24px', fill = '#666' }: Icon) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={fill}
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      width={width}
      height={height}
      className={cn(className || '')}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
      />
    </svg>
  );
}
