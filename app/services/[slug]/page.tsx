import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import FadeInOnScroll from '@/components/motion/FadeInOnScroll';
import ServiceCard from '@/components/ServiceCard';
import ServiceIcon from '@/components/ServiceIcon';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import JsonLd from '@/components/JsonLd';
import { services } from '@/data/services';
import { site } from '@/data/site';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.shortDescription,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.title,
    description: service.shortDescription,
    url: `${site.url}/services/${service.slug}/`,
    image: `${site.url}${service.image}`,
    provider: { '@id': `${site.url}/#dentist` },
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: service.title, href: `/services/${service.slug}` },
        ]}
      />
      <JsonLd data={serviceLd} />

      <PageHero
        eyebrow="Service"
        title={service.title}
        intro={service.shortDescription}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/services', label: 'Services' },
          { href: `/services/${service.slug}`, label: service.title },
        ]}
      />

      {/* Intro + lead image */}
      <section className="section">
        <div className="container-narrow grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <FadeInOnScroll effect="fade-right">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-700">
              <ServiceIcon name={service.icon} className="h-8 w-8" />
            </span>
            <p className="mt-6 font-display text-2xl leading-snug text-navy-900 sm:text-3xl">
              {service.intro}
            </p>
            <div className="prose-body mt-6 space-y-4">
              {service.longDescription.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll effect="fade-left" delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-cardHover">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-navy-950/40 to-transparent"
              />
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-navy-50/60 py-16 md:py-20">
        <div className="container-narrow">
          <FadeInOnScroll>
            <p className="eyebrow text-center">What you can expect</p>
            <h2 className="mt-3 text-center font-display text-3xl text-navy-900 sm:text-4xl">
              The benefits of this treatment
            </h2>
          </FadeInOnScroll>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.highlights.map((h, i) => (
              <FadeInOnScroll
                key={h}
                as="li"
                effect="zoom-in-up"
                delay={i * 0.07}
                className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-card"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sunset-700 text-white"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed text-ink">{h}</span>
              </FadeInOnScroll>
            ))}
          </ul>
        </div>
      </section>

      {/* Optional structured sections */}
      {service.sections && service.sections.length > 0 && (
        <section className="section">
          <div className="container-narrow max-w-3xl">
            {service.sections.map((sec, i) => (
              <FadeInOnScroll key={sec.heading} delay={i * 0.1} className="mb-10 last:mb-0">
                <h2 className="font-display text-2xl text-navy-900 sm:text-3xl">{sec.heading}</h2>
                <div className="prose-body mt-4 space-y-4">
                  {sec.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </section>
      )}

      {/* Optional process steps */}
      {service.steps && service.steps.length > 0 && (
        <section className="section bg-navy-50/60">
          <div className="container-narrow">
            <FadeInOnScroll>
              <p className="eyebrow text-center">How it works</p>
              <h2 className="mt-3 text-center font-display text-3xl text-navy-900 sm:text-4xl">
                The treatment journey
              </h2>
            </FadeInOnScroll>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.steps.map((step, i) => (
                <FadeInOnScroll
                  key={step.title}
                  as="li"
                  effect="fade-up"
                  delay={i * 0.07}
                  className="relative rounded-2xl bg-white p-6 shadow-card"
                >
                  <span className="absolute -top-4 left-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sunset-700 font-display text-lg font-semibold text-white shadow-sunset">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
                </FadeInOnScroll>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Optional checklist block */}
      {service.list && (
        <section className="section">
          <div className="container-narrow max-w-3xl">
            <FadeInOnScroll>
              <h2 className="font-display text-2xl text-navy-900 sm:text-3xl">{service.list.heading}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.list.items.map((item, i) => (
                  <li
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 60}
                    className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-4 text-sm text-ink"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sunset-500/10 text-sunset-600"
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12l5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeInOnScroll>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="section">
        <div className="container-narrow">
          <FadeInOnScroll
            effect="zoom-in"
            className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-14 text-white md:px-16 md:py-16"
          >
            <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sun-400">
                  Ready to take the next step?
                </p>
                <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                  Book {service.title.toLowerCase()} with us.
                </h2>
                <p className="mt-3 text-navy-100">
                  Tell us a little about what you’re looking for. We respond within one business day.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/appointment" className="btn-primary">
                  Book online
                </Link>
                <a href={site.phoneHref} className="btn-ghost-light">
                  Call {site.phone}
                </a>
              </div>
            </div>
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sunset-500/20 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-navy-500/20 blur-3xl" />
          </FadeInOnScroll>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-navy-50/60">
        <div className="container-narrow">
          <h2 className="font-display text-2xl text-navy-900 sm:text-3xl">Related services</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s, i) => (
              <FadeInOnScroll key={s.slug} as="li" delay={i * 0.05}>
                <ServiceCard service={s} />
              </FadeInOnScroll>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
