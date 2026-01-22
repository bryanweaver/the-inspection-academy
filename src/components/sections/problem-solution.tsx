import { XCircle, CheckCircle } from 'lucide-react';
import { Container, Section } from '@/components/layout';

const traditionalProblems = [
  'Put you in a classroom for a few days to rush through 450+ pages of material',
  'Give you videos of instructors reading the same information',
  'Hand you books and say "good luck"',
  '58.79% avg pass rate',
];

const tiaApproach = [
  'Self-paced online learning with active engagement',
  'Interactive exercises that promote retention',
  'Adaptive test prep included to identify YOUR weaknesses',
  'Built using Adult Learning Theory to help you pass',
];

export function ProblemSolution() {
  return (
    <Section background="gray">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Most Home Inspection Schools Do
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Traditional Schools */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-4 border-b">
                Traditional Schools
              </h3>
              <ul className="space-y-4 mb-6">
                {traditionalProblems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-medium">
                  That&apos;s not teaching. That&apos;s information delivery.
                </p>
              </div>
            </div>

            {/* TIA */}
            <div className="bg-white rounded-xl p-8 border-2 border-primary shadow-sm relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  OUR APPROACH
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-4 border-b">
                The Inspection Academy
              </h3>
              <ul className="space-y-4 mb-6">
                {tiaApproach.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  We teach. They deliver information. There&apos;s a difference.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Story */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8 text-center max-w-2xl mx-auto">
            <p className="text-gray-700 mb-4">
              I&apos;ve met inspectors who took the exam <strong>five times</strong> before finally passing.
            </p>
            <p className="text-amber-800 font-semibold">
              That&apos;s not a student problem—that&apos;s a teaching problem.
            </p>
          </div>

          {/* Stat Callout */}
          <div className="text-center">
            <div className="inline-block bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <p className="text-gray-700">
                <span className="text-4xl font-bold text-amber-600">58.79%</span>
                <br />
                <span className="text-lg">The average passing rate for Texas home inspector schools.</span>
                <br />
                <strong className="text-gray-900">That means nearly half of all students fail their first attempt.</strong>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
