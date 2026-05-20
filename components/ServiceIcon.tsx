import type { Service } from '@/data/services';

type Props = { name: Service['icon']; className?: string };

const paths: Record<Service['icon'], React.ReactNode> = {
  tooth: (
    <path d="M12 3c-3 0-5 1.5-7 1.5C3.5 4.5 3 6 3 8c0 5 2 13 4 13 1.5 0 2-3 2.5-5s1-2.5 2.5-2.5S13 16 13.5 18s1 5 2.5 5c2 0 4-8 4-13 0-2-.5-3.5-2-3.5C16 6 14 4.5 12 4.5z" />
  ),
  sparkle: (
    <g>
      <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z" />
      <path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
    </g>
  ),
  shield: (
    <g>
      <path d="M12 3l8 3v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z" />
      <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  ),
  crown: (
    <g>
      <path d="M3 8l3 4 3-6 3 6 3-6 3 6 3-4-2 11H5z" />
      <circle cx="3" cy="8" r="1" />
      <circle cx="21" cy="8" r="1" />
    </g>
  ),
  smile: (
    <g>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="10" r="1" />
      <circle cx="15" cy="10" r="1" />
      <path d="M8 14c1.5 1.5 3 2 4 2s2.5-.5 4-2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  ),
  syringe: (
    <g>
      <path d="M14 3l7 7-2 2-1-1-3 3 1 1-2 2-1-1-5 5-3 1 1-3 5-5-1-1 2-2 1 1 3-3-1-1z" />
    </g>
  ),
  leaf: <path d="M5 19c0-9 6-15 15-15-1 9-6 15-15 15zM5 19c2-3 4-5 7-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />,
  star: <path d="M12 3l2.5 6 6.5.6-5 4.4 1.5 6.5L12 17l-5.5 3.5L8 14l-5-4.4 6.5-.6z" />,
};

export default function ServiceIcon({ name, className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
