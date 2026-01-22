'use client';

import { useSearchParams } from 'next/navigation';
import { ExternalLink, Phone, Shield, Award, Zap, ChevronDown } from 'lucide-react';
import { Section, Container } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { heroContent, headlineVariants } from '@/data/landing-pages/ahit-alternative';
import { SITE_CONFIG } from '@/lib/constants';
import { trackEnrollClick, trackScheduleCall, trackOutboundClick, trackEvent } from '@/lib/analytics';

const iconMap = {
  Shield,
  Award,
  Zap,
};

type VariantKey = 'control' | 'variantA' | 'variantB';

export function AHITHero() {
  const searchParams = useSearchParams();

  // A/B test: Get variant from URL param (?variant=A or ?variant=B)
  const variantParam = searchParams.get('variant');
  let variant: VariantKey = 'control';

  if (variantParam === 'A') {
    variant = 'variantA';
  } else if (variantParam === 'B') {
    variant = 'variantB';
  }

  const headlines = headlineVariants[variant];

  const handleEnrollClick = () => {
    trackEnrollClick('hero');
    trackEvent('cta_click', { variant, button_location: 'hero' });
  };

  const handleScheduleClick = () => {
    trackScheduleCall('hero');
  };

  const handleBadgeClick = () => {
    trackOutboundClick(heroContent.badgeLink, heroContent.badge);
  };

  return (
    <Section className="pt-8 md:pt-16 pb-12 md:pb-20" background="white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <a
            href={heroContent.badgeLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleBadgeClick}
            className="inline-block mb-6"
          >
            <Badge
              variant="secondary"
              className="text-sm px-4 py-1.5 hover:bg-secondary/80 transition-colors cursor-pointer"
            >
              {heroContent.badge}
              <ExternalLink className="ml-2 h-3 w-3" />
            </Badge>
          </a>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4">
            {headlines.h1}{' '}
            <span className="text-primary">{headlines.h1Accent}</span>
          </h1>

          {/* H2 / Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {headlines.h2}
          </p>

          {/* Social Proof Badges */}
          <div className="flex flex-col gap-3 mb-8 max-w-2xl mx-auto">
            {heroContent.socialProofBadges.map((badge, index) => {
              const Icon = iconMap[badge.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className={`flex items-center justify-center text-sm px-4 py-2.5 rounded-lg ${
                    badge.highlight
                      ? 'bg-amber-100 text-amber-800 font-semibold'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  <Icon className={`mr-2 h-4 w-4 flex-shrink-0 ${badge.highlight ? 'text-amber-600' : 'text-primary'}`} />
                  <span>{badge.text}</span>
                </div>
              );
            })}
          </div>

          {/* Quick Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
            {/* AHIT Card */}
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {heroContent.quickComparison.ahit.name}
              </h3>
              <div className="text-2xl font-bold text-gray-900">
                {heroContent.quickComparison.ahit.price}
              </div>
              <p className="text-sm text-gray-500 mb-2">
                {heroContent.quickComparison.ahit.note}
              </p>
              <p className="text-red-600 font-medium">
                {heroContent.quickComparison.ahit.passRate}
              </p>
            </div>

            {/* TIA Card */}
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  RECOMMENDED
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {heroContent.quickComparison.tia.name}
              </h3>
              <div className="text-2xl font-bold text-gray-900">
                {heroContent.quickComparison.tia.price}
              </div>
              <p className="text-sm text-gray-500 mb-2">
                {heroContent.quickComparison.tia.note}
              </p>
              <p className="text-green-600 font-bold">
                {heroContent.quickComparison.tia.passRate}
              </p>
            </div>
          </div>

          {/* Advantage Text */}
          <p className="text-lg font-semibold text-gray-900 mb-8">
            {heroContent.quickComparison.advantage}
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8"
              asChild
              onClick={handleEnrollClick}
            >
              <a
                href={SITE_CONFIG.links.courseCatalog}
                target="_blank"
                rel="noopener noreferrer"
              >
                {heroContent.ctaPrimary}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild onClick={handleScheduleClick}>
              <a
                href={SITE_CONFIG.links.scheduleCall}
                target="_blank"
                rel="noopener noreferrer"
              >
                {heroContent.ctaSecondary}
              </a>
            </Button>
          </div>

          {/* Scroll CTA */}
          <button
            onClick={() => {
              document.getElementById('comparison-table')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium mt-6 transition-colors"
          >
            {heroContent.scrollCta}
            <ChevronDown className="ml-2 h-4 w-4 animate-bounce" />
          </button>

          {/* Trust Badge */}
          <p className="text-sm text-gray-500 mt-4">{heroContent.trustBadge}</p>

          {/* Phone Number */}
          <div className="mt-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now: <span className="font-semibold ml-1">{SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
