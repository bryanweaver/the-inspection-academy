'use client';

import { FileText } from 'lucide-react';

const MAILERLITE_FORM_ID = '89Auv2';

interface LeadCaptureFormProps {
  variant?: 'section' | 'popup';
}

export function LeadCaptureForm({ variant = 'section' }: LeadCaptureFormProps) {
  if (variant === 'popup') {
    return <div className="ml-embedded" data-form={MAILERLITE_FORM_ID} />;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-primary/5 px-6 py-6 sm:px-10 text-center border-b border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Before You Enroll Anywhere, Get the Facts
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 px-6 py-8 sm:px-10">
            {/* Left column - benefits */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <p className="text-gray-700 font-medium">
                  This free guide gives you the info you need:
                </p>
              </div>

              <ul className="text-gray-600 space-y-3 text-sm mb-6">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>How to assess your learning style & experience level to find the right education system</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>The different types of education systems and the needs they match well with</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>How to check any school&apos;s official pass rate on TREC&apos;s website</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>The questions schools don&apos;t want you to ask them</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Red flags to watch for before you enroll</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>A side-by-side comparison worksheet to evaluate all options in Texas</span>
                </li>
              </ul>

              <p className="text-gray-700 text-sm font-medium bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
                Texas is the only state that publishes school pass rates. Use that to your advantage.
              </p>
            </div>

            {/* Right column - form */}
            <div className="flex flex-col justify-center">
              <div className="ml-embedded" data-form={MAILERLITE_FORM_ID} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
