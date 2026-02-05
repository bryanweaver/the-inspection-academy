'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Container } from './container';
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { trackEvent } from '@/lib/analytics';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handlePhoneClick = () => {
    trackEvent('phone_call', { location: 'header' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
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
            <Button asChild onClick={handlePhoneClick}>
              <a href={`tel:${SITE_CONFIG.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                {SITE_CONFIG.phone}
              </a>
            </Button>
          </div>

          {/* Mobile CTA + Menu */}
          <div className="flex md:hidden items-center gap-2">
            <Button asChild onClick={handlePhoneClick}>
              <a href={`tel:${SITE_CONFIG.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] px-6">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
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
                <Button asChild className="w-full" onClick={handlePhoneClick}>
                  <a href={`tel:${SITE_CONFIG.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {SITE_CONFIG.phone}
                  </a>
                </Button>
              </nav>
            </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
