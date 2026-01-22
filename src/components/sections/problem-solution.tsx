import { XCircle, CheckCircle } from 'lucide-react';
import { Container, Section } from '@/components/layout';

const traditionalProblems = [
  {
    title: 'Passive video lectures',
    description: 'You watch, you forget. Research shows passive learning has the lowest retention rates.',
  },
  {
    title: 'Information dump',
    description: 'Hundreds of pages thrown at you with no structure for actually learning it.',
  },
  {
    title: 'Generic test prep',
    description: 'Same practice questions for everyone, regardless of what YOU need to work on.',
  },
  {
    title: 'No real-world application',
    description: "Theory without practice. You pass (maybe), but you're not ready to actually inspect.",
  },
];

const tiaApproach = [
  {
    title: 'Active learning',
    description: 'Interactive content with built-in activities. You engage, you retain.',
  },
  {
    title: 'Front-loaded structure',
    description: 'Information organized for how adults actually learn—concepts build on each other.',
  },
  {
    title: 'Adaptive test prep',
    description: 'Technology that identifies YOUR weak areas and focuses your study time there.',
  },
  {
    title: 'Real software training',
    description: 'Learn Spectora during training so you can hit the ground running.',
  },
];

export function ProblemSolution() {
  return (
    <Section background="gray">
      <Container>
        {/* Stat Callout - Lead with the problem */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <p className="text-lg text-gray-700">
              <span className="text-4xl font-bold text-amber-600">58.79%</span>
              <br />
              <span className="text-xl">The average pass rate for Texas home inspector schools.</span>
              <br />
              <strong>Nearly half of all students fail their first attempt.</strong>
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Do So Many Students Fail?
          </h2>
          <p className="text-xl text-gray-600">
            It&apos;s not because they&apos;re not smart enough. It&apos;s because traditional schools use
            teaching methods that don&apos;t work for adult learners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Schools */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-4 border-b">
              What Most Schools Do
            </h3>
            <ul className="space-y-5">
              {traditionalProblems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">{item.title}</span>
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* TIA */}
          <div className="bg-white rounded-xl p-8 border-2 border-primary shadow-sm relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                OUR APPROACH
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-4 border-b">
              What The Inspection Academy Does
            </h3>
            <ul className="space-y-5">
              {tiaApproach.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">{item.title}</span>
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
