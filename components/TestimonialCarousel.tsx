'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { testimonials } from '@/data/testimonials';

function Stars({ count }: { count: number }) {
  return (
    <div role="img" aria-label={`${count} out of 5 stars`} className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={i < count ? 'fill-sunset-500 text-sun-400' : 'fill-navy-200 text-navy-200'}
        >
          <path d="M12 3l2.5 6 6.5.6-5 4.4 1.5 6.5L12 17l-5.5 3.5L8 14l-5-4.4 6.5-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 7000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  const prev = () => embla?.scrollPrev();
  const next = () => embla?.scrollNext();

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Patient testimonials"
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
      }}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${testimonials.length}`}
              className="min-w-0 flex-[0_0_100%] px-2 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <blockquote className="flex h-full flex-col gap-5 rounded-2xl bg-white p-7 shadow-card">
                <Stars count={t.rating} />
                <p className="text-base leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
                <figcaption className="mt-auto text-sm">
                  <span className="font-semibold text-navy-900">{t.author}</span>
                  <span className="ml-2 text-ink-muted">via {t.source}</span>
                </figcaption>
              </blockquote>
            </figure>
          ))}
        </div>
      </div>

      {/* Screen-reader announcement on slide change */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Showing testimonial {selected + 1} of {testimonials.length}
        {testimonials[selected] ? `, by ${testimonials[selected].author}.` : '.'}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3" role="group" aria-label="Testimonial controls">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition hover:bg-navy-50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => embla?.scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1} of ${testimonials.length}`}
              aria-pressed={i === selected}
              className={`h-2 rounded-full transition-all ${
                i === selected ? 'w-8 bg-navy-700' : 'w-2 bg-navy-200 hover:bg-navy-300'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition hover:bg-navy-50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
