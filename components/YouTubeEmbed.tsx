'use client';

import { useState } from 'react';

type Props = {
  /** YouTube video ID (the v= parameter from the URL). */
  id: string;
  /** Accessible title — also used as the iframe title and visible caption. */
  title: string;
  /** Optional caption shown below the player. */
  caption?: string;
  /** Image quality. Defaults to maxres; YouTube falls back automatically. */
  posterQuality?: 'hqdefault' | 'sddefault' | 'maxresdefault';
};

export default function YouTubeEmbed({
  id,
  title,
  caption,
  posterQuality = 'hqdefault',
}: Props) {
  const [loaded, setLoaded] = useState(false);

  const posterUrl = `https://i.ytimg.com/vi/${id}/${posterQuality}.jpg`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <figure className="group flex flex-col gap-3">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy-900 shadow-card">
        {loaded ? (
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={`Play video: ${title}`}
            className="group/btn absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={posterUrl}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover/btn:scale-105"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"
            />
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-sunset-700 text-white shadow-sunset transition group-hover/btn:scale-110"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-ink-muted">{caption}</figcaption>
      )}
    </figure>
  );
}
