import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { Container } from './container';
import { SITE_CONFIG } from '@/lib/constants';

export function LandingPageFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand + TREC */}
          <div>
            <p className="text-lg font-semibold text-white mb-1">
              The Inspection Academy
            </p>
            <p className="text-sm text-gray-400">
              TREC Approved QE Provider #{SITE_CONFIG.trecNumber}
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center text-sm hover:text-white transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" />
              {SITE_CONFIG.phone}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center text-sm hover:text-white transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" />
              {SITE_CONFIG.email}
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {currentYear} The Inspection Academy LLC. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
