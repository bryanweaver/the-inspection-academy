'use client';

import { useEffect, useState } from 'react';
import { X, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';
import { trackEvent } from '@/lib/analytics';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    const shown = sessionStorage.getItem('exitIntentShown');
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves toward top of viewport
      if (e.clientY <= 10 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
        trackEvent('page_view', { exit_intent_shown: true });
      }
    };

    // Only add listener on desktop
    if (window.innerWidth > 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleScheduleClick = () => {
    trackEvent('schedule_call', { source: 'exit_intent' });
    setIsOpen(false);
  };

  const handleCallClick = () => {
    trackEvent('cta_click', {
      button_text: 'Call Now',
      button_location: 'exit_intent',
      button_variant: 'secondary'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-8 w-8 text-primary" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Still Comparing Schools?
          </h3>

          <p className="text-gray-600 mb-6">
            Get your questions answered in a free 15-minute call. No pressure, just honest advice about which school is right for you.
          </p>

          {/* Stats reminder */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">67%</div>
                <div className="text-xs text-gray-500">TIA Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">51%</div>
                <div className="text-xs text-gray-500">AHIT Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">✓</div>
                <div className="text-xs text-gray-500">Books Included</div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            <Button className="w-full" size="lg" asChild onClick={handleScheduleClick}>
              <a
                href={SITE_CONFIG.links.scheduleCall}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Free Meeting
              </a>
            </Button>

            <Button
              variant="outline"
              className="w-full"
              size="lg"
              asChild
              onClick={handleCallClick}
            >
              <a href={`tel:${SITE_CONFIG.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now: {SITE_CONFIG.phone}
              </a>
            </Button>
          </div>

          <button
            onClick={handleClose}
            className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            No thanks, I&apos;ll keep researching
          </button>
        </div>
      </div>
    </div>
  );
}
