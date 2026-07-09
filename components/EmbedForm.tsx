'use client';

import Script from 'next/script';
import { site } from '@/data/site';

type EmbedFormProps = {
  minHeight?: number | string;
  className?: string;
  title?: string;
  formName?: string;
};

export default function EmbedForm({
  minHeight = 640,
  className,
  title = 'Contact form',
  formName = 'Sunset Plaza Dental web form',
}: EmbedFormProps) {
  const height = typeof minHeight === 'number' ? `${minHeight}px` : minHeight;

  return (
    <div className={className} style={{ width: '100%', minHeight: height }}>
      <iframe
        src="https://api.lnseoservices.com/widget/form/1YGAD6UCtZLxOOQDchAd"
        style={{ width: '100%', height: height, border: 'none', borderRadius: 4 }}
        id="inline-1YGAD6UCtZLxOOQDchAd"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height="undefined"
        data-layout-iframe-id="inline-1YGAD6UCtZLxOOQDchAd"
        data-form-id="1YGAD6UCtZLxOOQDchAd"
        title={title}
      />
      <p className="mt-3 text-xs text-ink-muted">
        Having trouble with the form? Call us at{' '}
        <a href={site.phoneHref} className="font-semibold underline hover:text-sunset-600">
          {site.phone}
        </a>{' '}
        or email{' '}
        <a href={`mailto:${site.email}`} className="font-semibold underline hover:text-sunset-600">
          {site.email}
        </a>
        .
      </p>
      <Script
        id="lnseoservices-form-embed"
        src="https://api.lnseoservices.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
