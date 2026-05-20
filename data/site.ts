export const site = {
  name: 'Sunset Plaza Dental',
  tagline: 'A multi-specialty dental group in West Hollywood',
  description:
    'Conveniently located in the heart of Sunset Plaza, our boutique-style, multi-specialty practice offers cosmetic, restorative, periodontic, endodontic, orthodontic, and general dentistry.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sunsetplazadental.com',
  phone: '+1 (310) 855-2434',
  phoneHref: 'tel:+13108552434',
  email: 'info@sunsetplazadental.com',
  address: {
    street: '8539 Sunset Blvd, Ste 16',
    city: 'West Hollywood',
    region: 'CA',
    postalCode: '90069',
    country: 'US',
  },
  geo: { latitude: 34.0921, longitude: -118.3795 },
  hours: [
    { day: 'Monday', open: '09:00', close: '18:00', note: null },
    { day: 'Tuesday', open: '09:00', close: '18:00', note: null },
    { day: 'Wednesday', open: '09:00', close: '18:00', note: null },
    { day: 'Thursday', open: '09:00', close: '18:00', note: null },
    { day: 'Friday', open: '09:00', close: '18:00', note: null },
    { day: 'Saturday', open: null, close: null, note: 'By appointment' },
    { day: 'Sunday', open: null, close: null, note: 'By appointment' },
  ] as Array<{ day: string; open: string | null; close: string | null; note: string | null }>,
  socials: {
    instagram: 'https://www.instagram.com/thehollywooddentist/',
    facebook: 'https://www.facebook.com/midwilshiredental/',
    google: 'https://maps.app.goo.gl/2fbnWsBz3Zk9eZ6g9',
    yelp: 'https://www.yelp.com/biz/sunset-plaza-dental-west-hollywood-2',
  },
  reviews: {
    googleAverage: 4.3,
    yelpAverage: 3.6,
  },
  logo: {
    primary: '/images/sunset-logo.png',
    inverse: '/images/sunset-logo-inverse.png',
    primaryWidth: 260,
    primaryHeight: 280,
  },
} as const;

export type Site = typeof site;
