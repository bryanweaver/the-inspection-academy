import { GraduationCap, FlaskConical, Lightbulb, Globe, Smartphone, CreditCard } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    id: 'educators-first',
    title: 'Educators First',
    description: "Led by a Master's in Education",
    icon: 'GraduationCap',
  },
  {
    id: 'science-based',
    title: 'Science-Based',
    description: 'Built on Adult Learning Theory',
    icon: 'FlaskConical',
  },
  {
    id: 'real-inspectors',
    title: 'Real Inspectors',
    description: 'Created by licensed TX professional inspectors',
    icon: 'Lightbulb',
  },
  {
    id: 'languages',
    title: '25+ Languages',
    description: 'Learn in your native language',
    icon: 'Globe',
  },
  {
    id: 'spectora',
    title: 'Spectora Integration',
    description: 'Train with industry-leading software',
    icon: 'Smartphone',
  },
  {
    id: 'financing',
    title: '0% Interest Financing',
    description: '12, 18, or 24-month payment plans',
    icon: 'CreditCard',
  },
];

export const comparisonData = {
  traditional: {
    title: 'Traditional Schools',
    items: [
      'Rushed classroom sessions',
      'Passive video lectures',
      '"Good luck" with textbooks',
      '58.79% avg pass rate',
    ],
  },
  tia: {
    title: 'The Inspection Academy',
    items: [
      'Self-paced online learning',
      'Interactive exercises',
      'Adaptive test prep included',
      'Built to help you pass',
    ],
  },
};
