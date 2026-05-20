import JsonLd from './JsonLd';
import { site } from '@/data/site';

export default function BreadcrumbJsonLd({ items }: { items: { name: string; href: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.href}`,
    })),
  };
  return <JsonLd data={data} />;
}
