export type TeamPhoto = {
  name: string;
  role: string;
  credentials: string;
  photo: string;
};

export type PrincipalDentist = TeamPhoto & {
  bio: string[];
  specialties: string[];
  photoWidth: number;
  photoHeight: number;
};

export const principal: PrincipalDentist = {
  name: 'Dr. Bijan Afar',
  credentials: 'DDS, MS',
  role: 'Owner · Periodontist & Oral Implantologist',
  bio: [
    'Dr. Bijan Afar has been practicing dentistry in Los Angeles for over thirty years, with more than 29 years of experience as a periodontist and implantologist. He is passionate about restorative dentistry and is committed to restoring his patients’ teeth and gums with care and precision.',
    'Dr. Afar earned his DDS and Master of Science in Oral Biology from the UCLA School of Dentistry, followed by his specialty degree in Periodontics and Implant Dentistry from the University of Washington in Seattle. As a National Institute of Health Fellowship recipient, he was recognized among the top five percent of dental students nationally.',
    'He is an active member of the American Dental Association (ADA) and the California Dental Association (CDA). His varied background, expertise, and care for his patients allow him to provide the healthiest, most functional, and beautiful smiles.',
  ],
  specialties: ['Periodontics', 'Oral Implantology', 'Restorative Dentistry'],
  photo: '/images/team/bijan-afar.webp',
  photoWidth: 560,
  photoHeight: 415,
};

export const teamPhotos: TeamPhoto[] = [
  {
    name: 'Dr. Poneh Ghazri',
    role: 'General & Cosmetic Dentist',
    credentials: 'DDS',
    photo: '/images/team/poneh-ghazri.webp',
  },
  {
    name: 'Dr. Peyman Kakoli',
    role: 'Dentist',
    credentials: 'DDS',
    photo: '/images/team/peyman-kakoli.webp',
  },
  {
    name: 'Dr. Sheila Morim',
    role: 'Dentist',
    credentials: 'DDS',
    photo: '/images/team/sheila-morim.webp',
  },
  {
    name: 'Dr. Nancy Saghian',
    role: 'Dentist',
    credentials: 'DDS',
    photo: '/images/team/nancy-saghian.webp',
  },
  {
    name: 'Dr. Alina Tiraspolskaya',
    role: 'Dentist',
    credentials: 'DDS',
    photo: '/images/team/alina-tiraspolskaya.webp',
  },
];
