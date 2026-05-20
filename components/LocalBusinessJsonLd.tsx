import JsonLd from './JsonLd';
import { site } from '@/data/site';

const dayMap: Record<string, string> = {
  Monday: 'Monday',
  Tuesday: 'Tuesday',
  Wednesday: 'Wednesday',
  Thursday: 'Thursday',
  Friday: 'Friday',
  Saturday: 'Saturday',
  Sunday: 'Sunday',
};

export default function LocalBusinessJsonLd() {
  const openingHours = site.hours
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap[h.day],
      opens: h.open,
      closes: h.close,
    }));

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${site.url}/#dentist`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/images/og-default.jpg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: openingHours,
    sameAs: [
      site.socials.instagram,
      site.socials.facebook,
      site.socials.google,
      site.socials.yelp,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.reviews.googleAverage,
      reviewCount: 50,
    },
    areaServed: [
      { '@type': 'City', name: 'West Hollywood' },
      { '@type': 'City', name: 'Los Angeles' },
      { '@type': 'City', name: 'Beverly Hills' },
    ],
  };

  return <JsonLd data={data} />;
}
