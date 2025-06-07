import type { SVGProps } from 'react';

const ReuseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
    <path d="M17 12V7h-5" />
    <path d="M21 7L12 16" />
     <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" opacity="0.2" />
  </svg>
);

export default ReuseIcon;
