'use client';

import Script from 'next/script';

type EmbedFormProps = {
  minHeight?: number | string;
  className?: string;
};

export default function EmbedForm({ minHeight = 640, className }: EmbedFormProps) {
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
        data-form-name="sunsetplazadental Web Form "
        data-height="undefined"
        data-layout-iframe-id="inline-1YGAD6UCtZLxOOQDchAd"
        data-form-id="1YGAD6UCtZLxOOQDchAd"
        title="sunsetplazadental Web Form "
      />
      <Script
        id="lnseoservices-form-embed"
        src="https://api.lnseoservices.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
