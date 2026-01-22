import { Target, Brain, RotateCcw, TrendingUp } from 'lucide-react';
import { Container, Section } from '@/components/layout';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Brain,
    title: 'Adaptive Technology',
    description:
      "Our system analyzes your answers in real-time to identify YOUR specific weak areas—not generic problem spots.",
  },
  {
    icon: Target,
    title: 'Targeted Practice',
    description:
      "Stop wasting time reviewing what you already know. Focus your study time where it actually matters.",
  },
  {
    icon: RotateCcw,
    title: 'Unlimited Practice Exams',
    description:
      "Take as many practice tests as you need. Each one adapts based on your previous performance.",
  },
  {
    icon: TrendingUp,
    title: 'Track Your Progress',
    description:
      "Watch your scores improve as the system helps you systematically eliminate weak spots.",
  },
];

export function BulletproofTestPrep() {
  return (
    <Section background="white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bulletproof Test Prep
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Most test prep is generic. Ours uses adaptive technology to find
              and fix <em>your</em> weak spots—so you walk into the exam confident.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-sm bg-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
            <p className="text-lg text-gray-700">
              <strong className="text-primary">The goal:</strong> Know you&apos;re ready{' '}
              <em>before</em> you schedule your exam. No surprises. No second attempts.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
