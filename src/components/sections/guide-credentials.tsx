import Image from 'next/image';
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
        <div className="max-w-6xl mx-auto">
          {/* Headlines */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              We Know What to Teach You Because We&apos;re Inspectors.
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              We Know How to Teach You Because We&apos;re Educators.
            </h2>
          </div>

          {/* Two-column: Image + Benefits */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-10">
            {/* Instructor Image */}
            <div className="relative w-full max-w-xs md:max-w-sm flex-shrink-0">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/matt-teaching-portrait.png"
                  alt="Matt teaching home inspection concepts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 320px, 384px"
                />
                {/* Gradient overlay at bottom for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-bold text-lg">Matthew Warner</p>
                  <p className="text-sm text-white/90">
                    Master&apos;s in Education &bull; Licensed TX Inspector
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="flex-1">
              <div className="bg-gray-50 rounded-2xl p-8">
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
              <div className="mt-6 space-y-3">
                <p className="text-lg text-gray-600">
                  Most schools were built by inspectors who know their trade but don&apos;t know how to teach it.
                </p>
                <p className="text-lg text-gray-900 font-medium">
                  We built TIA the other way around—led by an educator with a Master&apos;s degree in Education who&apos;s also a licensed professional inspector in Texas.
                </p>
                <p className="text-xl text-primary font-bold">
                  We built The Inspection Academy for one reason: to make sure you pass the exam on your first try.
                </p>
              </div>
            </div>
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
