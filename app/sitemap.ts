import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { services } from '@/data/services';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, '');
  const now = new Date();

  const staticRoutes = [
    '',
    '/about',
    '/team',
    '/services',
    '/faq',
    '/appointment',
    '/contact',
    '/accessibility-statement',
    '/privacy-policy',
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}/`,
    lastModified: now,
    changeFrequency: path === '' ? 'monthly' : 'yearly',
    priority: path === '' ? 1 : 0.7,
  }));

  services.forEach((s) => {
    entries.push({
      url: `${base}/services/${s.slug}/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    });
  });

  return entries;
}
