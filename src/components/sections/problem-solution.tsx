import { XCircle, CheckCircle } from 'lucide-react';
import { Container, Section } from '@/components/layout';
import { comparisonData } from '@/data/features';

export function ProblemSolution() {
  return (
    <Section background="gray">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Problem With Traditional Home Inspector Schools
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Traditional Schools */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-4 border-b">
              {comparisonData.traditional.title}
            </h3>
            <ul className="space-y-4">
              {comparisonData.traditional.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
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
              {comparisonData.tia.title}
            </h3>
            <ul className="space-y-4">
              {comparisonData.tia.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stat Callout */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-lg text-gray-700">
              <span className="text-3xl font-bold text-amber-600">58.79%</span>
              {' '}— The average passing rate for Texas home inspector schools. That means{' '}
              <strong>nearly half of all students fail their first attempt.</strong>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
