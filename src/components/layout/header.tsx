'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Container } from './container';
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { trackScheduleCall, trackEvent } from '@/lib/analytics';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScheduleClick = () => {
    trackScheduleCall('header');
  };

  const handlePhoneClick = () => {
    trackEvent('phone_call', { location: 'header' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-blue.webp"
              alt="The Inspection Academy"
              width={400}
              height={200}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              onClick={handlePhoneClick}
              className="flex items-center text-sm text-gray-600 hover:text-primary"
            >
              <Phone className="mr-2 h-4 w-4" />
              {SITE_CONFIG.phone}
            </a>
            <Button asChild onClick={handleScheduleClick}>
              <a href={SITE_CONFIG.links.scheduleCall} target="_blank" rel="noopener noreferrer">
                Book an Online Meeting
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <hr className="my-4" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  onClick={handlePhoneClick}
                  className="flex items-center text-lg text-gray-600 hover:text-primary"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {SITE_CONFIG.phone}
                </a>
                <Button asChild className="w-full mt-4" onClick={handleScheduleClick}>
                  <a href={SITE_CONFIG.links.scheduleCall} target="_blank" rel="noopener noreferrer">
                    Book an Online Meeting
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
