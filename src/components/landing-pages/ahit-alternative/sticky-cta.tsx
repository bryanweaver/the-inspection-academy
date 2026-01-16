'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { stickyCTAContent } from '@/data/landing-pages/ahit-alternative';
import { SITE_CONFIG } from '@/lib/constants';
import { trackEnrollClick, trackEvent } from '@/lib/analytics';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      const shouldShow = window.scrollY > 500;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnrollClick = () => {
    trackEnrollClick('sticky_cta');
  };

  const handleCallClick = () => {
    trackEvent('phone_call', { location: 'sticky_cta' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white border-t shadow-lg px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Call Button */}
          <Button
            size="sm"
            variant="outline"
            className="flex-shrink-0 px-3"
            asChild
            onClick={handleCallClick}
          >
            <a href={`tel:${SITE_CONFIG.phone}`}>
              <Phone className="h-4 w-4" />
            </a>
          </Button>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-gray-900 text-sm">
              {stickyCTAContent.text}
            </div>
            <div className="text-xs text-gray-500 truncate">
              {stickyCTAContent.subtext}
            </div>
          </div>

          {/* Enroll Button */}
          <Button size="sm" className="flex-shrink-0" asChild onClick={handleEnrollClick}>
            <a
              href={SITE_CONFIG.links.courseCatalog}
              target="_blank"
              rel="noopener noreferrer"
            >
              {stickyCTAContent.buttonText}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
