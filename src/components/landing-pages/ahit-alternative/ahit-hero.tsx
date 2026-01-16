'use client';

import { useSearchParams } from 'next/navigation';
import { ExternalLink, Users, Phone } from 'lucide-react';
import { Section, Container } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { heroContent, headlineVariants } from '@/data/landing-pages/ahit-alternative';
import { SITE_CONFIG } from '@/lib/constants';
import { trackEnrollClick, trackScheduleCall, trackOutboundClick, trackEvent } from '@/lib/analytics';

const statColorClasses = {
  success: 'bg-green-100 text-green-700 border-green-200',
  primary: 'bg-primary/10 text-primary border-primary/20',
  danger: 'bg-red-100 text-red-700 border-red-200',
};

type VariantKey = 'control' | 'variantA' | 'variantB';

export function AHITHero() {
  const searchParams = useSearchParams();

  // A/B test: Get variant from URL param (?variant=A or ?variant=B)
  // Default to control if not specified
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

          {/* H1 - A/B Tested */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4">
            {headlines.h1}{' '}
            <span className="text-primary">{headlines.h1Accent}</span>
          </h1>

          {/* H2 - A/B Tested */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
            {headlines.h2}
          </h2>

          {/* Stat Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {heroContent.statBadges.map((stat, index) => (
              <div
                key={index}
                className={`px-5 py-3 rounded-xl border ${statColorClasses[stat.color as keyof typeof statColorClasses]}`}
              >
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-xs uppercase tracking-wide opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Description - Shorter */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {heroContent.description.split('\n\n')[0]}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <div className="flex flex-col items-center">
              <Button size="lg" className="w-full sm:w-auto px-8" asChild onClick={handleEnrollClick}>
                <a
                  href={SITE_CONFIG.links.courseCatalog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {heroContent.ctaPrimary}
                </a>
              </Button>
              <span className="text-xs text-gray-500 mt-2">
                {heroContent.ctaPrimarySubtext}
              </span>
            </div>
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

          {/* Social Proof */}
          <div className="flex items-center justify-center text-sm text-gray-500 mt-6">
            <Users className="h-4 w-4 mr-2" />
            {heroContent.socialProof}
          </div>

          {/* Phone Number */}
          <div className="mt-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Questions? Call us: <span className="font-semibold ml-1">{SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
