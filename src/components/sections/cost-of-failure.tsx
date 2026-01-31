import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/layout';
import { SITE_CONFIG } from '@/lib/constants';

const costs = [
  { amount: '$200', description: 'For every failed exam attempt' },
  { amount: '$300-$800', description: 'Per class in TREC-required retake courses after a 3rd failed attempt' },
  { amount: '$50-$200', description: 'On additional study aids like practice tests and flashcards' },
  { amount: '3-6 months', description: 'Postponing your inspection career', highlight: true },
];

export function CostOfFailure() {
  return (
    <Section background="gray">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Thousands Spent. Months Lost.
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-4">
              All Because You Chose a School That Doesn&apos;t Teach.
            </h2>
            <p className="text-xl text-gray-700">
              Failing the exam doesn&apos;t just cost you $200.{' '}
              <strong>It costs you everything.</strong>
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              The Financial Toll Adds Up Fast:
            </h3>
            <ul className="space-y-4 mb-8">
              {costs.map((cost, index) => (
                <li
                  key={index}
                  className={`flex items-start justify-between py-3 border-b border-gray-100 last:border-0 ${
                    cost.highlight ? 'bg-red-50 -mx-4 px-4 rounded-lg border-0' : ''
                  }`}
                >
                  <span className={`text-xl font-bold ${cost.highlight ? 'text-red-600' : 'text-red-500'}`}>
                    {cost.amount}
                  </span>
                  <span className={`text-right ml-4 ${cost.highlight ? 'text-red-800 font-medium' : 'text-gray-600'}`}>
                    {cost.description}
                  </span>
                </li>
              ))}
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">The real cost of choosing the wrong school:</h4>
              <p className="text-gray-700">
                If you fail twice before passing, that&apos;s <strong>$400+ in exam fees</strong>, another <strong>$50-200 in study aids</strong>, and you&apos;re <strong>3-6 months behind</strong> on launching your career. Fail three times? Add <strong>$300-800 per required retake course</strong>.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6 font-semibold">
              Don&apos;t gamble on your future. Invest in training that&apos;s designed to help you pass.
            </p>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold" asChild>
              <a href={SITE_CONFIG.links.courseCatalog} target="_blank" rel="noopener noreferrer">
                Start Your Training Today
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
