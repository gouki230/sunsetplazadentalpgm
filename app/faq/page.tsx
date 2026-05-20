import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FadeInOnScroll from '@/components/motion/FadeInOnScroll';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import JsonLd from '@/components/JsonLd';
import { faq } from '@/data/faq';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about our West Hollywood dental practice — insurance, first visits, pediatric care, financing, and more.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ | Sunset Plaza Dental',
    description:
      'Answers to common questions about insurance, first visits, pediatric care, financing, and more.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'Sunset Plaza Dental' }],
  },
};

export default function FaqPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'FAQ', href: '/faq' },
        ]}
      />
      <JsonLd data={faqLd} />
      <PageHero
        eyebrow="Frequently Asked"
        title="Good questions, plainly answered."
        intro="Did not see your question? Reach out — we are happy to talk it through."
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/faq', label: 'FAQ' },
        ]}
      />
      <section className="section">
        <div className="container-narrow max-w-3xl">
          <ul className="space-y-3">
            {faq.map((item, i) => (
              <FadeInOnScroll key={item.question} as="li" delay={i * 0.04}>
                <details className="group rounded-2xl bg-white shadow-card open:shadow-cardHover">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-5 font-display text-lg text-navy-900 transition hover:bg-navy-50/50">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="ml-4 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700 transition group-open:rotate-45 group-open:bg-sunset-700 group-open:text-white"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-ink-muted">
                    {item.answer}
                  </div>
                </details>
              </FadeInOnScroll>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
