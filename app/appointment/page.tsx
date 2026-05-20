import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AppointmentForm from '@/components/AppointmentForm';
import FadeInOnScroll from '@/components/motion/FadeInOnScroll';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description: `Request an appointment with ${site.name}. New patients welcome. We respond within one business day.`,
  alternates: { canonical: '/appointment' },
  openGraph: {
    title: `Book an Appointment | ${site.name}`,
    description: `Request an appointment with ${site.name}. New patients welcome.`,
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: site.name }],
  },
};

function formatTime(t: string | null) {
  if (!t) return null;
  const [h, m] = t.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const hour12 = ((h + 11) % 12) + 1;
  return `${hour12}:${m.toString().padStart(2, '0')} ${period}`;
}

export default function AppointmentPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Appointment', href: '/appointment' },
        ]}
      />
      <PageHero
        eyebrow="Appointment"
        title="Let's get you on the calendar."
        intro="Tell us a little about what you're looking for. We respond within one business day."
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/appointment', label: 'Appointment' },
        ]}
      />
      <section className="section">
        <div className="container-narrow grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <FadeInOnScroll>
            <AppointmentForm />
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1} className="space-y-6">
            <article className="rounded-2xl bg-white p-7 shadow-card">
              <h2 className="font-display text-xl text-navy-900">Prefer to call?</h2>
              <p className="mt-3 text-sm text-ink-muted">
                Our front desk answers Monday through Saturday during business hours.
              </p>
              <a href={site.phoneHref} className="mt-4 inline-block font-display text-3xl text-navy-700 hover:text-sunset-600">
                {site.phone}
              </a>
            </article>

            <article className="rounded-2xl bg-navy-900 p-7 text-white shadow-card">
              <h2 className="font-display text-xl">Office hours</h2>
              <ul className="mt-4 space-y-1 text-sm text-navy-100">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-3">
                    <span>{h.day}</span>
                    <span>{h.open ? `${formatTime(h.open)} – ${formatTime(h.close)}` : h.note ?? 'Closed'}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}
