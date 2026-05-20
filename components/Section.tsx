import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  id?: string;
  className?: string;
  children?: ReactNode;
};

export default function SectionHeader({ eyebrow, title, intro, align = 'left', id, className, children }: Props) {
  return (
    <header className={`${align === 'center' ? 'text-center' : ''} ${className ?? ''}`} id={id}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl text-navy-900 sm:text-4xl md:text-5xl">{title}</h2>
      {intro && (
        <div className={`mt-4 max-w-2xl text-base text-ink-muted ${align === 'center' ? 'mx-auto' : ''}`}>
          {intro}
        </div>
      )}
      {children}
    </header>
  );
}
