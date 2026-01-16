import { Suspense } from 'react';
import type { Metadata } from 'next';
import {
  AHITHero,
  ComparisonTable,
  TestimonialsSection,
  PassRateStats,
  CostOfFailureSection,
  FiveReasons,
  FAQSection,
  FinalCTA,
  StickyCTA,
  ExitIntentPopup,
  UrgencyBanner,
  ProgressIndicator,
} from '@/components/landing-pages/ahit-alternative';
import { pageMetadata, ahitFAQs } from '@/data/landing-pages/ahit-alternative';

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  keywords: [
    'AHIT alternative',
    'AHIT vs TIA',
    'Texas home inspector training',
    'TREC approved courses',
    'home inspector school comparison',
    'AHIT competitor',
    'best home inspector school Texas',
  ],
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    type: 'website',
    url: pageMetadata.url,
    siteName: 'The Inspection Academy',
  },
  alternates: {
    canonical: pageMetadata.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// FAQ Schema for rich results
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ahitFAQs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function AHITAlternativePage() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Progress indicator */}
      <ProgressIndicator />

      {/* Urgency banner */}
      <UrgencyBanner />

      {/* Optimized section order for conversion */}
      <Suspense fallback={null}>
        <AHITHero />
      </Suspense>
      <ComparisonTable />
      <TestimonialsSection />
      <PassRateStats />
      <CostOfFailureSection />
      <FiveReasons />
      <FAQSection />
      <FinalCTA />

      {/* Sticky mobile CTA */}
      <StickyCTA />

      {/* Exit intent popup (desktop only) */}
      <ExitIntentPopup />
    </>
  );
}
