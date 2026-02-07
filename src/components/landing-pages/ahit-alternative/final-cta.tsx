'use client';

import Link from 'next/link';
import { Phone, CheckCircle, ChevronRight } from 'lucide-react';
import { Section, Container } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { finalCTAContent } from '@/data/landing-pages/ahit-alternative';
import { SITE_CONFIG } from '@/lib/constants';
import { trackEnrollClick, trackScheduleCall, trackEvent } from '@/lib/analytics';

export function FinalCTA() {
  const handleEnrollClick = () => {
    trackEnrollClick('final_cta');
  };

  const handleScheduleClick = () => {
    trackScheduleCall('final_cta');
  };

  const handlePhoneClick = () => {
    trackEvent('phone_call', { location: 'final_cta' });
  };

  return (
    <Section className="bg-primary">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {finalCTAContent.title}
          </h2>

          <p className="text-xl text-white/90 mb-8">
            {finalCTAContent.description}
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {finalCTAContent.benefits.map((benefit, index) => {
              const isGuarantee = benefit.toLowerCase().includes('guarantee');
              return (
                <div
                  key={index}
                  className="flex items-center bg-white/10 text-white text-sm px-4 py-2 rounded-full"
                >
                  <CheckCircle className="mr-2 h-4 w-4 text-green-400" />
                  {isGuarantee ? (
                    <>
                      <Link href="/money-back-guarantee" className="underline decoration-dotted decoration-white/40 underline-offset-2 hover:decoration-white/80">{benefit}</Link>
                      <Link href="/money-back-guarantee" className="text-green-400 hover:text-green-300 align-super text-xs ml-0.5">*</Link>
                    </>
                  ) : (
                    benefit
                  )}
                </div>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
              asChild
              onClick={handleEnrollClick}
            >
              <a href={SITE_CONFIG.links.courseCatalog} target="_blank" rel="noopener noreferrer">
                {finalCTAContent.ctaPrimary}
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
              asChild
              onClick={handleScheduleClick}
            >
              <a href={SITE_CONFIG.links.scheduleCall} target="_blank" rel="noopener noreferrer">
                {finalCTAContent.ctaSecondary}
              </a>
            </Button>
          </div>

          {/* Phone */}
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center text-white/90 hover:text-white transition-colors text-lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now: {SITE_CONFIG.phone}
          </a>
        </div>
      </Container>
    </Section>
  );
}
