import Link from 'next/link';
import { Phone, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/layout';
import { SITE_CONFIG } from '@/lib/constants';

export function CTA() {
  return (
    <Section className="bg-primary">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your New Career?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Pass your exam. Get licensed. Build the life you want.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/courses">
                Start Your Training
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
              <a href={SITE_CONFIG.links.scheduleCall} target="_blank" rel="noopener noreferrer">
                Schedule a Free Call
              </a>
            </Button>
          </div>

          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="inline-flex items-center text-white/90 hover:text-white transition-colors"
          >
            <Phone className="mr-2 h-5 w-5" />
            Questions? Call us: {SITE_CONFIG.phone}
          </a>
        </div>
      </Container>
    </Section>
  );
}
