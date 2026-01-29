'use client';

import Link from 'next/link';
import { Shield, ChevronRight } from 'lucide-react';
import { Section, Container } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { guaranteeContent } from '@/data/landing-pages/ahit-alternative';
import { SITE_CONFIG } from '@/lib/constants';
import { trackEnrollClick } from '@/lib/analytics';

export function GuaranteeSection() {
  const handleEnrollClick = () => {
    trackEnrollClick('guarantee_section');
  };

  return (
    <Section background="gray">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border-2 border-green-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <Link href={guaranteeContent.termsLink} className="terms-link">
                  {guaranteeContent.title}
                </Link>
                <Link href={guaranteeContent.termsLink} className="text-green-600 hover:text-green-700 align-super text-lg ml-0.5">*</Link>
              </h2>
              <p className="text-xl text-gray-700">
                Pass your licensing exam on your first attempt — or{' '}
                <Link href={guaranteeContent.termsLink} className="terms-link">
                  we refund every dollar you paid
                </Link>
                <Link href={guaranteeContent.termsLink} className="text-green-600 hover:text-green-700 align-super text-sm">*</Link>
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 mb-4">
                {guaranteeContent.details}
              </p>
              <p className="text-gray-900 font-semibold">
                No games. Just a{' '}
                <Link href={guaranteeContent.termsLink} className="terms-link">
                  guarantee backed by real results
                </Link>
                <Link href={guaranteeContent.termsLink} className="text-green-600 hover:text-green-700 align-super text-sm">*</Link>
              </p>
            </div>

            <div className="text-center mb-8">
              <p className="text-lg text-gray-600">
                {guaranteeContent.comparison}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href={guaranteeContent.termsLink}>
                  {guaranteeContent.ctaSecondary}
                </Link>
              </Button>
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
                asChild
                onClick={handleEnrollClick}
              >
                <a
                  href={SITE_CONFIG.links.courseCatalog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {guaranteeContent.ctaPrimary}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
