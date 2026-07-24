import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/data/site';

const menuLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/team', label: 'Our Team' },
  { href: '/services', label: 'Dental Services' },
  { href: '/faq', label: 'FAQ' },
];

const actionLinks = [
  { href: '/appointment', label: 'Request an Appointment' },
  { href: '/contact', label: 'Contact Us' },
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

const socialIcons = [
  { href: site.socials.facebook, label: 'Facebook', icon: <FacebookIcon /> },
  { href: site.socials.instagram, label: 'Instagram', icon: <InstagramIcon /> },
  { href: site.socials.google, label: 'Google', icon: <GoogleReviewIcon /> },
  { href: site.socials.yelp, label: 'Yelp', icon: <YelpIcon /> },
];

function formatTime(t: string | null) {
  if (!t) return null;
  const [h, m] = t.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const hour12 = ((h + 11) % 12) + 1;
  return `${hour12}:${m.toString().padStart(2, '0')} ${period}`;
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-narrow py-16">
        {/* Main grid: 4 columns on desktop */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label={`${site.name} home`} className="inline-flex">
              <Image
                src={site.logo.primary}
                alt=""
                width={site.logo.primaryWidth}
                height={site.logo.primaryHeight}
                className="h-20 w-auto md:h-24"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200">
              {site.description}
            </p>
            <ul className="mt-6 flex items-center gap-3" aria-label="Social media">
              {socialIcons.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (opens in new tab)`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-sunset-500 transition hover:bg-sunset-500 hover:text-white"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <nav aria-label="Site navigation" className="lg:col-span-2">
            <h3 className="font-display text-lg text-white">Explore</h3>
            <div className="mt-3 h-px w-10 bg-sunset-500" aria-hidden="true" />
            <ul className="mt-4 space-y-2 text-sm">
              {menuLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-navy-200 transition hover:text-sunset-500">
                    {l.label}
                  </Link>
                </li>
              ))}
              {actionLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-navy-200 transition hover:text-sunset-500">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Visit */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg text-white">Visit us</h3>
            <div className="mt-3 h-px w-10 bg-sunset-500" aria-hidden="true" />
            <address className="not-italic mt-4 text-sm leading-relaxed text-navy-200">
              {site.address.street}<br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </address>
            <p className="mt-4 text-sm">
              <a href={site.phoneHref} className="text-white transition hover:text-sunset-500">
                {site.phone}
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="break-words text-navy-200 transition hover:text-sunset-500"
              >
                {site.email}
              </a>
            </p>
            <Link
              href="/appointment"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-sunset-700 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sunset transition hover:bg-sunset-800"
            >
              Book an appointment
            </Link>
          </div>

          {/* Hours */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg text-white">Hours</h3>
            <div className="mt-3 h-px w-10 bg-sunset-500" aria-hidden="true" />
            <ul className="mt-4 space-y-1.5 text-sm text-navy-200">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-3">
                  <span>{h.day}</span>
                  <span className="text-right text-navy-100">
                    {h.open ? `${formatTime(h.open)} – ${formatTime(h.close)}` : h.note ?? 'Closed'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom: legal + copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm md:flex-row">
          <p className="text-navy-300">
            © {year} {site.name}. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-navy-200 transition hover:text-sunset-500">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
