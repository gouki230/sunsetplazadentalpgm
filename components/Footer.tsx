import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm from './NewsletterForm';
import { site } from '@/data/site';

const menuLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Dental Services' },
  { href: '/about', label: 'About Us' },
  { href: '/appointment', label: 'Request an Appointment' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/accessibility-statement', label: 'Accessibility Statement' },
];

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-1.5 1.5-1.5H17V2.2c-.5-.1-1.8-.2-3-.2-3 0-5 1.8-5 5v3H6v4h3v8z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

const socialIcons = [
  { href: site.socials.facebook, label: 'Facebook', icon: <FacebookIcon /> },
  { href: site.socials.instagram, label: 'Instagram', icon: <InstagramIcon /> },
  { href: site.socials.google, label: 'Google', icon: <GoogleReviewIcon /> },
  { href: site.socials.yelp, label: 'Yelp', icon: <YelpIcon /> },
];

function GoogleReviewIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 12.2c0-.7-.1-1.3-.2-2H12v3.8h5.4c-.2 1.3-1 2.4-2.1 3.1v2.6h3.4c2-1.8 3-4.5 3-7.5z" />
      <path d="M12 22c2.8 0 5.2-.9 6.9-2.5l-3.4-2.6c-.9.6-2.1 1-3.5 1-2.7 0-5-1.8-5.8-4.3H2.7v2.7C4.4 19.7 7.9 22 12 22z" />
      <path d="M6.2 13.6a6 6 0 010-3.8V7.1H2.7a10 10 0 000 9z" />
      <path d="M12 5.9c1.5 0 2.9.5 4 1.6l3-3C17.2 2.8 14.8 1.9 12 1.9 7.9 1.9 4.4 4.3 2.7 7.7l3.5 2.7C7 7.7 9.3 5.9 12 5.9z" />
    </svg>
  );
}

function YelpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.4 2c-1 0-2.3.4-2.3 1.5v8.7c0 .9.8 1.4 1.6 1l5.6-3c.8-.4.9-1.5.2-2.1l-3.7-5.6c-.3-.4-.8-.5-1.4-.5zm-3.6 11l-5.1 3c-.8.5-.7 1.7.1 2l5.6 1.9c.7.2 1.4-.2 1.4-1v-5.1c0-.9-1.1-1.4-2-.8zm5.3 1.5c-.7.4-.7 1.4 0 1.8l4.5 2.7c.7.4 1.6-.2 1.6-1V14c0-.8-.7-1.3-1.4-1l-4.7 1.5zm-2.4 4c0-.8-.9-1.3-1.6-.8l-2.9 2c-.7.5-.4 1.5.4 1.6l3 .6c.7.1 1.3-.4 1.3-1z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-narrow py-16">
        {/* Top row: logo + headline */}
        <div className="grid items-center gap-10 border-b border-white/10 pb-12 md:grid-cols-2">
          <div className="flex justify-center md:justify-start">
            <Image
              src={site.logo.primary}
              alt={site.name}
              width={site.logo.primaryWidth}
              height={site.logo.primaryHeight}
              className="h-24 w-auto md:h-28"
            />
          </div>
          <h2 className="font-display text-2xl text-white sm:text-3xl md:text-center md:text-4xl">
            Innovative Therapy<br />
            <span className="text-sun-400">&amp; Qualified Dentists</span>
          </h2>
        </div>

        {/* Middle row: 4 columns */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-xl text-white">Newsletter Signup</h3>
            <div className="mt-3 h-px w-10 bg-sunset-500" aria-hidden="true" />
            <p className="mt-4 text-sm text-navy-200">
              Occasional tips for your oral health — no spam, ever.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>

          <nav aria-label="Socials">
            <h3 className="font-display text-xl text-white">Socials</h3>
            <div className="mt-3 h-px w-10 bg-sunset-500" aria-hidden="true" />
            <ul className="mt-4 space-y-2 text-sm">
              {socialIcons.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-3 text-navy-200 transition hover:text-sunset-500"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-sunset-500">
                      {s.icon}
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Menu">
            <h3 className="font-display text-xl text-white">Menu</h3>
            <div className="mt-3 h-px w-10 bg-sunset-500" aria-hidden="true" />
            <ul className="mt-4 space-y-2 text-sm">
              {menuLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-navy-200 transition hover:text-sunset-500">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="font-display text-xl text-white">Legal</h3>
            <div className="mt-3 h-px w-10 bg-sunset-500" aria-hidden="true" />
            <ul className="mt-4 space-y-2 text-sm">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-navy-200 transition hover:text-sunset-500">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <address className="not-italic mt-4 text-sm leading-relaxed text-navy-200">
                  {site.address.street}<br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </address>
              </li>
              <li>
                <a href={site.phoneHref} className="text-sm text-navy-200 hover:text-sunset-500">
                  {site.phone}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom: copyright */}
        <div className="border-t border-white/10 pt-6 text-center text-sm">
          <p className="text-navy-200">
            © {year}. <span className="text-white">All Rights Reserved {site.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
