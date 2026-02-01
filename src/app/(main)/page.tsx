import type { Metadata } from 'next';
import {
  Hero,
  ProblemSolution,
  GuideCredentials,
  HowItWorks,
  MoneyBackGuarantee,
  CourseBundles,
  Features,
  TRECData,
  Testimonials,
  CostOfFailure,
  SuccessStakes,
  SubscriptionCallout,
  CTA,
} from '@/components/sections';

export const metadata: Metadata = {
  title: 'The Inspection Academy | Texas Home Inspector Training',
  description:
    'Pass your Texas home inspector exam on the first try. 67% pass rate (#2 in Texas). TREC-approved courses with proven Adult Learning Theory. Money-back guarantee.',
  keywords: [
    'Texas home inspector training',
    'TREC approved courses',
    'home inspector licensing',
    'Texas inspector exam prep',
    'home inspection school Texas',
    'NHIE exam prep',
  ],
  openGraph: {
    title: 'The Inspection Academy | Texas Home Inspector Training',
    description:
      'Pass your Texas home inspector exam on the first try with our TREC-approved training. 67% pass rate (#2 in Texas). Money-back guarantee included.',
    type: 'website',
    url: 'https://theinspectionacademy.com',
    siteName: 'The Inspection Academy',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Inspection Academy - Texas Home Inspector Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Inspection Academy | Texas Home Inspector Training',
    description:
      'Pass your Texas home inspector exam on the first try with our TREC-approved training. 67% pass rate (#2 in Texas). Money-back guarantee included.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://theinspectionacademy.com',
  },
};

// Organization Schema (includes reviews)
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'EducationalOrganization'],
  name: 'The Inspection Academy',
  url: 'https://theinspectionacademy.com',
  logo: 'https://theinspectionacademy.com/logo-blue.png',
  description:
    'TREC-approved Texas home inspector training with 67% first-time pass rate. Online courses using proven Adult Learning Theory.',
  telephone: '+1-281-917-7360',
  email: 'mwarner@theinspectionacademy.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Houston',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'State',
    name: 'Texas',
  },
  sameAs: [
    'https://www.facebook.com/theinspectioncompanytx',
    'https://www.instagram.com/theinspectionacademy/',
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'TREC Approved Provider',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Texas Real Estate Commission',
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '1',
    reviewCount: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Monte S.',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody:
        'I had a great experience with The Inspection Academy. The course material was clear, thorough, and easy to follow, making the licensing process much less stressful. Matthew has done an excellent job structuring the program so it\'s practical, up to date, and focused on what you actually need to become certified. Highly recommend this course to anyone serious about becoming a licensed home inspector.',
    },
  ],
};

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Texas Home Inspector Training',
  description:
    'Complete TREC-approved training to become a licensed Texas home inspector. 154 hours of qualifying education plus exam prep.',
  provider: {
    '@type': 'Organization',
    name: 'The Inspection Academy',
    url: 'https://theinspectionacademy.com',
  },
  educationalLevel: 'Professional',
  occupationalCategory: 'Home Inspector',
  coursePrerequisites: 'None',
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    courseWorkload: 'PT154H',
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* ABOVE THE FOLD */}
      <Hero />

      {/* BELOW THE FOLD - StoryBrand Framework Order */}
      <ProblemSolution />        {/* The problem: what most schools do wrong */}
      <GuideCredentials />       {/* We're inspectors + educators */}
      <HowItWorks />             {/* 3-step process with tagline */}
      <MoneyBackGuarantee />     {/* Pass-or-refund guarantee */}
      <CourseBundles />          {/* The offer: pricing with promo */}
      <Features />               {/* Why students choose TIA */}
      <TRECData />               {/* 67% pass rate - #2 in Texas */}
      <Testimonials />           {/* Student testimonials */}
      <CostOfFailure />          {/* Stakes: what failure costs */}
      <SuccessStakes />          {/* Stakes: what success brings */}
      <SubscriptionCallout />    {/* 0% interest payment plans */}
      <CTA />                    {/* Final push */}
    </>
  );
}
