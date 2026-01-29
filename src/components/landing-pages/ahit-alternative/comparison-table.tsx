'use client';

import Link from 'next/link';
import { Check, X, ExternalLink, Award, ArrowRight } from 'lucide-react';
import { Section, Container } from '@/components/layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  comparisonFeatures,
  comparisonNote,
  comparisonNoteLink,
  comparisonInsight,
} from '@/data/landing-pages/ahit-alternative';
import { SITE_CONFIG } from '@/lib/constants';
import { trackOutboundClick, trackEnrollClick } from '@/lib/analytics';

function FeatureValue({ value, isWinner, isGuarantee }: { value: string | boolean; isWinner?: boolean; isGuarantee?: boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="h-5 w-5 text-green-500" />
    ) : (
      <X className="h-5 w-5 text-red-500" />
    );
  }

  if (isGuarantee && isWinner) {
    return (
      <span className="font-semibold text-green-600">
        <Link href="/money-back-guarantee" className="terms-link">{value}</Link>
        <Link href="/money-back-guarantee" className="text-green-600 hover:text-green-700 align-super text-xs ml-0.5">*</Link>
      </span>
    );
  }

  return <span className={isWinner ? 'font-semibold text-green-600' : ''}>{value}</span>;
}

function FeatureLabel({ label, isGuarantee }: { label: string; isGuarantee?: boolean }) {
  if (isGuarantee) {
    return (
      <>
        <Link href="/money-back-guarantee" className="terms-link">{label}</Link>
        <Link href="/money-back-guarantee" className="text-green-600 hover:text-green-700 align-super text-xs ml-0.5">*</Link>
      </>
    );
  }
  return <>{label}</>;
}

export function ComparisonTable() {
  const handleSourceClick = () => {
    trackOutboundClick(comparisonNoteLink, comparisonNote);
  };

  const handleEnrollClick = () => {
    trackEnrollClick('comparison_table');
  };

  return (
    <Section background="gray" id="comparison-table">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            TIA vs AHIT - Side-by-Side Comparison
          </h2>

          {/* Card wrapper with relative positioning for badge */}
          <div className="relative">
            {/* Recommended Badge - Positioned to overlap top-right of TIA column */}
            <div className="hidden md:block absolute -top-3 right-[16.5%] transform translate-x-1/2 z-10">
              <Badge className="bg-green-500 text-white shadow-lg px-3 py-1">
                <Award className="h-3 w-3 mr-1" />
                RECOMMENDED
              </Badge>
            </div>

            <Card className="overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900 bg-gray-50 w-1/3">
                      Feature
                    </th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-500 bg-gray-50 w-1/3">
                      AHIT Advanced
                    </th>
                    <th className="text-center py-4 px-4 font-semibold bg-green-50 border-l-2 border-green-500 w-1/3">
                      <span className="text-green-700">The Inspection Academy</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => {
                    const isGuarantee = feature.feature.toLowerCase().includes('guarantee');
                    return (
                      <tr
                        key={feature.feature}
                        className={`border-b last:border-b-0 ${
                          feature.highlight ? 'bg-green-50/50' : ''
                        }`}
                      >
                        <td className={`py-4 px-6 text-gray-700 ${feature.highlight ? 'font-semibold' : ''}`}>
                          <FeatureLabel label={feature.feature} isGuarantee={isGuarantee} />
                        </td>
                        <td className="py-4 px-6 text-center text-gray-600">
                          <div className="flex justify-center">
                            <FeatureValue value={feature.ahit} />
                          </div>
                        </td>
                        <td className={`py-4 px-4 text-center border-l-2 border-green-500 bg-green-50/30`}>
                          <div className="flex justify-center">
                            <FeatureValue value={feature.tia} isWinner={feature.highlight} isGuarantee={isGuarantee} />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden">
              {/* Mobile Recommended Badge */}
              <div className="bg-green-500 text-white text-center py-2 text-sm font-medium">
                <Award className="h-4 w-4 inline mr-1" />
                TIA is the Recommended Choice
              </div>
              <div className="divide-y">
                {comparisonFeatures.map((feature) => {
                  const isGuarantee = feature.feature.toLowerCase().includes('guarantee');
                  return (
                    <div
                      key={feature.feature}
                      className={`p-4 ${feature.highlight ? 'bg-green-50' : ''}`}
                    >
                      <div className="font-medium text-gray-900 mb-3">
                        <FeatureLabel label={feature.feature} isGuarantee={isGuarantee} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-2 bg-gray-50 rounded">
                          <div className="text-xs text-gray-500 mb-1">AHIT</div>
                          <div className="flex justify-center">
                            <FeatureValue value={feature.ahit} />
                          </div>
                        </div>
                        <div className="text-center p-2 bg-green-50 rounded border border-green-200">
                          <div className="text-xs text-green-600 font-medium mb-1">TIA</div>
                          <div className="flex justify-center">
                            <FeatureValue value={feature.tia} isWinner={feature.highlight} isGuarantee={isGuarantee} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
          </div>

          {/* Source Link */}
          <div className="mt-4 text-center">
            <a
              href={comparisonNoteLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSourceClick}
              className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors"
            >
              {comparisonNote}
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>

          {/* Key Insight */}
          <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-gray-700 text-center">
              <span className="font-semibold">Key Insight:</span>{' '}
              {comparisonInsight.replace('Key Insight: ', '')}
            </p>
          </div>

          {/* Inline CTA */}
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Ready to start with the higher-performing school?
            </p>
            <Button size="lg" asChild onClick={handleEnrollClick}>
              <a
                href={SITE_CONFIG.links.courseCatalog}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Training Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
