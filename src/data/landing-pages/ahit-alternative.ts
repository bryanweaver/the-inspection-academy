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

// Page metadata
export const pageMetadata = {
  title: 'AHIT Alternative Texas | TIA vs AHIT: 67% vs 51% Pass Rate',
  description:
    "Comparing AHIT to TIA? See official TREC data: TIA 67% vs AHIT 51.45%. Same price, but TIA includes textbooks. See the comparison.",
  url: 'https://theinspectionacademy.com/ahit-alternative',
};

// Hero section content - NEW STRUCTURE
export const heroContent = {
  badge: 'Verified by Official TREC Data',
  badgeLink: 'https://www.trec.texas.gov/education/education-provider-exam-passage-rates-inspectors',
  h1: 'Pass Your Texas Home Inspector',
  h1Accent: 'Exam on the First Try',
  h2: 'Researching AHIT for your Texas home inspection license? Compare official TREC pass rates before you enroll.',
  ctaPrimary: 'Start Your Training Today',
  ctaPrimarySubtext: 'TREC approved • 0% financing available',
  ctaSecondary: 'Book an Online Meeting',
  // Social proof badges for hero
  socialProofBadges: [
    { icon: 'Shield', text: 'TREC-Approved Provider #701080' },
    { icon: 'Award', text: '#2 Highest Pass Rate in Texas (67% - Official TREC Data)', highlight: true },
    { icon: 'Zap', text: '15.55 percentage points higher than AHIT (51.45%)' },
  ],
  // Quick comparison cards
  quickComparison: {
    ahit: {
      name: 'AHIT',
      price: '$2,500',
      note: '(no textbooks)',
      passRate: '51.45% pass rate',
    },
    tia: {
      name: 'TIA',
      price: '$2,495',
      note: '(textbooks included)',
      passRate: '67% pass rate',
    },
    advantage: 'YOUR ADVANTAGE: Same price, but you get more + 15.55% better pass rate',
  },
  scrollCta: 'See Complete School Comparison ↓',
  trustBadge: '✓ All data verified by official TREC records',
};

// Comparison table data - UPDATED
export const comparisonFeatures: ComparisonFeature[] = [
  {
    feature: 'Price',
    tia: '$2,495',
    ahit: '$2,500',
    highlight: true,
  },
  {
    feature: 'TREC Courses (154 hours)',
    tia: true,
    ahit: true,
  },
  {
    feature: 'NHIE Textbooks',
    tia: 'Included ($200 value)',
    ahit: 'Not included',
    highlight: true,
  },
  {
    feature: 'Field Experience Included',
    tia: 'Student arranged',
    ahit: 'Scheduled practicum',
  },
  {
    feature: 'Field Experience Model',
    tia: '1:1 with inspector of YOUR choice',
    ahit: '4:1 group ratio, wait lists',
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
  {
    feature: 'Money-Back Guarantee',
    tia: 'Pass-or-refund',
    ahit: false,
    highlight: true,
  },
];

export const comparisonNote =
  'Source: Official TREC Provider Exam Pass Rates';
export const comparisonNoteLink =
  'https://www.trec.texas.gov/education/education-provider-exam-passage-rates-inspectors';
export const comparisonInsight =
  "Key Insight: AHIT's starter package costs $2,500 and includes scheduled practicum but excludes required textbooks. TIA is $2,495 and includes textbooks but gives you flexibility to arrange your own field experience. The real difference? TIA's 67% pass rate vs AHIT's 51.45%—what matters is which school actually prepares you to pass.";

// Field Experience section content
export const fieldExperienceContent = {
  title: 'Understanding Field Experience Requirements',
  subtitle: 'What TREC Changed and Why It Matters',
  intro: 'In 2023, TREC changed the "Practicum" requirement to "Field Experience" to give students MORE flexibility in how they meet this requirement.',
  ahitApproach: {
    title: "AHIT's Approach: One-Size-Fits-All",
    description: 'AHIT includes their scheduled practicum in your tuition:',
    points: [
      "Wait lists - You're on their schedule, not yours",
      "4:1 student-to-instructor ratio - You're one of four students per inspector",
      "Out-of-state contractors - AHIT contracts Texas inspectors since they're based elsewhere",
      "Limited scheduling - Typically spread over 2 weekends based on their availability",
    ],
  },
  tiaApproach: {
    title: "TIA's Approach: Your Choice, Your Schedule",
    description: "TIA doesn't include field experience because TREC designed it to give YOU options:",
    points: [
      "Choose your mentor - Work 1-on-1 with any Texas inspector with 5+ years experience or 200+ inspections",
      "Flexible scheduling - Complete your 5 ride-alongs on YOUR timeline",
      "Potentially FREE - Many students connect with local inspectors who provide ride-alongs at no cost",
      "Real relationships - Build connections with working inspectors in your market",
    ],
  },
  networkNote: "Plus, TIA can connect you with our network of Texas inspectors if you need referrals.",
};

// Six reasons section - UPDATED from 5 to 6
export const sixReasons: Reason[] = [
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
    id: 'same-price-smarter-value',
    number: 2,
    title: 'Same Price, Smarter Value',
    subtitle: 'What You Really Get for $2,495',
    description:
      "The Bottom Line: Same price, but TIA's 67% pass rate (vs AHIT's 51.45%) proves what actually matters isn't which expenses are bundled—it's whether the training prepares you to pass. Most TIA students arrange field experience for free or minimal cost with local inspectors, building valuable connections in their market while getting personalized 1:1 attention.",
    stats: {
      tia: 'TIA $2,495: Includes $200 textbooks, field experience flexibility, 20,000+ questions + BTP',
      ahit: 'AHIT $2,500: Includes practicum (4:1 ratio, wait lists), textbooks NOT included',
    },
    icon: 'DollarSign',
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
  {
    id: 'money-back-guarantee',
    number: 6,
    title: 'Risk-Free Guarantee',
    subtitle: 'We Put Our Money Where Our Mouth Is',
    description:
      "Pass your licensing exam on your first attempt — or we refund every dollar you paid. Complete our training, pass five sample exams on Bulletproof Test Prep, take the state exam, and if you don't pass on your first try, we give you your money back. No games. Just a guarantee backed by real results.",
    stats: {
      tia: 'Pass-or-refund guarantee',
      ahit: 'No guarantee offered',
    },
    icon: 'Shield',
  },
];

// Pass rate statistics
export const passRateStats: PassRateStat[] = [
  { label: 'TIA', value: 67, color: 'success' },
  { label: 'Texas Average', value: 56.8, color: 'warning' },
  { label: 'AHIT', value: 51.45, color: 'danger' },
];

export const passRateContent = {
  title: 'Official TREC Performance Data: TIA vs AHIT vs Texas Average',
  description: 'Real results verified by the Texas Real Estate Commission',
  stats: [
    '67% - TIA First-Time Pass Rate (#2 in Texas)',
    '56.8% - Texas State Average',
    '51.45% - AHIT Pass Rate',
  ],
  badges: [
    'Above State Average',
    '15.55 points above AHIT',
  ],
  verifyText: "Texas is the only state that publicly posts school-specific pass rates. Don't take our word for it—verify yourself.",
  ctaText: 'View Official TREC Data',
  ctaLink:
    'https://www.trec.texas.gov/education/education-provider-exam-passage-rates-inspectors',
};

// Money-back guarantee section
export const guaranteeContent = {
  title: "We're So Confident You'll Pass, We Guarantee It",
  mainText: 'Pass your licensing exam on your first attempt — or we refund every dollar you paid.',
  details: "Complete our training, pass five sample exams on Bulletproof Test Prep, take the state exam, and if you don't pass on your first try, we give you your money back.",
  emphasis: 'No games. Just a guarantee backed by real results.',
  comparison: "Why can we offer this when AHIT doesn't? Because our system works. 67% of our students pass on the first try—#2 in Texas compared to AHIT's 51.45%.",
  ctaPrimary: 'Start Your Training',
  ctaSecondary: 'See Full Terms',
  termsLink: '/money-back-guarantee',
};

// Texas keywords section
export const texasKeywordsContent = {
  title: 'AHIT Texas Training vs TIA: Which School is Right for Houston, Dallas, and San Antonio Students?',
  intro: 'Both AHIT and The Inspection Academy are TREC-approved for Texas home inspector training. But Texas students researching AHIT Texas courses should compare the key differences:',
  ahitApproach: {
    title: 'AHIT Texas Approach:',
    text: 'AHIT operates as a national franchise with Texas courses adapted from their national curriculum.',
  },
  tiaApproach: {
    title: 'TIA Texas Focus:',
    text: 'Built specifically for Texas students, by a Texas-licensed inspector based in Houston, teaching Texas-specific Standards of Practice.',
  },
  conclusion: "For students in Houston, Dallas, San Antonio, Austin, or anywhere in Texas: Compare official TREC pass rate data before choosing your school. AHIT's starter package is $2,500 without textbooks. TIA includes everything for $2,495 with a 67% pass rate vs AHIT's 51.45%.",
};

// Cost of failure section
export const costOfFailureContent = {
  title: 'Why Pass Rates Matter More Than Price',
  description: "Failing the exam one or more times is the true issue.",
  costs: [
    '$200 for every failed exam attempt',
    '$300-$800 per class in TREC-required retake courses after a 3rd failed attempt',
    '$50-$200 on additional study aids like practice tests and flashcards',
    'Postponing your inspection career by 3-6 months',
  ],
  totalCost: "With AHIT's 51.45% pass rate, you have coin-flip odds of facing these costs.",
  conclusion:
    "At comparable price points, TIA's 67% pass rate significantly reduces your risk of expensive retakes.",
};

// FAQ section - UPDATED with field experience FAQ
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
    question: 'Does TIA include field experience in the tuition?',
    answer:
      "No, and here's why that's actually better for you: TREC changed the practicum requirement to \"field experience\" specifically to give students flexibility. AHIT locks you into their scheduled practicum with 4:1 ratios and wait lists. TIA gives you the freedom to complete your 5 required ride-alongs with ANY Texas inspector who has 5+ years experience or 200+ inspections. Many students find local inspectors who provide ride-alongs for free, or for $50-100 per ride-along—far less than the cost AHIT builds into their $2,500 package. You get 1:1 personalized attention, flexible scheduling, and the opportunity to build real relationships with working inspectors in YOUR market. Need help finding an inspector? We can connect you with our network.",
  },
  {
    question: 'Can I talk to someone before deciding?',
    answer:
      'Absolutely. Text or call directly at 281-917-7360. No pressure, just honest answers about which school is right for you.',
  },
];

// Final CTA section - UPDATED
export const finalCTAContent = {
  title: 'Ready to Choose the Higher-Performing School?',
  description: "Don't settle for coin-flip odds when you can significantly improve your chances.",
  benefits: [
    "67% pass rate vs AHIT's 51.45%",
    'Same price, more included',
    'Money-back guarantee',
    'Texas-based and Texas-focused',
  ],
  ctaPrimary: 'Start Your Training Today',
  ctaSecondary: 'Book an Online Meeting',
};

// A/B Test variants for headlines
export const headlineVariants = {
  control: {
    h1: 'Pass Your Texas Home Inspector',
    h1Accent: 'Exam on the First Try',
    h2: 'Researching AHIT for your Texas home inspection license? Compare official TREC pass rates before you enroll.',
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
