import Link from 'next/link';
import { Phone, Mail, Calendar } from 'lucide-react';
import { Container } from './container';
import { SITE_CONFIG, FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <Link href="/" className="text-xl font-bold text-white">
                The Inspection Academy
              </Link>
              <p className="mt-4 text-sm text-gray-400">
                TREC Approved Provider
              </p>
              <p className="text-sm text-gray-400">
                #{SITE_CONFIG.trecNumber}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Contact
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center text-sm hover:text-white transition-colors"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center text-sm hover:text-white transition-colors"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.links.scheduleCall}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm hover:text-white transition-colors"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book an Online Meeting
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} The Inspection Academy LLC. All rights reserved.
            </p>
                      </div>
        </div>
      </Container>
    </footer>
  );
}
