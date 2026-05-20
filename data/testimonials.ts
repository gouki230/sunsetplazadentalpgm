export type Testimonial = {
  author: string;
  source: 'Google' | 'Yelp';
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    author: 'Julie B.',
    source: 'Yelp',
    rating: 5,
    quote:
      "Poneh is honestly the best dentist I've ever had. I've been going to her for almost 20 years and she has never failed me. She is gentle, thorough, and genuinely cares about her patients.",
  },
  {
    author: 'Ray M.',
    source: 'Yelp',
    rating: 5,
    quote:
      'Excellently run office with friendly staff and efficient operations. From scheduling to checkout, the whole experience is smooth. Highly recommend.',
  },
  {
    author: 'Alex M.',
    source: 'Google',
    rating: 5,
    quote:
      'The whole team was warm and professional from the moment I walked in. My cleaning was thorough and the doctor took the time to explain everything.',
  },
  {
    author: 'Priya R.',
    source: 'Google',
    rating: 5,
    quote:
      'I came in nervous about a chipped front tooth. The doctor showed me exactly what they would do, and the result is perfect — you can’t tell anything happened.',
  },
];
