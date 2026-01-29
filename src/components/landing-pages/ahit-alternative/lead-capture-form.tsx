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
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-primary/5 px-6 py-8 sm:px-10 text-center border-b border-gray-100">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Still Deciding? Get the Full Comparison
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Download our free Texas Home Inspection School Comparison Guide and make an informed decision on your own time.
            </p>
          </div>

          <div className="px-6 py-8 sm:px-10">
            <div className="ml-embedded" data-form={MAILERLITE_FORM_ID} />
          </div>
        </div>
      </div>
    </section>
  );
}
