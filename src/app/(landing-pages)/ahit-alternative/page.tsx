import { Suspense } from 'react';
import type { Metadata } from 'next';
import {
  AHITHero,
  ComparisonTable,
  FieldExperienceSection,
  PassRateStats,
  CostOfFailureSection,
  SixReasons,
  GuaranteeSection,
  TexasKeywordsSection,
  FAQSection,
  FinalCTA,
  StickyCTA,
  ExitIntentPopup,
  ProgressIndicator,
  LeadCaptureForm,
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
    'AHIT Texas',
    'home inspection school Houston',
    'home inspection school Dallas',
    'home inspection school San Antonio',
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

      {/* Optimized section order for conversion */}
      <Suspense fallback={null}>
        <AHITHero />
      </Suspense>
      <ComparisonTable />
      <FieldExperienceSection />
      <PassRateStats />
      <CostOfFailureSection />
      <LeadCaptureForm />
      <SixReasons />
      <GuaranteeSection />
      <TexasKeywordsSection />
      <FAQSection />
      <FinalCTA />

      {/* Sticky mobile CTA */}
      <StickyCTA />

      {/* Exit intent popup (desktop only) */}
      <ExitIntentPopup />
    </>
  );
}
