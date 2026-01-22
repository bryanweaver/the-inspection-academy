import Link from 'next/link';
import { CreditCard, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/layout';

export function SubscriptionCallout() {
  return (
    <Section background="gray">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <CreditCard className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            We&apos;re Proud to Introduce Our New &quot;Subscription&quot; Payment Plans!
          </h2>

          <div className="flex flex-wrap justify-center gap-4 my-6">
            <span className="bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full">
              12 Month Term
            </span>
            <span className="bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full">
              18 Month Term
            </span>
            <span className="bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full">
              24 Month Term
            </span>
          </div>

          <div className="bg-amber-100 border border-amber-200 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-amber-800 mb-2">
              Our Subscriptions Are 0% Interest!
            </h3>
            <p className="text-amber-700">
              No credit check required. Pay monthly and cancel anytime.
            </p>
          </div>

          <Button size="lg" variant="outline" asChild>
            <Link href="/subscriptions">
              View Subscription Options
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
