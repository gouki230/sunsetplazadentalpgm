import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import FadeInOnScroll from '@/components/motion/FadeInOnScroll';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import JsonLd from '@/components/JsonLd';
import { principal, teamPhotos } from '@/data/team';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Our Team',
  description: `Meet ${principal.name}, ${principal.credentials} — ${principal.role.toLowerCase()} — and the clinical team at ${site.name} in West Hollywood.`,
  alternates: { canonical: '/team' },
  openGraph: {
    title: `Our Team | ${site.name}`,
    description: `Led by ${principal.name}, ${principal.credentials} — over 30 years of experience in Los Angeles.`,
    images: [
      {
        url: principal.photo,
        width: principal.photoWidth,
        height: principal.photoHeight,
        alt: principal.name,
      },
    ],
  },
};

export default function TeamPage() {
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: principal.name,
    honorificSuffix: principal.credentials,
    jobTitle: principal.role,
    worksFor: { '@id': `${site.url}/#dentist` },
    image: `${site.url}${principal.photo}`,
    url: `${site.url}/team/`,
    knowsAbout: principal.specialties,
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'UCLA School of Dentistry' },
      { '@type': 'CollegeOrUniversity', name: 'University of Washington' },
    ],
    memberOf: [
      { '@type': 'Organization', name: 'American Dental Association' },
      { '@type': 'Organization', name: 'California Dental Association' },
    ],
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Team', href: '/team' },
        ]}
      />
      <JsonLd data={personLd} />

      <PageHero
        eyebrow="Our Team"
        title="The people behind the care."
        intro={`Led by ${principal.name}, ${principal.credentials} — over thirty years of practice in Los Angeles.`}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/team', label: 'Team' },
        ]}
      />

      {/* Principal — Dr. Bijan Afar */}
      <section className="section">
        <div className="container-narrow grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <FadeInOnScroll effect="fade-right">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-navy-100 shadow-card">
              <Image
                src={principal.photo}
                alt={`Portrait of ${principal.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
                className="object-cover"
              />
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll effect="fade-left" delay={0.1}>
            <p className="eyebrow">{principal.role}</p>
            <h2 className="mt-3 font-display text-3xl text-navy-900 sm:text-4xl md:text-5xl">
              {principal.name},{' '}
              <span className="text-ink-muted">{principal.credentials}</span>
            </h2>

            <div className="prose-body mt-6 space-y-4">
              {principal.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h3 className="mt-10 font-display text-xl text-navy-900">Areas of focus</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {principal.specialties.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-navy-50 px-4 py-1.5 text-sm font-medium text-navy-900"
                >
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/appointment" className="btn-primary">
                Book with Dr. Afar
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact the practice
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Also on our team — photos only */}
      <section className="section bg-navy-50/60">
        <div className="container-narrow">
          <FadeInOnScroll>
            <p className="eyebrow">Also on our team</p>
            <h2 className="mt-3 font-display text-3xl text-navy-900 sm:text-4xl">
              The clinicians you&apos;ll meet.
            </h2>
            <p className="mt-4 max-w-2xl text-ink-muted">
              A multi-specialty group of dentists who share a single standard of care across our
              practice.
            </p>
          </FadeInOnScroll>

          <ul className="mt-12 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {teamPhotos.map((m, i) => (
              <FadeInOnScroll
                key={m.name}
                as="li"
                effect="fade-up"
                delay={i * 0.07}
                className="overflow-hidden rounded-2xl bg-white shadow-card"
              >
                <div className="relative aspect-[4/5] w-full bg-navy-100">
                  <Image
                    src={m.photo}
                    alt={`Portrait of ${m.name}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-display text-lg text-navy-900">{m.name}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-ink-muted">
                    {m.credentials}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
