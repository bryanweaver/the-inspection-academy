export const SITE_CONFIG = {
  name: 'The Inspection Academy',
  tagline: 'Pass Your Home Inspector Exam on the First Try',
  phone: '281-917-7360',
  email: 'mwarner@theinspectionacademy.com',
  trecNumber: '701080',

  links: {
    courseCatalog: 'https://theinspectionacademy.talentlms.com/plus/external-catalog',
    scheduleCall: 'https://calendar.app.google/H7MFRvzTW8JGNZXB8',
    scholarship: 'https://promo.theinspectionacademy.com',
  },

  promo: {
    code: 'TIA2026',
    discount: '15%',
    limit: 15,
    description: 'First 15 students in 2026',
  },

  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },
} as const;

export const NAV_ITEMS = [
  { label: 'Training', href: '/courses' },
  { label: 'Become an Inspector', href: '/become-an-inspector' },
  { label: 'Payment Plans', href: '/payment-plans' },
  { label: 'Blog', href: '/blog' },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Training', href: '/courses' },
    { label: 'Become an Inspector', href: '/become-an-inspector' },
    { label: 'Payment Plans', href: '/payment-plans' },
    { label: 'Pricing', href: '/pricing' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'About', href: '/about' },
  ],
} as const;
