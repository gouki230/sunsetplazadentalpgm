'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/data/site';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showVideo, setShowVideo] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setShowVideo(false);
      return;
    }
    const el = videoRef.current;
    if (!el) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    el.addEventListener('play', onPlay);
    el.addEventListener('pause', onPause);

    const tryPlay = () => {
      el.play().catch(() => {
        /* autoplay blocked — poster stays visible, no harm */
      });
    };
    if (el.readyState >= 2) tryPlay();
    else el.addEventListener('loadeddata', tryPlay, { once: true });

    return () => {
      el.removeEventListener('play', onPlay);
      el.removeEventListener('pause', onPause);
    };
  }, []);

  function togglePlayback() {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) el.play().catch(() => {});
    else el.pause();
  }

  return (
    <section
      aria-label="Welcome to Sunset Plaza Dental"
      className="relative isolate overflow-hidden bg-navy-950 text-white"
    >
      {/* Poster fallback always rendered for fast first paint and reduced-motion users */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/hero/hero-poster.jpg')] bg-cover bg-center"
      />

      {showVideo && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero/hero-poster.jpg"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/videos/noho-dental-office.mp4" type="video/mp4" />
          {/* Decorative background video — no audio track. Page content is fully available without the video. */}
        </video>
      )}

      {/* Dark gradient overlays for legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/65 to-navy-900/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-navy-950/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_70%_30%,rgba(243,115,53,0.22),transparent_60%)] md:block"
      />

      <div className="container-narrow relative flex min-h-[calc(100svh-80px)] items-center pb-24 pt-36 md:pt-44">
        <div className="max-w-3xl">
          <p data-aos="fade-up" className="text-xs font-semibold uppercase tracking-[0.3em] text-sun-400">
            West Hollywood · Sunset Plaza · Since 2014
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="120"
            className="mt-4 font-display text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            A multi-specialty dental group<br className="hidden sm:block" /> in Los Angeles.
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="240"
            className="mt-6 max-w-xl text-base text-navy-100 sm:text-lg"
          >
            Cosmetic, restorative, periodontic, endodontic, orthodontic, and general dentistry —
            all under one roof, in a boutique-style practice on Sunset Plaza.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="360"
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link href="/appointment" className="btn-primary">
              Book an appointment
            </Link>
            <Link href="/services" className="btn-ghost-light">
              Explore services
            </Link>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="480"
            className="mt-12 inline-flex flex-wrap items-center gap-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm"
          >
            <a href={site.phoneHref} className="flex items-center gap-2 text-sm text-white hover:text-sun-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 4h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" strokeLinejoin="round" />
              </svg>
              {site.phone}
            </a>
            <span aria-hidden="true" className="hidden h-4 w-px bg-white/20 sm:block" />
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-sm text-white hover:text-sun-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Pause/play control for the background video — WCAG 2.2.2 */}
      {showVideo && (
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          className="absolute bottom-6 right-6 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-navy-900"
        >
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 5l12 7-12 7z" />
            </svg>
          )}
        </button>
      )}

      {/* Bottom fade so the next section blends in */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-sand"
      />
    </section>
  );
}
