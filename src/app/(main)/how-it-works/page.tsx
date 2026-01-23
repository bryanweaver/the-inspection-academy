import Link from 'next/link';
import { BookOpen, Target, GraduationCap, Brain, Users, BarChart, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Container, Section } from '@/components/layout';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'How It Works | The Inspection Academy',
  description: 'Learn how our Adult Learning Theory approach helps you pass your Texas home inspector exam on the first try.',
  openGraph: {
    title: 'How It Works | The Inspection Academy',
    description: 'Our proven 3-step process using Adult Learning Theory helps you pass your Texas home inspector exam.',
    url: 'https://theinspectionacademy.com/how-it-works',
    siteName: 'The Inspection Academy',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://theinspectionacademy.com/how-it-works',
  },
};

const steps = [
  {
    number: '1',
    icon: BookOpen,
    title: 'Complete Your Courses',
    description: 'Work through interactive, self-paced courses designed using Adult Learning Theory. No boring video lectures—just engaging content with built-in activities that help you actually retain the information.',
    features: [
      'Self-paced learning on any device',
      'Interactive exercises and quizzes',
      'Available in 25+ languages',
      'Real-world scenarios and examples',
    ],
  },
  {
    number: '2',
    icon: Target,
    title: 'Use Bulletproof Test Prep',
    description: 'Our adaptive test preparation system identifies your weak areas and focuses your study time where it matters most. Stop wasting time reviewing what you already know.',
    features: [
      'Adaptive algorithm targets weak areas',
      'Unlimited practice exams',
      'Detailed explanations for every question',
      'Progress tracking and analytics',
    ],
  },
  {
    number: '3',
    icon: GraduationCap,
    title: 'Pass & Launch Your Career',
    description: 'Walk into your exam confident and prepared. After you pass, use our Spectora training to hit the ground running with industry-standard inspection software.',
    features: [
      'First-time pass confidence',
      'Spectora software training included',
      'Business operations guidance',
      'Ready to start your new career',
    ],
  },
];

const principles = [
  {
    icon: Brain,
    title: 'Active Learning',
    description: 'Research shows that active participation leads to better retention than passive listening. Our courses include interactive elements throughout.',
  },
  {
    icon: Users,
    title: 'Real-World Application',
    description: 'Adults learn best when they can connect new information to their existing experience. We use practical examples from actual inspections.',
  },
  {
    icon: BarChart,
    title: 'Spaced Repetition',
    description: 'Our test prep uses scientifically-proven spaced repetition to move information into long-term memory.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 pb-16" background="gray">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How TIA Gets You Licensed
            </h1>
            <p className="text-xl text-gray-600">
              We don&apos;t just teach you information—we help you actually learn it. Our approach is built on Adult Learning Theory, not outdated classroom methods.
            </p>
          </div>
        </Container>
      </Section>

      {/* Steps */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="mb-16 last:mb-0">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl">
                      <step.icon className="h-10 w-10 text-primary" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {step.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block ml-10 my-8 h-12 w-0.5 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Adult Learning Theory */}
      <Section background="gray">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Science Behind Our Approach
              </h2>
              <p className="text-lg text-gray-600">
                Our curriculum is designed by educators with advanced degrees in education, using principles proven to help adults learn effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((principle) => (
                <Card key={principle.title}>
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                      <principle.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-primary">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Learning the Right Way?
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Join students who are passing their exams on the first try.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/courses">
                  View Courses
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                <a href={SITE_CONFIG.links.scheduleCall} target="_blank" rel="noopener noreferrer">
                  Book an Online Meeting
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
