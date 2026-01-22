// AHIT Alternative Landing Page Data
// All content from spec doc for easy updates

export interface ComparisonFeature {
  feature: string;
  tia: string | boolean;
  ahit: string | boolean;
  highlight?: boolean;
}

export interface Reason {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  stats?: {
    tia: string;
    ahit: string;
    difference?: string;
  };
  icon: string;
}

export interface PassRateStat {
  label: string;
  value: number;
  color: 'success' | 'warning' | 'danger';
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  result: string;
  rating: number;
  image?: string;
}

// Page metadata
export const pageMetadata = {
  title: 'AHIT Alternative Texas | TIA vs AHIT: 67% vs 51% Pass Rate',
  description:
    "Comparing AHIT to TIA? See official TREC data: TIA 67% vs AHIT 51.45%. TIA includes books at comparable price. See the comparison.",
  url: 'https://theinspectionacademy.com/ahit-alternative',
};

// Hero section content
export const heroContent = {
  badge: 'Verified by Official TREC Data',
  badgeLink: 'https://www.trec.texas.gov/education/education-provider-exam-passage-rates-inspectors',
  h1: 'The AHIT Alternative',
  h1Accent: 'That Actually Works',
  h2: '67% pass rate vs AHIT\'s 51% — and books are included',
  description: `Looking at AHIT for your Texas home inspector license? Before you enroll, compare the official TREC pass rates.

AHIT is the largest school in Texas, but not the highest performing. The Inspection Academy delivers significantly better results.`,
  ctaPrimary: 'Start Your Training Today',
  ctaPrimarySubtext: 'TREC approved • 0% financing available',
  ctaSecondary: 'Schedule a Free Meeting',
  // Stat badges for hero
  statBadges: [
    { value: '67%', label: 'TIA Pass Rate', color: 'success' },
    { value: '✓', label: 'Books Included', color: 'primary' },
    { value: '51%', label: 'AHIT Pass Rate', color: 'danger' },
  ],
  socialProof: 'Texas inspectors trust TIA for higher pass rates',
};

// Comparison table data
export const comparisonFeatures: ComparisonFeature[] = [
  {
    feature: 'Price',
    tia: '$2,495',
    ahit: '$3,199',
    highlight: true,
  },
  {
    feature: 'TREC Courses (154 hours)',
    tia: true,
    ahit: true,
  },
  {
    feature: 'NHIE Textbooks Included',
    tia: true,
    ahit: false,
    highlight: true,
  },
  {
    feature: 'Embedded Practice Questions',
    tia: '20,000+',
    ahit: 'Unknown',
  },
  {
    feature: 'Exam-Style Prep System',
    tia: 'BTP: 3,000+ questions',
    ahit: 'Basic',
  },
  {
    feature: 'Unlimited Practice Tests',
    tia: true,
    ahit: false,
  },
  {
    feature: 'Diagnostic by Section',
    tia: '15 sections',
    ahit: false,
  },
  {
    feature: 'Learning System',
    tia: 'Engineered',
    ahit: 'Information delivery',
  },
  {
    feature: 'Spaced Repetition',
    tia: true,
    ahit: false,
  },
  {
    feature: 'Adult Learning Design',
    tia: "Master's-level educator",
    ahit: false,
  },
  {
    feature: 'Texas-Based Instructor',
    tia: 'Houston',
    ahit: 'National',
  },
  {
    feature: 'First-Time Pass Rate (TREC)',
    tia: '67%',
    ahit: '51.45%',
    highlight: true,
  },
];

export const comparisonNote =
  'Source: Official TREC Provider Exam Pass Rates';
export const comparisonNoteLink =
  'https://www.trec.texas.gov/education/education-provider-exam-passage-rates-inspectors';
export const comparisonInsight =
  "Key Insight: While AHIT is the largest school in Texas (241 students, 42% market share), The Inspection Academy delivers 15.55 percentage points higher pass rates — and includes NHIE textbooks at comparable price.";

// Five reasons section
export const fiveReasons: Reason[] = [
  {
    id: 'higher-pass-rate',
    number: 1,
    title: 'Higher Pass Rate',
    subtitle: 'Verified by TREC',
    description:
      'What this means: For every 100 students, 15-16 more students pass with TIA than AHIT on their first attempt.',
    stats: {
      tia: '67% first-time pass rate',
      ahit: '51.45% first-time pass rate',
      difference: '15.55 percentage points better odds with TIA',
    },
    icon: 'TrendingUp',
  },
  {
    id: 'books-included',
    number: 2,
    title: 'Books Included',
    subtitle: 'At Comparable Price',
    description:
      "TIA includes NHIE textbooks at comparable price. AHIT's package doesn't — you'll pay extra. Plus you get 20,000+ embedded questions, BTP exam prep, unlimited practice tests, and Spectora training.",
    stats: {
      tia: 'TIA: Books included at comparable price',
      ahit: 'AHIT: Books not included — additional cost',
    },
    icon: 'BookOpen',
  },
  {
    id: 'texas-based',
    number: 3,
    title: 'Texas-Based vs National Franchise',
    subtitle: 'Built for Texas',
    description:
      'Texas-specific focus means content tailored to your actual exam, not generic national material retrofitted for state requirements.',
    stats: {
      tia: 'Built in Houston, by a Texas inspector, for Texas students',
      ahit: 'National curriculum adapted for Texas, franchise model',
    },
    icon: 'MapPin',
  },
  {
    id: 'adaptive-prep',
    number: 4,
    title: 'Integrated Adaptive Exam Prep',
    subtitle: 'Targeted Learning',
    description:
      "The closed-loop system identifies YOUR weak spots and guides targeted study—not generic practice.",
    stats: {
      tia: "20,000+ embedded questions + Bulletproof Test Prep's 3,000+ exam-style questions with unlimited practice tests and diagnostic tracking across 15 sections",
      ahit: 'Basic quizzes and practice materials',
    },
    icon: 'Target',
  },
  {
    id: 'flexible-payment',
    number: 5,
    title: 'Flexible Payment Options',
    subtitle: 'No Credit Check',
    description: 'Payment plans: 12, 18, or 24 months with no credit check.',
    icon: 'CreditCard',
  },
];

// Pass rate statistics
export const passRateStats: PassRateStat[] = [
  { label: 'TIA', value: 67, color: 'success' },
  { label: 'Texas Average', value: 56.8, color: 'warning' },
  { label: 'AHIT', value: 51.45, color: 'danger' },
];

export const passRateContent = {
  title: 'Official TREC Data: Pass Rate Comparison',
  description: `Texas is the only state that publicly posts school-specific pass rates. Don't take our word for it—verify yourself.

According to the most recent TREC data:
• The Inspection Academy: 67% first-time pass rate
• Texas Average: 56.80% first-time pass rate
• AHIT: 51.45% first-time pass rate

AHIT performs below the state average.
TIA performs significantly above it.`,
  ctaText: 'View complete official data: TREC Provider Exam Pass Rates',
  ctaLink:
    'https://www.trec.texas.gov/education/education-provider-exam-passage-rates-inspectors',
};

// Cost of failure section
export const costOfFailureContent = {
  title: 'Why Pass Rates Matter More Than Price',
  description: `At comparable prices, pass rate is what separates the schools. With AHIT's 51.45% pass rate, you have coin-flip odds. If you fail your first attempt:`,
  costs: [
    '$200 retake fee',
    '2-3 months additional study time',
    '3-6 months delayed career launch',
    '$3,000-$8,000/month in lost inspector income',
  ],
  totalCost: 'Total cost of one failure: $5,000-$15,000+',
  conclusion:
    "At comparable price points, TIA's 67% pass rate and included books make it the smarter choice over AHIT's 51% pass rate.",
};

// FAQ section
export const ahitFAQs: FAQ[] = [
  {
    question: 'Is AHIT TREC approved?',
    answer:
      'Yes, both AHIT and TIA are TREC-approved qualifying education providers in Texas. TREC approval is the minimum standard—what matters is pass rate performance.',
  },
  {
    question: 'Why does AHIT have a lower pass rate than TIA?',
    answer:
      "Teaching methodology. AHIT uses a national curriculum adapted for Texas with traditional information delivery. TIA builds Texas-specific content using adult learning theory, spaced repetition, and active engagement with 20,000+ embedded practice questions.",
  },
  {
    question: 'Which is better for Texas students - AHIT or TIA?',
    answer:
      "According to official TREC data, TIA students pass at 67% vs AHIT's 51.45%. At comparable prices, TIA includes NHIE textbooks and more exam prep resources. Choose based on verified pass rates and total value, not just brand recognition.",
  },
  {
    question: "Is AHIT's larger size an advantage?",
    answer:
      "AHIT's 241 students make them the largest school in Texas (42% market share), but size doesn't equal quality. Their 51.45% pass rate is below the Texas average of 56.80%. TIA's smaller size allows individualized attention and achieves significantly higher results.",
  },
  {
    question: 'Can I talk to someone before deciding?',
    answer:
      'Absolutely. Text or call directly at 281-917-7360. No pressure, just honest answers about which school is right for you.',
  },
];

// Final CTA section
export const finalCTAContent = {
  title: 'Ready to Choose the Higher-Performing School?',
  description: "Don't settle for coin-flip odds when you can significantly improve your chances.",
  benefits: [
    "67% pass rate vs AHIT's 51.45%",
    'Books included at comparable price',
    'More exam prep included',
    'Texas-based and Texas-focused',
  ],
  phone: '281-917-7360',
  ctaPrimary: 'Start Your Training Today',
  ctaSecondary: 'Compare Full Details',
  ctaTertiary: 'Schedule an Online Meeting',
};

// Testimonials section
export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "I researched AHIT and TIA for weeks. The pass rate difference sealed the deal. Passed my exam on the first try and started my business within 2 months of finishing.",
    author: 'Marcus Johnson',
    location: 'Dallas, TX',
    result: 'Passed first try',
    rating: 5,
  },
  {
    id: '2',
    quote: "The adaptive test prep is what sets TIA apart. It identified exactly where I was weak and helped me focus my study time. Worth every penny compared to AHIT's basic materials.",
    author: 'Jennifer Martinez',
    location: 'San Antonio, TX',
    result: 'Passed first try',
    rating: 5,
  },
  {
    id: '3',
    quote: "I almost went with AHIT because of name recognition. So glad I looked at the actual TREC data. TIA's pass rate speaks for itself, and the books were included.",
    author: 'Robert Chen',
    location: 'Houston, TX',
    result: 'Passed first try',
    rating: 5,
  },
];

export const testimonialsContent = {
  title: 'Students Who Chose TIA Over AHIT',
  subtitle: 'Real results from real Texas inspectors',
};

// Sticky CTA content
export const stickyCTAContent = {
  text: 'Ready to start?',
  buttonText: 'Enroll Now - $2,495',
  subtext: '67% pass rate • Books included',
};

// Urgency banner content
export const urgencyContent = {
  // Set to a future date for the countdown - update this as needed
  nextCohortDate: '2026-02-15T00:00:00',
  headline: 'Spring 2026 Cohort',
  subtext: 'Classes start February 15',
  spotsLeft: 12, // Set to null to hide spots messaging
  spotsText: 'spots remaining at current price',
};

// A/B Test variants for headlines
export const headlineVariants = {
  control: {
    h1: 'The AHIT Alternative',
    h1Accent: 'That Actually Works',
    h2: '67% pass rate vs AHIT\'s 51% — and books are included',
  },
  variantA: {
    h1: 'Why Top Students Choose TIA',
    h1Accent: 'Over AHIT',
    h2: 'Official TREC data: 67% pass rate vs 51% — books included',
  },
  variantB: {
    h1: 'Pass Your Exam',
    h1Accent: 'On the First Try',
    h2: 'TIA: 67% pass rate • AHIT: 51% • Books included',
  },
};
