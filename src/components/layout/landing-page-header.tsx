'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from './container';
import { SITE_CONFIG } from '@/lib/constants';
import { trackEvent } from '@/lib/analytics';

export function LandingPageHeader() {
  const handlePhoneClick = () => {
    trackEvent('phone_call', { location: 'header' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">The Inspection Academy</span>
          </Link>

          {/* Phone CTA */}
          <Button asChild onClick={handlePhoneClick}>
            <a href={`tel:${SITE_CONFIG.phone}`}>
              <Phone className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">{SITE_CONFIG.phone}</span>
              <span className="sm:hidden">Call Now</span>
            </a>
          </Button>
        </div>
      </Container>
    </header>
  );
}
