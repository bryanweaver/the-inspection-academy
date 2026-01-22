import { GraduationCap, FlaskConical, Lightbulb, Globe, Smartphone, CreditCard } from 'lucide-react';
import { Container, Section } from '@/components/layout';

const iconMap = {
  GraduationCap,
  FlaskConical,
  Lightbulb,
  Globe,
  Smartphone,
  CreditCard,
} as const;

const features = [
  {
    title: 'Educators First',
    description: "Led by a Master's-level educator who understands Adult Learning Theory—the science of how people actually learn and retain information for high-stakes exams",
    icon: 'GraduationCap',
  },
  {
    title: 'Science-Based',
    description: 'Built on Adult Learning Theory',
    icon: 'FlaskConical',
  },
  {
    title: 'Real Inspectors',
    description: 'Created by licensed TX professional inspectors',
    icon: 'Lightbulb',
  },
  {
    title: '25+ Languages',
    description: 'Learn in your native language',
    icon: 'Globe',
  },
  {
    title: 'Spectora Integration',
    description: 'Train with industry-leading software',
    icon: 'Smartphone',
  },
  {
    title: '0% Interest Financing',
    description: '12, 18, or 24-month payment plans',
    icon: 'CreditCard',
  },
];

export function Features() {
  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Students Choose The Inspection Academy
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={feature.title}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
