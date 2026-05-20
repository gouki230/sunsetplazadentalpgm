export type ServiceSection = {
  heading: string;
  body: string[];
};

export type ServiceListBlock = {
  heading: string;
  items: string[];
};

export type ServiceStep = {
  title: string;
  body: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  longDescription: string[];
  image: string;
  imageAlt: string;
  icon: 'tooth' | 'sparkle' | 'shield' | 'crown' | 'smile' | 'syringe' | 'leaf' | 'star';
  highlights: string[];
  sections?: ServiceSection[];
  list?: ServiceListBlock;
  steps?: ServiceStep[];
};

export const services: Service[] = [
  {
    slug: 'cleaning-exam',
    title: 'Cleaning & Exam',
    shortDescription:
      'Gentle, professional cleanings and comprehensive exams to keep your smile healthy for the long run.',
    intro:
      'Experience painless, professional dental cleanings with our expert hygienists. We make routine checkups easy, comfortable, and essential for a healthier smile.',
    longDescription: [
      'The best defense against tooth decay is consistent oral hygiene and routine dental care. Tooth decay begins when bacteria become trapped in the teeth and gums, leading to plaque and tartar buildup. While daily brushing and flossing are essential, they can’t always reach every spot — especially deep between teeth or below the gumline.',
      'That’s why regular dental checkups and cleanings are so important. If left untreated, plaque hardens into tartar, which can only be removed using professional tools. Without intervention, this buildup can cause cavities, gum disease, and bone loss.',
      'Routine cleanings not only protect your health — they also help your smile look and feel its best. After your cleaning, our gentle hygienists will polish and buff your teeth, leaving them smooth and shiny. You’ll also receive a comprehensive exam by our dentist to assess your oral health and discuss any restorative or cosmetic treatment options that could enhance your smile.',
    ],
    image: '/images/services/slider-4.png',
    imageAlt: 'A hygienist performing a gentle dental cleaning in a modern operatory',
    icon: 'sparkle',
    highlights: [
      'Keep your smile healthy with routine preventive care',
      'Catch cavities, infections, and other concerns early',
      'Enjoy fresher breath and a brighter, more confident smile',
      'Prevent gum disease and protect your long-term health',
    ],
    sections: [
      {
        heading: 'Why dental cleanings matter',
        body: [
          'Preventative dentistry is the foundation of long-term oral health. While brushing and flossing daily is critical, scheduling professional dental cleanings every six months is just as important. We believe preventive dental care should be a key part of your overall health routine.',
          'Our skilled and gentle hygienists ensure a thorough yet comfortable experience while removing plaque and tartar from hard-to-reach areas. Regular cleanings are your best defense against tooth decay, gum disease, infections, and even tooth loss.',
        ],
      },
    ],
    list: {
      heading: 'Tips for a better cleaning experience',
      items: [
        'At-home care — brush twice daily and floss once a day to keep your smile healthy between visits.',
        'Ultrasonic cleaning — we use modern ultrasonic tools to remove plaque and tartar gently, with little to no manual scraping.',
        'Topical comfort gel — ask us about our topical numbing gel to reduce tooth and gum sensitivity during your cleaning.',
      ],
    },
  },
  {
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    shortDescription:
      'Modern, durable techniques that transform discolored, chipped, or uneven teeth into a confident smile.',
    intro:
      'We love helping our patients fall in love with their smiles. Whether you’re dealing with discoloration, chipped teeth, gaps, or other cosmetic concerns, our expert team is here to transform your smile with personalized care and advanced cosmetic dentistry solutions.',
    longDescription: [
      'Our cosmetic dentistry techniques are modern and durable, giving you a beautiful smile that is also long-lasting. We offer veneers, lumineers, teeth whitening, Invisalign, and other options to give you your smile makeover.',
      'We specialize in delivering beautiful, long-lasting results through advanced cosmetic dentistry. Whether you’re looking to correct discoloration, cracks, gaps, or alignment issues, our modern treatments are designed to enhance your smile and boost your confidence.',
      'Our experienced team understands that a confident smile plays a vital role in self-esteem. Whether the imperfections are caused by wear, injury, or decay, we’re here to help you rediscover your best smile.',
      'No matter how long you’ve been hiding your teeth, it’s never too late for a transformation. Let us guide you through a personalized cosmetic plan that fits your lifestyle and expectations.',
    ],
    image: '/images/services/slider-3.png',
    imageAlt: 'A patient admiring a new bright, even smile after cosmetic dentistry',
    icon: 'sparkle',
    highlights: [
      'Porcelain Veneers & Lumineers',
      'Professional Teeth Whitening',
      'Invisalign Clear Aligners',
      'Dental Implants & restorative makeovers',
    ],
  },
  {
    slug: 'dental-emergency',
    title: 'Dental Emergency',
    shortDescription:
      'Urgent care for severe pain, infections, and trauma — with fast appointments and a calm, expert team.',
    intro:
      'Tooth pain can be overwhelming — and it’s often a sign of something serious. We specialize in treating urgent dental issues including severe toothaches, infections, cracked or broken teeth, knocked-out teeth, abscesses, swelling, and bleeding gums. We are committed to providing fast relief and effective care.',
    longDescription: [
      'A dental emergency encompasses any pain, swelling, or discomfort involving teeth, gums, or jaw. Severe pain with swelling may indicate an abscess or infection requiring urgent attention within 24–48 hours. Head injuries, uncontrollable bleeding, or difficulty breathing warrant immediate emergency room care, followed by a dental appointment.',
      'Upon arrival, you’ll be cared for by trained staff designed to ease anxiety. We perform a comprehensive exam, take X-rays, and create a customized treatment plan with step-by-step explanations.',
    ],
    image: '/images/services/slider-8.png',
    imageAlt: 'The clinical team focused on an urgent dental procedure',
    icon: 'shield',
    highlights: [
      'Same-day appointments for urgent dental pain',
      'Tooth extraction, fillings, dentures, and crowns',
      'Comprehensive exam plus digital X-rays at every visit',
      'A calm, anxiety-aware team ready to ease your discomfort',
    ],
    list: {
      heading: 'What to do in a dental emergency',
      items: [
        'Knocked-out or broken tooth — keep the piece moist; submerge in milk or salt water and come in right away.',
        'Cut or damaged soft tissues — rinse with salt water and apply gauze to control bleeding.',
        'Fallen crown or filling — use denture glue temporarily, then schedule an appointment as soon as possible.',
        'Severe swelling, fever, or trouble breathing — go to the emergency room first, then call us.',
      ],
    },
  },
  {
    slug: 'dental-implants',
    title: 'Dental Implants',
    shortDescription:
      'Permanent tooth replacement that looks, feels, and functions just like natural teeth.',
    intro:
      'Missing one or more teeth? We offer dental implants — the most advanced and reliable solution for permanent tooth replacement. Dental implants look, feel, and function just like natural teeth, helping restore both your smile and your confidence.',
    longDescription: [
      'Our skilled dental team specializes in implant dentistry, ensuring a comfortable and successful treatment from start to finish. Whether you’re missing a single tooth or need a full-mouth restoration, dental implants can help you chew, speak, and smile with ease.',
      'A dental implant is a titanium post that is surgically placed into your jawbone, acting as a secure and permanent foundation for a dental crown. This crown is custom-crafted to match the shape, size, and color of your natural teeth — so your smile looks seamless and natural.',
      'We want you to feel informed and confident every step of the way. Dental implants typically require multiple visits and a period of healing to ensure long-lasting success.',
    ],
    image: '/images/sections/care-1.png',
    imageAlt: 'The team performing a precise implant procedure in the operatory',
    icon: 'shield',
    highlights: [
      'Long-lasting, durable, and designed to look and feel like real teeth',
      'Preserves jawbone structure and adjacent healthy teeth',
      'Easier to maintain than bridges or dentures',
      'Single-tooth, multi-tooth, and full-arch options',
    ],
    steps: [
      { title: 'Initial consultation', body: 'Exam of teeth, jawbone, and oral health to confirm candidacy and plan your case.' },
      { title: 'Bone grafting (if needed)', body: 'A bone graft may be placed if the jawbone lacks volume or density. Healing typically takes a few months.' },
      { title: 'Implant placement', body: 'A small opening is created in the jawbone and the titanium implant is securely placed.' },
      { title: 'Healing & integration', body: 'Over 3 to 6 months the gum and bone heal and integrate with the implant through osseointegration.' },
      { title: 'Abutment placement', body: 'After healing, the implant is exposed and a custom abutment is attached to support the final crown.' },
      { title: 'Crown placement', body: 'A custom-made crown is placed on the abutment and adjusted for bite, comfort, and natural appearance.' },
    ],
  },
  {
    slug: 'jaw-pain-tmj',
    title: 'Jaw Pain & TMJ',
    shortDescription:
      'Personalized treatment for clicking, headaches, and chronic jaw pain caused by TMJ disorder.',
    intro:
      'Do you experience jaw pain, earaches, or headaches? Notice a clicking or popping sound when opening or closing your mouth? You might be dealing with TMJ disorder (TMD) — a condition affecting the temporomandibular joint, which connects your jawbone to your skull.',
    longDescription: [
      'TMJ disorder (TMD) is a chronic condition that requires expert care. Our experienced dental team understands how TMD can affect your daily life — causing jaw pain, headaches, and discomfort. We provide personalized TMJ treatment in Los Angeles to help relieve symptoms and restore your comfort and jaw function.',
      'TMD is often confused with TMJ, which refers to the actual joint that connects your jawbone to your skull. Everyone has two TMJs, one on each side of the face. While the exact cause of TMD can be hard to pinpoint, the symptoms are real, painful, and often chronic.',
      'We create customized treatment plans to reduce discomfort and improve daily life. While there may be no permanent cure for TMD, we utilize proven treatments including night guards, bite correction, anti-inflammatory therapy, and — when necessary — oral surgery.',
    ],
    image: '/images/services/slider-6.png',
    imageAlt: 'A patient discussing jaw pain symptoms with the dentist',
    icon: 'shield',
    highlights: [
      'Custom night guards and bite correction',
      'Anti-inflammatory and physical therapy referrals',
      'Surgical options when conservative care isn’t enough',
      'Plans designed around your daily life and triggers',
    ],
    list: {
      heading: 'Common symptoms of TMD',
      items: [
        'Headaches, migraines, and dizziness',
        'Tinnitus or ear pain',
        'Jaw and facial pain',
        'Facial swelling or jaw locking',
        'Neck and shoulder stiffness',
        'Difficulty swallowing or chewing',
      ],
    },
  },
  {
    slug: 'kids-dentistry',
    title: 'Kids Dentistry',
    shortDescription:
      'Gentle, kid-friendly care that helps your child build healthy habits for life.',
    intro:
      'At Sunset Plaza Dental, we provide gentle, kid-friendly dental care to help your child build healthy habits for life.',
    longDescription: [
      'Healthy smiles start early — and we are committed to helping children build strong dental habits that last a lifetime.',
      'We believe pediatric dental care should begin as soon as possible. When children start young, they’re more likely to stay excited about oral hygiene and experience fewer dental issues as they grow. Our team combines clinical expertise with a gentle, compassionate approach — creating a safe, fun, and educational environment for kids and teens.',
      'Childhood is a vital time for developing long-term oral health. The brushing, flossing, and eating habits formed during these years will carry into adulthood. Our pediatric team works closely with children, helping them understand proper techniques and feel comfortable during every visit.',
      'We also focus on confidence and communication. Staff take time to explain procedures and answer questions in kid-friendly language — making dentistry a positive experience. For nervous children, we help ease their fears and empower them about their dental health.',
    ],
    image: '/images/services/slider-1.png',
    imageAlt: 'A friendly dentist chatting with a young patient in a bright operatory',
    icon: 'smile',
    highlights: [
      'First visits by age 1 or when the first tooth appears',
      'Kid-friendly language and gentle techniques',
      'Education for parents on home care and habits',
      'Calm, supportive environment for anxious kids',
    ],
    list: {
      heading: '6 tips to improve your child’s dental experience',
      items: [
        'Start early — schedule the first visit by age 1 or when the first tooth appears.',
        'Keep it simple — avoid overwhelming details that may create anxiety.',
        'Choose positive words — say “cleaning sugar bugs” instead of scary terminology.',
        'Skip the bribes — promising treats can increase nervousness.',
        'Focus on health — frame visits as essential, not optional.',
        'Try a pretend visit — play “dentist” at home before the appointment.',
      ],
    },
  },
  {
    slug: 'orthodontics',
    title: 'Orthodontics & Braces',
    shortDescription:
      'Personalized orthodontic treatments — traditional braces, clear braces, and Invisalign — for all ages.',
    intro:
      'We believe everyone deserves a confident, straight smile. Our experienced orthodontic team offers personalized orthodontic treatments for patients of all ages.',
    longDescription: [
      'We specialize in advanced orthodontic care to help you achieve a healthier, straighter smile. Braces remain one of the most trusted and effective orthodontic treatments for correcting a wide range of dental issues. These conditions may be genetic or caused by injury or other dental problems.',
      'We offer both metal and clear braces, along with Invisalign® clear aligners for patients seeking discreet options. Custom retainers help maintain results after treatment completion.',
      'Orthodontics is a specialized field of dentistry focused on correcting misaligned teeth and jaws. Misalignment can lead to chronic jaw pain, headaches, temporomandibular joint disorder (TMD), and compromised oral hygiene. Beyond oral health, orthodontic issues can impact patient confidence and self-esteem.',
    ],
    image: '/images/services/cosmetic-dentistry.png',
    imageAlt: 'A patient smiling confidently in the dental chair after orthodontic care',
    icon: 'smile',
    highlights: [
      'Metal braces, clear braces, and Invisalign®',
      'Custom retainers to maintain results',
      'Treatment plans for teens and adults',
      'Care that supports both alignment and joint health',
    ],
    list: {
      heading: 'Conditions we treat',
      items: [
        'Overbite and underbite',
        'Crossbite or open bite',
        'Gaps or spacing between teeth',
        'Crowded or overlapping teeth',
        'Misaligned jaw or midline',
      ],
    },
  },
  {
    slug: 'root-canal',
    title: 'Root Canal',
    shortDescription:
      'Save your natural tooth and end the pain — modern, gentle root canal therapy.',
    intro:
      'Severe tooth pain or infection can disrupt your daily life — and if left untreated, it may lead to serious health complications. Our priority is to relieve your pain, preserve your natural tooth, and restore your oral health.',
    longDescription: [
      'Our gentle and affordable root canal therapy aims to save natural teeth and eliminate pain without the discomfort associated with outdated procedures. Root canals treat severely decayed, damaged, or infected teeth by removing infected pulp, cleaning and disinfecting the root canal system, and sealing the tooth.',
      'Modern techniques make the treatment quick, effective, and nearly painless. The restored tooth will look, feel, and function like the rest of your smile.',
    ],
    image: '/images/services/slider-5.png',
    imageAlt: 'A dentist using surgical loupes to perform a precise root canal',
    icon: 'syringe',
    highlights: [
      'Modern techniques — most patients report little to no discomfort',
      'Preserves your natural tooth and prevents extraction',
      'Local anesthesia ensures a virtually pain-free experience',
      'Followed by a custom crown for long-term protection',
    ],
    steps: [
      { title: 'Comprehensive exam', body: 'Symptom assessment and digital X-rays to plan the treatment precisely.' },
      { title: 'Comfort-focused treatment', body: 'Local anesthesia keeps the procedure virtually pain-free from start to finish.' },
      { title: 'Cleaning & sealing', body: 'Infection is removed, the canals are cleaned and disinfected, then the tooth is sealed.' },
      { title: 'Custom crown', body: 'A natural-looking crown is placed in a follow-up visit to restore strength and appearance.' },
    ],
    list: {
      heading: 'Signs you might need a root canal',
      items: [
        'Severe, throbbing tooth pain — especially when chewing',
        'Pain from hot beverages or soup',
        'Pain from icy drinks or cold air',
        'Swollen, tender, or bleeding gums',
        'Tooth discoloration or darkening',
      ],
    },
  },
  {
    slug: 'sleep-apnea',
    title: 'Sleep Apnea',
    shortDescription:
      'Custom oral appliances and care plans that restore breathing, sleep, and energy.',
    intro:
      'Struggling with restless nights, loud snoring, or constant daytime fatigue? You might be suffering from sleep apnea. We provide custom dental solutions designed to improve your breathing, restore quality sleep, and enhance your overall health.',
    longDescription: [
      'Our team works alongside physicians to diagnose and treat sleep apnea, helping patients achieve better breathing and sleep quality. Sleep apnea impacts approximately 22 million Americans and disrupts normal breathing during sleep, often without the person’s awareness. These nightly interruptions can cause serious long-term health complications, including high blood pressure, heart disease, and stroke.',
      'We emphasize non-invasive sleep apnea treatments using custom oral appliances designed to open the airway and reduce snoring — providing an alternative to CPAP devices for many patients.',
    ],
    image: '/images/services/slider-7.png',
    imageAlt: 'A relaxed patient speaking with the dentist during a sleep apnea consultation',
    icon: 'leaf',
    highlights: [
      'Custom-fit oral appliances as a CPAP alternative',
      'Coordinated care with sleep physicians',
      'Lifestyle and bite-correction guidance',
      'Better sleep, energy, and long-term heart health',
    ],
    sections: [
      {
        heading: 'Types of sleep apnea',
        body: [
          'Obstructive Sleep Apnea (OSA) — the most prevalent form, caused by relaxed throat muscles obstructing airflow.',
          'Central Sleep Apnea — occurs when the brain fails to signal proper breathing control.',
          'Complex Sleep Apnea — combines both OSA and central sleep apnea, requiring specialized intervention.',
        ],
      },
    ],
    list: {
      heading: 'Common symptoms',
      items: [
        'Loud snoring or sudden gasping during sleep',
        'Daytime fatigue or unintentional dozing off',
        'Morning headaches and dry mouth',
        'Mood changes, irritability, or memory issues',
        'Nighttime acid reflux or excessive sweating',
        'Elevated blood pressure',
      ],
    },
  },
  {
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    shortDescription:
      'Safe, dramatic whitening — custom take-home trays or in-office Zoom in about an hour.',
    intro:
      'We’re committed to helping you maintain a healthy, radiant smile for life. Our expert team offers safe, effective teeth whitening treatments that noticeably brighten your smile — often in just one visit.',
    longDescription: [
      'Over time, teeth naturally become discolored due to aging, genetics, tobacco use, certain medications, and stain-causing foods and drinks like coffee or wine. No matter the cause, our professional whitening services can help restore your teeth’s natural brilliance.',
      'Our team will create custom-fitted trays for you to use with a powerful peroxide-based gel. Follow the treatment plan at home, and you’ll begin to see dramatic whitening results in as little as two weeks.',
      'For immediate results, our Zoom whitening system uses a special light-activated gel to brighten your teeth up to 10 shades in just one hour. Before treatment, we recommend a full cleaning to remove buildup and ensure optimal results.',
      'No more hiding your smile — our goal is to help you feel confident again. Whether you’re prepping for a big event or simply want to feel better about your smile, Dr. Bijan Afar and the team are here to help.',
    ],
    image: '/images/services/slider-2.png',
    imageAlt: 'A patient receiving in-office Zoom teeth whitening treatment',
    icon: 'sparkle',
    highlights: [
      'In-office Zoom whitening — up to 10 shades in one hour',
      'Custom take-home trays for gradual results',
      'Dentist-supervised for safe, even whitening',
      'Pre-treatment cleaning for the best outcome',
    ],
    list: {
      heading: 'Things to avoid to keep your smile bright',
      items: [
        'Coffee, tea, and red wine',
        'Soda and carbonated drinks',
        'Tobacco products',
        'Soy sauce and dark dressings',
        'Brightly colored candy',
        'Dark berries (rinse after eating)',
      ],
    },
  },
  {
    slug: 'tooth-extractions',
    title: 'Tooth Extractions',
    shortDescription:
      'When a tooth can’t be saved — safe, gentle removal with sedation options and clear next steps.',
    intro:
      'If you’re dealing with tooth pain or need a tooth removed as part of your treatment plan, we offer safe and gentle tooth extractions — with comfort, sedation, and a plan for what comes next.',
    longDescription: [
      'We prioritize comfort and use advanced techniques to ensure extractions are quick, affordable, and as painless as possible. Please don’t wait in pain — contact us for expert dental care.',
      'We always attempt to preserve natural teeth when feasible. However, when extraction becomes necessary due to severe decay, trauma, or infection, we act quickly to relieve pain and protect oral health. Severe tooth pain is treated as a dental emergency, as it may indicate an abscess or infection requiring immediate attention.',
      'Our team uses the latest technology and modern techniques to make the extraction experience comfortable. We emphasize compassionate care and fast relief for patients in need.',
    ],
    image: '/images/sections/clinic-interior.png',
    imageAlt: 'A modern, clean operatory ready for a comfortable extraction',
    icon: 'tooth',
    highlights: [
      'Advanced technology and modern techniques',
      'Same-day implant placement when appropriate',
      'Coordinated care with your medical providers',
      'Comfortable sedation options to keep you relaxed',
    ],
  },
  {
    slug: 'tooth-veneers',
    title: 'Porcelain Veneers & Lumineers',
    shortDescription:
      'Custom porcelain veneers and minimally invasive Lumineers for a long-lasting, natural-looking smile.',
    intro:
      'Looking to enhance your smile with a confident, natural look? We offer high-quality porcelain veneers and Lumineers to correct chipped, stained, or uneven teeth — designed and placed right here in our Sunset Plaza office.',
    longDescription: [
      'Porcelain veneers are thin, custom-made shells that cover the front of your teeth to correct imperfections and enhance your smile. You may be a great candidate if you have teeth that are discolored, chipped, cracked, worn down, or gapped. We offer both traditional veneers and minimal-prep Lumineers — crafted to deliver a natural, flawless look.',
      'Dental veneers are ultra-thin shells of high-quality porcelain designed to mimic the natural appearance of tooth enamel. They’re one of the most effective and popular options for a complete smile makeover, offering long-lasting results with just one treatment.',
      'We begin by taking precise impressions of your teeth. These are sent to our trusted dental lab, where your custom veneers are created to match the color, shape, and translucency of your natural teeth — giving you a seamless, beautiful smile.',
      'During placement, a small layer of enamel is gently buffed from your teeth to ensure a perfect fit. The veneers are then bonded securely using advanced dental adhesives. With proper care and regular checkups, porcelain veneers can last 15 years or longer.',
      'We also offer Lumineers, a minimally invasive alternative to traditional veneers. Lumineers are even thinner, requiring little to no tooth preparation — no drilling, no needles, and fewer visits.',
    ],
    image: '/images/sections/care-2.png',
    imageAlt: 'The dentist matching veneer shades to a patient’s natural teeth',
    icon: 'star',
    highlights: [
      'Custom porcelain veneers shaped for your face',
      'Lumineers — minimal prep, no drilling, fewer visits',
      'Long-lasting results (15+ years with proper care)',
      'Completed in as few as three visits',
    ],
    steps: [
      { title: 'First visit', body: 'Consultation and exam to plan your case and discuss veneers vs. Lumineers.' },
      { title: 'Second visit', body: 'Tooth prep (minimal for Lumineers) and precise impressions sent to our trusted lab.' },
      { title: 'Third visit', body: 'Your veneers are bonded securely with advanced dental adhesives — done in a single appointment.' },
    ],
  },
];

export const serviceSlugs = services.map((s) => s.slug);
