import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import FadeInOnScroll from '@/components/motion/FadeInOnScroll';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import JsonLd from '@/components/JsonLd';
import { services } from '@/data/services';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Dental Services',
  description:
    'Comprehensive dental services in West Hollywood — cleaning, cosmetic, implants, orthodontics, root canals, veneers, whitening, and more, all in one boutique multi-specialty practice.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: `Dental Services | ${site.name}`,
    description:
      'Comprehensive dental services in West Hollywood — cleaning, cosmetic, implants, orthodontics, root canals, veneers, whitening, and more.',
    images: [
      {
        url: '/images/services/slider-3.png',
        width: 1200,
        height: 630,
        alt: 'Cosmetic dentistry results at Sunset Plaza Dental',
      },
    ],
  },
};

export default function ServicesPage() {
  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Dental services at ${site.name}`,
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${site.url}/services/${s.slug}/`,
      name: s.title,
    })),
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
        ]}
      />
      <JsonLd data={itemListLd} />
      <PageHero
        eyebrow="Services"
        title="Comprehensive dental care, all in one place."
        intro="Preventive, cosmetic, restorative — every service planned and delivered by a team that already knows you."
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/services', label: 'Services' },
        ]}
      />

      <section className="section">
        <div className="container-narrow">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeInOnScroll key={service.slug} as="li" delay={(i % 3) * 0.05}>
                <ServiceCard service={service} />
              </FadeInOnScroll>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
