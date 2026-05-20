import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FadeInOnScroll from '@/components/motion/FadeInOnScroll';
import SectionHeader from '@/components/Section';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Sunset Plaza Dental is a multi-specialty practice in West Hollywood, providing modern cosmetic, family, and restorative dentistry for more than a decade.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Sunset Plaza Dental',
    description:
      'A boutique multi-specialty dental practice on Sunset Boulevard, led by Dr. Bijan Afar, DDS, MS.',
    images: [{ url: '/images/sections/clinic-interior.png', width: 1200, height: 630, alt: 'Inside Sunset Plaza Dental' }],
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
        ]}
      />
      <PageHero
        eyebrow="About"
        title="A modern dental practice, built on personal care."
        intro="We have been part of the West Hollywood community for more than ten years — quietly building a practice we would want for our own families."
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
        ]}
      />

      <section className="section">
        <div className="container-narrow grid gap-12 lg:grid-cols-2 lg:items-start">
          <FadeInOnScroll>
            <SectionHeader eyebrow="Our Story" title="Multi-specialty, intentionally." />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
              <p>
                Sunset Plaza Dental was founded with a simple goal: keep your dental care under one
                roof, with people who know you. Most dental issues do not stay in one specialty — and
                we believe your team should not, either.
              </p>
              <p>
                We have invested in modern imaging, digital workflows, and continuing education across
                every part of the practice. The result is care that is more accurate, faster, and
                kinder on you and your time.
              </p>
              <p>
                Just as importantly, we have invested in the office itself — the music, the lighting,
                the way our front desk talks to you on the phone. A dental visit can be a calm,
                ordinary part of your week. That is what we are trying to make.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1} className="space-y-6">
            <article className="rounded-2xl bg-white p-7 shadow-card">
              <h3 className="font-display text-2xl text-navy-900">Our values</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
                <li>
                  <strong className="text-navy-900">Explain everything.</strong> If we recommend
                  something, you will know exactly why.
                </li>
                <li>
                  <strong className="text-navy-900">Never rush.</strong> We schedule deliberately so
                  every appointment has the time it needs.
                </li>
                <li>
                  <strong className="text-navy-900">Be honest about cost.</strong> Estimates before
                  treatment, not after.
                </li>
                <li>
                  <strong className="text-navy-900">No judgment.</strong> Whether you are early,
                  late, or starting over.
                </li>
              </ul>
            </article>
            <article className="rounded-2xl bg-navy-900 p-7 text-white shadow-card">
              <h3 className="font-display text-2xl">Visit us</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-100">
                We are on Sunset Plaza, between Doheny and La Cienega. Validated parking is available
                on-site.
              </p>
              <Link href="/contact" className="mt-5 inline-flex text-sm font-semibold uppercase tracking-wider text-sun-400 hover:text-white">
                Directions & contact →
              </Link>
            </article>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}
