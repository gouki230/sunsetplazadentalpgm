import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${site.name}.`,
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Privacy Policy', href: '/privacy-policy' },
        ]}
      />
      <PageHero
        title="Privacy Policy"
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/privacy-policy', label: 'Privacy Policy' },
        ]}
      />
      <section className="section">
        <div className="container-narrow max-w-3xl prose-body space-y-5">
          <h2 className="font-display text-2xl text-navy-900">Information we collect</h2>
          <p>
            When you contact us through this website, we collect the information you provide — your
            name, email, phone number, and the contents of your message. We use this information only
            to respond to your inquiry and schedule care.
          </p>
          <h2 className="font-display text-2xl text-navy-900">Protected health information</h2>
          <p>
            Any health information you share with us through clinical visits is governed by HIPAA and
            our Notice of Privacy Practices, available at the front desk.
          </p>
          <h2 className="font-display text-2xl text-navy-900">Cookies and analytics</h2>
          <p>
            This site does not set marketing cookies. We may use privacy-respecting analytics to
            understand which pages are useful.
          </p>
          <h2 className="font-display text-2xl text-navy-900">Contact</h2>
          <p>
            Questions? Email{' '}
            <a href={`mailto:${site.email}`} className="font-semibold text-navy-700 underline-offset-4 hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
