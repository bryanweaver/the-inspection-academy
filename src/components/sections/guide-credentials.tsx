import Link from 'next/link';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/layout';

const benefits = [
  'You get courses designed using Adult Learning Theory—the science of how people actually learn and retain information for high-stakes exams.',
  'You get front-end loaded lessons that promote active learning.',
  'You get adaptive technology that identifies YOUR weak spots and helps you master them before exam day.',
];

export function GuideCredentials() {
  return (
    <Section background="white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Headlines */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              We Know What to Teach You Because We&apos;re Inspectors.
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              We Know How to Teach You Because We&apos;re Educators.
            </h2>
          </div>

          {/* What that means */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Here&apos;s what that means for you:
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Differentiator */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 mb-4">
              Most schools were built by inspectors who know their trade but don&apos;t know how to teach it.
            </p>
            <p className="text-lg text-gray-900 font-medium mb-4">
              We built TIA the other way around—led by an educator with a Master&apos;s degree in Education who&apos;s also a licensed professional inspector in Texas.
            </p>
            <p className="text-xl text-primary font-bold">
              We built The Inspection Academy for one reason: to make sure you pass the exam on your first try.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/about">
                Learn More About Our Approach
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
