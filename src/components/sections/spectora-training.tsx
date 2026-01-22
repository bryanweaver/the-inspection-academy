import { FileText, Smartphone, Zap, DollarSign } from 'lucide-react';
import { Container, Section } from '@/components/layout';

const benefits = [
  {
    icon: FileText,
    text: 'Create professional inspection reports',
  },
  {
    icon: Smartphone,
    text: 'Works on any device—phone, tablet, or computer',
  },
  {
    icon: Zap,
    text: 'Hit the ground running on day one',
  },
  {
    icon: DollarSign,
    text: 'Free access during your training',
  },
];

export function SpectoraTraining() {
  return (
    <Section background="gray">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Train With Real Software
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Most schools teach you theory. We train you with{' '}
                <strong>Spectora</strong>—the industry-leading inspection report
                software used by thousands of professional inspectors.
              </p>
              <p className="text-gray-600 mb-8">
                By the time you pass your exam, you&apos;ll already know how to
                create professional reports. No learning curve when you start
                your business.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit.text} className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-gray-700">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl mb-6">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Spectora</h3>
                <p className="text-gray-500 mb-6">Industry-Leading Software</p>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600">
                    &ldquo;The same software top inspectors use every day—and
                    you&apos;ll learn it during your training, not after.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
