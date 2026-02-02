'use client';

import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';
import { trackEnrollClick, trackScheduleCall, trackEvent } from '@/lib/analytics';

export function HeroActions() {
  const handleEnrollClick = () => {
    trackEnrollClick('hero');
  };

  const handleScheduleClick = () => {
    trackScheduleCall('hero');
  };

  const handlePhoneClick = () => {
    trackEvent('phone_call', { location: 'hero' });
  };

  return (
    <>
      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <Button
          size="lg"
          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
          asChild
          onClick={handleEnrollClick}
        >
          <a href={SITE_CONFIG.links.courseCatalog} target="_blank" rel="noopener noreferrer">
            Start Your Training
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild onClick={handleScheduleClick}>
          <a href={SITE_CONFIG.links.scheduleCall} target="_blank" rel="noopener noreferrer">
            Book an Online Meeting
          </a>
        </Button>
      </div>

      {/* Phone CTA */}
      <a
        href={`tel:${SITE_CONFIG.phone}`}
        onClick={handlePhoneClick}
        className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
      >
        Call Now: {SITE_CONFIG.phone}
      </a>
    </>
  );
}
