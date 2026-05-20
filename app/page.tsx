import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroVideo from '@/components/HeroVideo';
import ServiceCard from '@/components/ServiceCard';
import SectionHeader from '@/components/Section';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Accreditations from '@/components/Accreditations';
import HomeContactSection from '@/components/HomeContactSection';
import FadeInOnScroll from '@/components/motion/FadeInOnScroll';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { services } from '@/data/services';
import { site } from '@/data/site';

const seriousAboutSmile = [
  { id: 'jD2z4AKeVkI', title: 'Welcome to Sunset Plaza Dental', caption: 'Welcome to the practice' },
  { id: 'fjoEJX18GPM', title: 'A look inside our practice', caption: 'Inside the office' },
  { id: 'j0mZ-22gem4', title: 'How we approach dental care', caption: 'Our approach to care' },
];

const happyClients = [
  { id: 'z10QwftaC6g', title: 'Patient testimonial — happy client', caption: 'Patient story' },
  { id: 'nZUFnCK8Hss', title: 'Patient testimonial — happy client', caption: 'Patient story' },
  { id: 'Fy2QeYVAVkE', title: 'Patient testimonial — happy client', caption: 'Patient story' },
];

export const metadata: Metadata = {
  title: 'West Hollywood Cosmetic & Family Dentist',
  description:
    'Sunset Plaza Dental — a boutique multi-specialty dental practice on Sunset Boulevard in West Hollywood. Cosmetic, restorative, periodontic, endodontic, orthodontic, and general dentistry, led by Dr. Bijan Afar, DDS, MS.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    title: `${site.name} | West Hollywood Cosmetic & Family Dentist`,
    description:
      'Boutique multi-specialty dental practice on Sunset Plaza, led by Dr. Bijan Afar, DDS, MS. Cosmetic, restorative, periodontic, endodontic, orthodontic, and general dentistry.',
    images: [
      { url: '/images/og-default.jpg', width: 1200, height: 630, alt: site.name },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | West Hollywood`,
    description:
      'Multi-specialty dental practice on Sunset Plaza, led by Dr. Bijan Afar, DDS, MS.',
    images: ['/images/og-default.jpg'],
  },
};

const reasons = [
  {
    title: 'Multi-specialty under one roof',
    body: 'From cleanings to implants, our team covers nearly every aspect of dental care — fewer referrals, more continuity.',
  },
  {
    title: 'Modern technology, gentle hands',
    body: 'Digital scans, low-radiation imaging, and the latest in adhesive dentistry — used by clinicians who actually talk to you.',
  },
  {
    title: 'Flexible hours and financing',
    body: 'Evening appointments available, most major PPO plans, and financing through CareCredit for larger cases.',
  },
  {
    title: 'A judgment-free practice',
    body: 'Whether it has been six months or six years, you will be met where you are. We focus on what is next, not what was missed.',
  },
];

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      {/* Welcome / About */}
      <section className="section">
        <div className="container-narrow grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <FadeInOnScroll effect="fade-right">
            <p className="eyebrow">Welcome to Sunset Plaza Dental</p>
            <h2 className="mt-3 font-display text-3xl text-navy-900 sm:text-4xl md:text-5xl">
              A boutique-style practice in the heart of Sunset Plaza.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
              <p>
                Conveniently located on Sunset Boulevard, our multi-specialty practice offers a wide
                variety of cosmetic, restorative, periodontic, endodontic, orthodontic, and general
                dentistry procedures — all under one roof.
              </p>
              <p>
                Our approach is simple: explain everything, never rush, and treat you the way we would
                want our own family treated. Whether you are here for a routine visit or a smile
                makeover, you will leave knowing exactly what is going on with your teeth — and what is
                next.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                About the practice
              </Link>
              <Link href="/team" className="btn-secondary">
                Meet the team
              </Link>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll effect="fade-left" delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-cardHover">
              <Image
                src="/images/sections/dentist-at-work.png"
                alt="A dentist performing a comfortable cleaning on a patient at Sunset Plaza Dental"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/55 to-transparent"
              />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3 text-white">
                <div className="rounded-xl bg-white/15 px-4 py-3 backdrop-blur">
                  <div className="font-display text-2xl text-sun-400">10+</div>
                  <div className="text-xs text-white/90">years caring for West Hollywood</div>
                </div>
                <div className="rounded-xl bg-white/15 px-4 py-3 backdrop-blur">
                  <div className="font-display text-2xl text-sun-400">4.3★</div>
                  <div className="text-xs text-white/90">Google rating</div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Services grid */}
      <section className="section bg-navy-50/60">
        <div className="container-narrow">
          <FadeInOnScroll>
            <SectionHeader
              eyebrow="Our Services"
              title="What we do — comfortably."
              intro="A full range of preventive, cosmetic, and restorative care from clinicians who actually enjoy the work."
              align="center"
            />
          </FadeInOnScroll>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((service, i) => (
              <FadeInOnScroll
                key={service.slug}
                as="li"
                effect="zoom-in-up"
                delay={i * 0.08}
              >
                <ServiceCard service={service} />
              </FadeInOnScroll>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-secondary">
              See all services
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us, with side image */}
      <section className="section">
        <div className="container-narrow grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeInOnScroll effect="fade-right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-cardHover">
              <Image
                src="/images/sections/clinic-interior.png"
                alt="Modern, comfortable treatment room at Sunset Plaza Dental"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll effect="fade-left">
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Reasons patients stay with us."
              intro={
                <p>
                  We have built the practice we always wanted to go to ourselves — calm, modern, and
                  honest about cost and outcomes.
                </p>
              }
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {reasons.map((r, i) => (
                <article
                  key={r.title}
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 80}
                  className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
                >
                  <h3 className="font-display text-lg text-navy-900">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{r.body}</p>
                </article>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* We're Serious About Your Smile — 3 educational videos */}
      <section className="section" aria-labelledby="serious-about-smile">
        <div className="container-narrow">
          <FadeInOnScroll>
            <SectionHeader
              eyebrow="About Us"
              title={<span id="serious-about-smile">We&rsquo;re Serious About Your Smile</span>}
              intro={<p>Get to know a little more about us and the services we offer.</p>}
              align="center"
            />
          </FadeInOnScroll>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {seriousAboutSmile.map((v, i) => (
              <FadeInOnScroll
                key={v.id}
                as="li"
                effect="zoom-in-up"
                delay={i * 0.08}
              >
                <YouTubeEmbed id={v.id} title={v.title} caption={v.caption} />
              </FadeInOnScroll>
            ))}
          </ul>
        </div>
      </section>

      {/* Accreditations strip */}
      <Accreditations />

      {/* Our Happy Clients — 3 testimonial videos */}
      <section className="section bg-navy-50/60" aria-labelledby="happy-clients">
        <div className="container-narrow">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <FadeInOnScroll effect="fade-right">
              <p className="eyebrow">Your neighbors are getting great results with us</p>
              <h2
                id="happy-clients"
                className="mt-3 font-display text-3xl text-navy-900 sm:text-4xl md:text-5xl"
              >
                Our Happy Clients
              </h2>
              <p className="mt-4 max-w-xl text-ink-muted">
                Hear from real patients about their experience at the practice. Want to share yours?
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll effect="fade-left" delay={0.1}>
              <a
                href={site.socials.google}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Leave a review
              </a>
            </FadeInOnScroll>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {happyClients.map((v, i) => (
              <FadeInOnScroll
                key={v.id}
                as="li"
                effect="zoom-in-up"
                delay={i * 0.08}
              >
                <YouTubeEmbed id={v.id} title={v.title} caption={v.caption} />
              </FadeInOnScroll>
            ))}
          </ul>

          {/* Aggregated written reviews still useful below */}
          <div className="mt-16">
            <FadeInOnScroll>
              <h3 className="text-center font-display text-2xl text-navy-900 sm:text-3xl">
                More reviews from Google &amp; Yelp
              </h3>
            </FadeInOnScroll>
            <div className="mt-8">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <HomeContactSection />
    </>
  );
}
