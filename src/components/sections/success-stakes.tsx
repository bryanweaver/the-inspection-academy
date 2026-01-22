import { CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/layout';
import { SITE_CONFIG } from '@/lib/constants';

const successOutcomes = [
  'You pass your licensing exams on the first try',
  'You become a licensed home inspector',
  'You are your own boss',
  'You set your own schedule',
  'You make great money',
  'You build a business you\'re proud of',
  'You help families make educated decisions about the homes they are considering purchasing',
];

export function SuccessStakes() {
  return (
    <Section background="white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Pass with Confidence. Launch Your Career with Pride.
            </h2>
            <p className="text-xl text-gray-600">
              Here&apos;s what happens when you choose the right school:
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 mb-8">
            <ul className="grid md:grid-cols-2 gap-4">
              {successOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-900 font-bold mb-6">
              That&apos;s not just passing an exam. That is starting a brand new life.
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
