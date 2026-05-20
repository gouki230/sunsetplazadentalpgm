import type { ReactNode } from 'react';

type AOSEffect =
  | 'fade'
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-up-right'
  | 'fade-up-left'
  | 'zoom-in'
  | 'zoom-in-up'
  | 'zoom-out';

type Tag = 'div' | 'section' | 'li' | 'article' | 'header' | 'aside';

type Props = {
  children: ReactNode;
  /** AOS effect name. Defaults to `fade-up`. */
  effect?: AOSEffect;
  /** Delay in seconds (legacy) or milliseconds if `delayMs` is true. */
  delay?: number;
  /** Treat `delay` as milliseconds rather than seconds. */
  delayMs?: boolean;
  /** Duration in ms. */
  duration?: number;
  className?: string;
  as?: Tag;
};

export default function FadeInOnScroll({
  children,
  effect = 'fade-up',
  delay = 0,
  delayMs = false,
  duration,
  className,
  as = 'div',
}: Props) {
  const ms = delayMs ? Math.round(delay) : Math.round(delay * 1000);
  const props: Record<string, string | number | undefined> = {
    'data-aos': effect,
  };
  if (ms > 0) props['data-aos-delay'] = ms;
  if (duration) props['data-aos-duration'] = duration;

  const Tag = as as 'div';
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
}
