import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: `Accessibility statement for ${site.name}. We are committed to WCAG 2.1 AA conformance.`,
  alternates: { canonical: '/accessibility-statement' },
};

export default function AccessibilityPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Accessibility', href: '/accessibility-statement' },
        ]}
      />
      <PageHero
        title="Accessibility Statement"
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/accessibility-statement', label: 'Accessibility' },
        ]}
      />
      <section className="section">
        <div className="container-narrow max-w-3xl prose-body space-y-5">
          <p>
            {site.name} is committed to ensuring digital accessibility for people with disabilities.
            We are continually improving the user experience for everyone and applying the relevant
            accessibility standards.
          </p>

          <h2 className="font-display text-2xl text-navy-900">Conformance status</h2>
          <p>
            The{' '}
            <a
              href="https://www.w3.org/WAI/standards-guidelines/wcag/"
              className="font-semibold text-navy-700 underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Content Accessibility Guidelines (WCAG)
            </a>{' '}
            define requirements for designers and developers to improve accessibility for people with
            disabilities. They define three levels of conformance: Level A, Level AA, and Level AAA.
            This website is designed to conform to WCAG 2.1 Level AA.
          </p>

          <h2 className="font-display text-2xl text-navy-900">Measures we take</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Semantic HTML5 landmarks for assistive technologies.</li>
            <li>Sufficient color contrast for all body and large text.</li>
            <li>Keyboard accessibility for all interactive controls, with visible focus indicators.</li>
            <li>Descriptive alternative text on meaningful images.</li>
            <li>Form fields with associated labels and clear error messaging.</li>
            <li>Respect for the user&apos;s reduced-motion preference.</li>
            <li>Periodic audits with automated tooling (axe, Lighthouse) and manual testing.</li>
          </ul>

          <h2 className="font-display text-2xl text-navy-900">Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of this website. If you encounter
            accessibility barriers, please contact us at{' '}
            <a href={`mailto:${site.email}`} className="font-semibold text-navy-700 underline-offset-4 hover:underline">
              {site.email}
            </a>{' '}
            or call {site.phone}. We try to respond to feedback within five business days.
          </p>
        </div>
      </section>
    </>
  );
}
