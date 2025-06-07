import type { SVGProps } from 'react';

const RecycleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2l4 4-1 3-4-3-4 3-1-3z" />
    <path d="M12 22l-4-4 1-3 4 3 4-3 1 3z" />
    <path d="M4 12l-2-3 4-1 3 4-3 4-4-1z" />
    <path d="M20 12l2-3-4-1-3 4 3 4 4-1z" />
    <path d="M15.5 6.5l-3 4-3-4" />
    <path d="M8.5 17.5l3-4 3 4" />
    <path d="M17.5 15.5l-4-3 4-3" />
    <path d="M6.5 8.5l4 3-4 3" />
  </svg>
);

export default RecycleIcon;
