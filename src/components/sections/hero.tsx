import Link from 'next/link';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container, Section } from '@/components/layout';
import { SITE_CONFIG } from '@/lib/constants';

const heroFeatures = [
  'TREC Approved',
  '0% Financing',
  'Multi-language Support',
];

export function Hero() {
  return (
    <Section className="pt-8 md:pt-16 pb-16 md:pb-24" background="white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* TREC Badge */}
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-1.5">
            TREC Approved Provider #{SITE_CONFIG.trecNumber}
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Pass Your Texas Home Inspector{' '}
            <span className="text-primary">Exam on the First Try</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We help aspiring home inspectors pass their licensing exams using proven
            Adult Learning Theory—not boring lectures that don&apos;t stick.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild>
              <Link href="/courses">
                Start Your Training
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={SITE_CONFIG.links.scheduleCall} target="_blank" rel="noopener noreferrer">
                Schedule a Meeting
              </a>
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {heroFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center text-sm text-gray-600"
              >
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
