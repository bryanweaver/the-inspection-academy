import Link from 'next/link';
import { BookOpen, Target, GraduationCap, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/layout';

const steps = [
  {
    number: '1',
    icon: BookOpen,
    title: 'Complete Your Courses',
    description: 'Active learning with built-in activities',
  },
  {
    number: '2',
    icon: Target,
    title: 'Use Bulletproof Test Prep',
    description: 'Adaptive tech targets YOUR weak areas',
  },
  {
    number: '3',
    icon: GraduationCap,
    title: 'Pass & Launch Your Business',
    description: 'First-time pass and start your new career',
  },
];

export function HowItWorks() {
  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How TIA Gets You Licensed
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gray-200" />
              )}

              <div className="text-center">
                {/* Step Number & Icon */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-2xl mb-6">
                  <step.icon className="h-10 w-10 text-primary" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/how-it-works">
              See How It Works
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
