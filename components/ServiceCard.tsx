import Link from 'next/link';
import type { Service } from '@/data/services';
import ServiceIcon from './ServiceIcon';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col gap-4 rounded-2xl bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-cardHover"
    >
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-700 transition group-hover:bg-navy-700 group-hover:text-white">
        <ServiceIcon name={service.icon} className="h-8 w-8" />
      </span>
      <div>
        <h3 className="font-display text-2xl text-navy-900">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.shortDescription}</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-sunset-600">
        Learn more
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
