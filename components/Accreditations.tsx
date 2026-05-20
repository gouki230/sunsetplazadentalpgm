import Image from 'next/image';
import FadeInOnScroll from '@/components/motion/FadeInOnScroll';

const accreditations = [
  { src: '/images/insurance/logo-6.webp', alt: 'American Dental Association' },
  { src: '/images/insurance/logo-5.webp', alt: 'California Dental Association' },
  { src: '/images/insurance/logo-1.png',  alt: 'American Academy of Cosmetic Dentistry' },
  { src: '/images/insurance/logo-2.png',  alt: 'Academy of General Dentistry' },
  { src: '/images/insurance/logo-3.png',  alt: 'Dental Board of California' },
  { src: '/images/insurance/logo-4.png',  alt: 'International Congress of Oral Implantologists' },
  { src: '/images/insurance/logo-7.webp', alt: 'American Dental Board of Anesthesiology' },
];

export default function Accreditations() {
  return (
    <section aria-label="Professional accreditations" className="border-y border-navy-100 bg-white py-10">
      <div className="container-narrow">
        <FadeInOnScroll>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-ink-muted">
            Proud members &amp; affiliates
          </p>
        </FadeInOnScroll>
        <ul className="mt-7 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-7">
          {accreditations.map((a, i) => (
            <FadeInOnScroll key={a.alt} as="li" delay={i * 0.06} className="flex items-center justify-center">
              <Image
                src={a.src}
                alt={a.alt}
                width={160}
                height={64}
                className="h-12 w-auto object-contain opacity-80 transition hover:opacity-100"
              />
            </FadeInOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
