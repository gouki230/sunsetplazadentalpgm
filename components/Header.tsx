'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { site } from '@/data/site';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
  { href: '/appointment', label: 'Appointment' },
  { href: '/contact', label: 'Contact' },
];

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 4h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 21s-7-7.6-7-12a7 7 0 1114 0c0 4.4-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-1.5 1.5-1.5H17V2.2c-.5-.1-1.8-.2-3-.2-3 0-5 1.8-5 5v3H6v4h3v8z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 12.2c0-.7-.1-1.3-.2-2H12v3.8h5.4c-.2 1.3-1 2.4-2.1 3.1v2.6h3.4c2-1.8 3-4.5 3-7.5z" />
      <path d="M12 22c2.8 0 5.2-.9 6.9-2.5l-3.4-2.6c-.9.6-2.1 1-3.5 1-2.7 0-5-1.8-5.8-4.3H2.7v2.7C4.4 19.7 7.9 22 12 22z" />
      <path d="M6.2 13.6a6 6 0 010-3.8V7.1H2.7a10 10 0 000 9z" />
      <path d="M12 5.9c1.5 0 2.9.5 4 1.6l3-3C17.2 2.8 14.8 1.9 12 1.9 7.9 1.9 4.4 4.3 2.7 7.7l3.5 2.7C7 7.7 9.3 5.9 12 5.9z" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const drawer = drawerRef.current;
    const focusable = drawer
      ? Array.from(
          drawer.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input, textarea, [tabindex]:not([tabindex="-1"])',
          ),
        )
      : [];
    focusable[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key === 'Tab' && drawer && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      {/* Top utility bar — hidden on mobile */}
      <div className="hidden border-b border-white/10 bg-navy-950 text-navy-100 lg:block">
        <div className="container-narrow flex items-center justify-between gap-6 py-2.5 text-xs">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-1">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-navy-100 transition hover:text-sunset-500"
            >
              <span className="text-sunset-500"><MailIcon /></span>
              {site.email}
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 text-navy-100 transition hover:text-sunset-500"
            >
              <span className="text-sunset-500"><PhoneIcon /></span>
              {site.phone}
            </a>
            <a
              href={site.socials.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-navy-100 transition hover:text-sunset-500"
            >
              <span className="text-sunset-500"><PinIcon /></span>
              <address className="not-italic">
                {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
              </address>
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href={site.socials.instagram} aria-label="Instagram (opens in new tab)" target="_blank" rel="noopener noreferrer" className="inline-flex h-7 w-7 items-center justify-center text-navy-100 transition hover:text-sunset-500">
              <InstagramIcon />
            </a>
            <a href={site.socials.facebook} aria-label="Facebook (opens in new tab)" target="_blank" rel="noopener noreferrer" className="inline-flex h-7 w-7 items-center justify-center text-navy-100 transition hover:text-sunset-500">
              <FacebookIcon />
            </a>
            <a href={site.socials.google} aria-label="Google Business profile (opens in new tab)" target="_blank" rel="noopener noreferrer" className="inline-flex h-7 w-7 items-center justify-center text-navy-100 transition hover:text-sunset-500">
              <GoogleIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div
        className={`fixed inset-x-0 z-10 transition-all duration-300 ${
          scrolled ? 'top-0 bg-white/95 shadow-card backdrop-blur' : 'top-0 bg-white/90 backdrop-blur lg:top-[39px]'
        }`}
      >
        <div className="container-narrow grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3 lg:py-2">
          <Link href="/" aria-label={`${site.name} home`} className="inline-flex shrink-0 items-center">
            <Image
              src={site.logo.primary}
              alt=""
              width={site.logo.primaryWidth}
              height={site.logo.primaryHeight}
              priority
              className="h-12 w-auto md:h-16"
            />
          </Link>

          <nav aria-label="Primary" className="hidden justify-center lg:flex">
            <ul className="flex items-center gap-7">
              {nav.map((item) => {
                const active = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`relative text-sm font-semibold uppercase tracking-wider transition hover:text-sunset-500 ${
                        active ? 'text-sunset-500' : 'text-navy-900'
                      }`}
                    >
                      {item.label}
                      {active && (
                        <span aria-hidden="true" className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded bg-sunset-500" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:flex">
            <Link href="/appointment" className="btn-primary !py-2.5 !text-xs">
              Book Now
            </Link>
          </div>

          <button
            ref={triggerRef}
            type="button"
            className="col-start-3 inline-flex h-11 w-11 items-center justify-center rounded-md border border-navy-200 text-navy-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div
            id="mobile-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="lg:hidden"
          >
            <div className="border-t border-navy-100 bg-white">
              <nav aria-label="Mobile primary" className="container-narrow py-4">
                <ul className="flex flex-col gap-1">
                  {nav.map((item) => {
                    const active = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={active ? 'page' : undefined}
                          className={`block rounded-lg px-3 py-3 text-base font-semibold uppercase tracking-wider hover:bg-navy-50 ${
                            active ? 'text-sunset-500' : 'text-navy-900'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-4 flex flex-col gap-3 border-t border-navy-100 pt-4">
                  <a href={site.phoneHref} className="text-base font-medium text-navy-900">
                    Call {site.phone}
                  </a>
                  <a href={`mailto:${site.email}`} className="text-sm text-navy-700">
                    {site.email}
                  </a>
                  <Link href="/appointment" className="btn-primary w-full">
                    Book an Appointment
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
