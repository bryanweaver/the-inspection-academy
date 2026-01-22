'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from './container';
import { SITE_CONFIG } from '@/lib/constants';

export function LandingPageHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">The Inspection Academy</span>
          </Link>

          {/* Phone + CTA */}
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="hidden sm:flex items-center text-sm text-gray-600 hover:text-primary transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" />
              {SITE_CONFIG.phone}
            </a>
            <Button asChild>
              <a href={SITE_CONFIG.links.scheduleCall} target="_blank" rel="noopener noreferrer">
                Schedule a Meeting
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
