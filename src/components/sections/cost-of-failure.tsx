import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/layout';

const costs = [
  { amount: '$2,000-$4,000', description: 'Inadequate training' },
  { amount: '$200-$600', description: 'Exam retakes' },
  { amount: '$100-$300', description: 'Emergency test prep materials' },
  { amount: '$3,000-$8,000', description: 'Lost income PER MONTH' },
];

const intangibleCosts = [
  'Time with family',
  'Confidence in your abilities',
  'Your dream of being your own boss',
];

export function CostOfFailure() {
  return (
    <Section background="gray">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The True Cost of Choosing the Wrong School
            </h2>
            <p className="text-xl text-gray-600">
              Failing the exam doesn&apos;t just cost you $200.{' '}
              <strong>It costs you everything.</strong>
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
            <ul className="space-y-4 mb-6">
              {costs.map((cost, index) => (
                <li key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <span className="text-xl font-bold text-red-600">{cost.amount}</span>
                  <span className="text-gray-600">{cost.description}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">Priceless</span>
                <ul className="text-right text-gray-600">
                  {intangibleCosts.map((cost, index) => (
                    <li key={index}>{cost}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Don&apos;t gamble on your future. Invest in training that&apos;s designed to help you pass.
            </p>
            <Button size="lg" asChild>
              <Link href="/courses">
                Start Your Training Today
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
