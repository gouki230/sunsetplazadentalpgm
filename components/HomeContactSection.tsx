import Image from 'next/image';
import FadeInOnScroll from '@/components/motion/FadeInOnScroll';
import SectionHeader from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import { site } from '@/data/site';

function formatTime(t: string | null) {
  if (!t) return null;
  const [h, m] = t.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const hour12 = ((h + 11) % 12) + 1;
  return `${hour12}:${m.toString().padStart(2, '0')} ${period}`;
}

export default function HomeContactSection() {
  return (
    <section id="contact" className="section relative overflow-hidden bg-navy-950 text-white">
      <Image
        src="/images/sections/clinic-interior.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-900/80"
      />

      <div className="container-narrow relative">
        <FadeInOnScroll>
          <SectionHeader
            eyebrow="Get in Touch"
            title={<span className="text-white">Have questions? Let&apos;s talk.</span>}
            intro={
              <p className="text-navy-100">
                Send us a quick note — for routine questions, scheduling help, or just to learn more
                about the practice. We respond within one business day.
              </p>
            }
            align="center"
          />
        </FadeInOnScroll>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <FadeInOnScroll effect="fade-right" className="rounded-3xl bg-white p-8 shadow-cardHover md:p-10">
            <ContactForm />
          </FadeInOnScroll>

          <FadeInOnScroll effect="fade-left" delay={0.1} className="space-y-5">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-400">Call us</p>
              <a href={site.phoneHref} className="mt-2 block font-display text-3xl text-white hover:text-sun-400">
                {site.phone}
              </a>
              <p className="mt-2 text-sm text-navy-200">
                Front desk answers Monday–Friday during business hours.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-400">Email</p>
              <a href={`mailto:${site.email}`} className="mt-2 block break-words text-lg text-white hover:text-sun-400">
                {site.email}
              </a>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-400">Visit</p>
              <address className="not-italic mt-2 text-sm leading-relaxed text-navy-100">
                {site.address.street}<br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </address>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-400">Hours</p>
              <ul className="mt-3 space-y-1 text-sm text-navy-100">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-3">
                    <span>{h.day}</span>
                    <span>{h.open ? `${formatTime(h.open)} – ${formatTime(h.close)}` : h.note ?? 'Closed'}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
