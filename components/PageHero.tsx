import type { ReactNode } from 'react';
import Link from 'next/link';

type Breadcrumb = { href: string; label: string };

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  breadcrumbs?: Breadcrumb[];
};

export default function PageHero({ eyebrow, title, intro, breadcrumbs }: Props) {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 pb-16 pt-36 text-white md:pb-24 md:pt-44">
      <div className="container-narrow">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-navy-200">
              {breadcrumbs.map((b, i) => (
                <li key={b.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i === breadcrumbs.length - 1 ? (
                    <span aria-current="page" className="text-sun-400">
                      {b.label}
                    </span>
                  ) : (
                    <Link href={b.href} className="hover:text-white">
                      {b.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-sun-400">{eyebrow}</p>
        )}
        <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl md:text-6xl">{title}</h1>
        {intro && <div className="mt-5 max-w-2xl text-base text-navy-100 md:text-lg">{intro}</div>}
      </div>
    </section>
  );
}
