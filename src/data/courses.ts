export interface Course {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  price: number;
  monthlyPrice: number;
  months: number;
  popular?: boolean;
  courses: string[];
  features: string[];
}

export const courses: Course[] = [
  {
    id: 'texas-professional',
    slug: 'texas-professional-inspector',
    title: 'Texas Professional Inspector Bundle',
    shortTitle: 'Professional Inspector',
    description: 'Complete training for the Texas Professional Inspector license. Includes all 6 TREC-required courses.',
    price: 2495,
    monthlyPrice: 104,
    months: 24,
    popular: true,
    courses: [
      'Property & Building Inspection I',
      'Property & Building Inspection II',
      'Analysis of Findings & Reporting',
      'Business Operations & Professional Responsibilities',
      'Texas Standards of Practice',
      'Texas Law',
    ],
    features: [
      'All 6 TREC-required courses',
      'Bulletproof Test Prep included',
      'Spectora software training',
      '25+ language options',
      'Unlimited practice exams',
      '12-month course access',
    ],
  },
  {
    id: 'texas-real-estate',
    slug: 'texas-real-estate-inspector',
    title: 'Texas Real Estate Inspector Bundle',
    shortTitle: 'Real Estate Inspector',
    description: 'Training for the Texas Real Estate Inspector license. Includes all 4 TREC-required courses.',
    price: 1795,
    monthlyPrice: 75,
    months: 24,
    popular: false,
    courses: [
      'Property & Building Inspection I',
      'Property & Building Inspection II',
      'Business Operations & Professional Responsibilities',
      'Texas Standards of Practice',
    ],
    features: [
      'All 4 TREC-required courses',
      'Bulletproof Test Prep included',
      'Spectora software training',
      '25+ language options',
      'Unlimited practice exams',
      '12-month course access',
    ],
  },
];
