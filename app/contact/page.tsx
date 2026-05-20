import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import FadeInOnScroll from '@/components/motion/FadeInOnScroll';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${site.name} in West Hollywood. Phone, email, hours, and directions.`,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `Contact | ${site.name}`,
    description: `Call, email, or visit ${site.name} at ${site.address.street}, ${site.address.city}, ${site.address.region}.`,
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

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`,
  );

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ]}
      />
      <PageHero
        eyebrow="Contact"
        title="Have questions? Get in touch."
        intro="We're a friendly front desk away. Call, email, or send us a note below."
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/contact', label: 'Contact' },
        ]}
      />

      <section className="section">
        <div className="container-narrow grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <FadeInOnScroll className="space-y-6">
            <article className="rounded-2xl bg-white p-7 shadow-card">
              <h2 className="font-display text-xl text-navy-900">Visit</h2>
              <address className="not-italic mt-3 text-sm leading-relaxed text-ink-muted">
                {site.address.street}<br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </address>
              <a
                href={site.socials.google}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-sm font-semibold uppercase tracking-wider text-sunset-600 hover:text-navy-700"
              >
                Get directions →
              </a>
            </article>

            <article className="rounded-2xl bg-white p-7 shadow-card">
              <h2 className="font-display text-xl text-navy-900">Phone &amp; email</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href={site.phoneHref} className="text-navy-900 hover:text-sunset-600">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="text-navy-900 hover:text-sunset-600">
                    {site.email}
                  </a>
                </li>
              </ul>
            </article>

            <article className="rounded-2xl bg-navy-900 p-7 text-white shadow-card">
              <h2 className="font-display text-xl">Hours</h2>
              <ul className="mt-3 space-y-1 text-sm text-navy-100">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-3">
                    <span>{h.day}</span>
                    <span>{h.open ? `${formatTime(h.open)} – ${formatTime(h.close)}` : h.note ?? 'Closed'}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1}>
            <h2 className="font-display text-2xl text-navy-900">Send us a note</h2>
            <p className="mt-2 text-sm text-ink-muted">
              For appointment requests, please use the{' '}
              <a href="/appointment/" className="font-semibold text-navy-700 underline-offset-4 hover:underline">
                appointment form
              </a>{' '}
              — it captures the timing details we need.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <section aria-label="Map" className="border-t border-navy-100">
        <div className="aspect-[16/7] w-full">
          <iframe
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map showing ${site.name} location`}
            className="h-full w-full border-0"
          />
        </div>
      </section>
    </>
  );
}
