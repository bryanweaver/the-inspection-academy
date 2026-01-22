'use client';

import Link from 'next/link';
import { CheckCircle, Award, GraduationCap, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/layout';
import { SITE_CONFIG } from '@/lib/constants';
import { trackEnrollClick, trackScheduleCall, trackEvent } from '@/lib/analytics';

const socialProofBadges = [
  {
    icon: Shield,
    text: `TREC-Approved Provider #${SITE_CONFIG.trecNumber}`,
  },
  {
    icon: Award,
    text: '#2 Highest Pass Rate in Texas - 67%',
    highlight: true,
  },
  {
    icon: GraduationCap,
    text: "Led by Master's-level Educator & Licensed TX Inspector",
  },
  {
    icon: Zap,
    text: 'Built on Adult Learning Theory—Not Information Delivery',
  },
];

export function Hero() {
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
    <Section className="pt-8 md:pt-16 pb-16 md:pb-24" background="white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Pass Your Texas Home Inspector{' '}
            <span className="text-primary">Exam on the First Try</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto">
            We help aspiring home inspectors in Texas pass their licensing exams on their first try.
          </p>

          {/* Problem Statement */}
          <div className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto space-y-4">
            <p>You&apos;ve done your research.</p>
            <p>
              You know that roughly 50% of aspiring inspectors fail their licensing exams on their
              first attempt...
            </p>
            <p className="font-medium">and some fail multiple times.</p>
            <p>You&apos;re not looking for the cheapest, fastest, or easiest school.</p>
            <p className="text-gray-900 font-semibold">
              You&apos;re looking for the school that will actually prepare you to pass.
            </p>
          </div>

          {/* Social Proof Badges */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8 max-w-3xl mx-auto">
            {socialProofBadges.map((badge) => (
              <div
                key={badge.text}
                className={`flex items-center justify-center text-sm px-4 py-2.5 rounded-lg ${
                  badge.highlight
                    ? 'bg-amber-100 text-amber-800 font-semibold'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <badge.icon className={`mr-2 h-4 w-4 flex-shrink-0 ${badge.highlight ? 'text-amber-600' : 'text-primary'}`} />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

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
        </div>
      </Container>
    </Section>
  );
}
