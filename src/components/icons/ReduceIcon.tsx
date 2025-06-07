import type { SVGProps } from 'react';

const ReduceIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M5 12h14" />
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" opacity="0.6" />
  </svg>
);

export default ReduceIcon;
