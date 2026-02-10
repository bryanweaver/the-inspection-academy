import Link from 'next/link';
import { Shield, CheckCircle, ChevronRight, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/layout';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'Money-Back Guarantee Terms & Conditions | The Inspection Academy',
  description: 'Read the full terms and conditions for The Inspection Academy\'s pass-or-get-your-money-back guarantee. Effective February 1st, 2026.',
  openGraph: {
    title: 'Money-Back Guarantee | The Inspection Academy',
    description: 'Pass your Texas home inspector exam or get your money back. Read our full guarantee terms.',
    url: 'https://theinspectionacademy.com/money-back-guarantee',
    siteName: 'The Inspection Academy',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Money-Back Guarantee | The Inspection Academy',
    description: 'Pass your Texas home inspector exam or get your money back. Read our full guarantee terms.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://theinspectionacademy.com/money-back-guarantee',
  },
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 pb-16" background="gray">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Money Back Guarantee
              <br />
              <span className="text-3xl md:text-4xl">Terms & Conditions</span>
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              Effective Date: February 1st, 2026
            </p>
            <p className="text-xl text-gray-600">
              The Inspection Academy LLC (&quot;TIA&quot;) offers a Money Back Guarantee (&quot;Guarantee&quot;) to eligible students enrolled in TIA&apos;s Texas home inspector pre-licensing programs.
            </p>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Section 1 - Overview */}
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                1. Overview
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <p className="text-green-800 m-0">
                  This Guarantee applies exclusively to students preparing for the Texas Professional Inspector or Real Estate Inspector licensing exams. If a student meets all requirements outlined in this document and does not pass the licensing exam on their first attempt, TIA will refund the full amount of tuition paid.
                </p>
              </div>

              {/* Section 2 - Eligibility Requirements */}
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                2. Eligibility Requirements
              </h2>
              <p className="text-gray-600 mb-4">
                To qualify for the Guarantee, a student must satisfy <strong>all</strong> of the following conditions:
              </p>

              {/* 2.1 Enrollment */}
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                2.1 Enrollment
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Student must be enrolled in a TIA Texas pre-licensing program.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Both paid-in-full and payment plan students are eligible.
                  </span>
                </li>
              </ul>

              {/* 2.2 Course Completion */}
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                2.2 Course Completion
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Student must complete <strong>all required TIA courses</strong> and obtain <strong>all official TIA completion certificates</strong>.
                  </span>
                </li>
              </ul>

              {/* 2.3 Bulletproof Test Prep Requirements */}
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                2.3 Bulletproof Test Prep Requirements
              </h3>
              <p className="text-gray-600 mb-4">
                Student must complete the following steps using the Bulletproof Test Prep (&quot;BTP&quot;) app:
              </p>
              <ol className="space-y-3 mb-6 list-decimal list-inside">
                <li className="text-gray-700">
                  Begin preparation by taking a <strong>full-length sample exam</strong>.
                </li>
                <li className="text-gray-700">
                  Follow the <strong>AI-generated study plan</strong> assigned after each exam.
                </li>
                <li className="text-gray-700">
                  Complete all required study modules before taking the next sample exam.
                </li>
                <li className="text-gray-700">
                  Pass <strong>five (5) full-length sample exams</strong> with a score of <strong>75% or higher</strong>.
                </li>
                <li className="text-gray-700">
                  Take the official Texas licensing exam <strong>within 30 days</strong> of completing the fifth qualifying sample exam.
                </li>
              </ol>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
                <p className="text-amber-800 m-0 font-medium">
                  Failure to follow the assigned study plan or skipping any required steps voids eligibility.
                </p>
              </div>

              {/* Section 3 - Refund Conditions */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                3. Refund Conditions
              </h2>
              <p className="text-gray-600 mb-4">
                If the student meets all eligibility requirements and fails the official Texas home inspector licensing exam on their first attempt, TIA will refund:
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <p className="text-gray-900 font-semibold m-0">
                  100% of tuition paid to The Inspection Academy, including all payment plan payments made to date.
                </p>
              </div>
              <p className="text-gray-600 mb-4">
                The refund <strong>does not</strong> include:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span className="text-gray-700">State exam fees</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span className="text-gray-700">Travel or lodging expenses</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span className="text-gray-700">Tools, equipment, or supplies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span className="text-gray-700">Third-party materials</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span className="text-gray-700">Any future payment plan payments (these are automatically forgiven)</span>
                </li>
              </ul>

              {/* Section 4 - Refund Request Procedure */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                4. Refund Request Procedure
              </h2>
              <p className="text-gray-600 mb-4">
                To request a refund under this Guarantee, the student must:
              </p>
              <ol className="space-y-3 mb-6 list-decimal list-inside">
                <li className="text-gray-700">
                  Submit a refund request <strong>within 30 days</strong> of failing the exam.
                </li>
                <li className="text-gray-700">
                  Provide the following documentation:
                  <ul className="mt-2 ml-6 space-y-1">
                    <li className="flex items-start">
                      <span className="mr-2 text-gray-400">○</span>
                      <span>The official <strong>score report</strong> from the testing provider.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-gray-400">○</span>
                      <span><strong>Proof of exam date</strong>.</span>
                    </li>
                  </ul>
                </li>
              </ol>
              <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-8">
                <p className="text-gray-700 m-0">
                  Requests submitted after the 30-day window or without complete documentation will not be eligible.
                </p>
              </div>

              {/* Section 5 - Refund Processing */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                5. Refund Processing
              </h2>
              <p className="text-gray-600 mb-8">
                TIA will review the request and, if approved, issue the refund within <strong>30 days</strong> using the original payment method.
              </p>

              {/* Section 6 - Limitations and Exclusions */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                6. Limitations and Exclusions
              </h2>
              <p className="text-gray-600 mb-4">
                The Guarantee is void under any of the following circumstances:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <AlertCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    The student violates exam rules, engages in misconduct, or provides false information.
                  </span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    The student fails to follow the BTP study plan as assigned.
                  </span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    The student takes the licensing exam more than 30 days after completing the fifth qualifying sample exam.
                  </span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    The student fails to submit a refund request within the required 30-day window.
                  </span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    The student submits altered, incomplete, or fraudulent documentation.
                  </span>
                </li>
              </ul>

              {/* Section 7 - Acceptance of Terms */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                7. Acceptance of Terms
              </h2>
              <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 mb-8">
                <p className="text-gray-700 m-0">
                  By enrolling in a TIA Texas pre-licensing program, the student acknowledges and agrees to these Terms & Conditions. TIA may require students to confirm their understanding of these terms and conditions by checking a box at checkout or during enrollment.
                </p>
              </div>

              {/* Section 8 - Amendments */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                8. Amendments
              </h2>
              <p className="text-gray-600 mb-8">
                TIA reserves the right to update or modify these Terms & Conditions at any time. Any changes will apply to future enrollments and will not affect students already enrolled under previous terms.
              </p>

              {/* Footer */}
              <div className="border-t border-gray-200 pt-8 mt-12 text-center text-gray-500 text-sm">
                <p className="mb-2">The Inspection Academy • TREC-approved Qualifying Education Provider</p>
                <p className="mb-2">TREC License #701080</p>
                <p className="mb-2">TheInspectionAcademy.com</p>
                <p>© 2026 The Inspection Academy. All Rights Reserved.</p>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-12 pt-8 border-t text-center">
              <p className="text-gray-600 mb-4">
                Have questions about the guarantee? We&apos;re happy to explain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href={`mailto:${SITE_CONFIG.email}`}>
                    Email Us
                  </a>
                </Button>
                <Button asChild>
                  <a href={SITE_CONFIG.links.scheduleCall} target="_blank" rel="noopener noreferrer">
                    Book an Online Meeting
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-primary">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Training?
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Join the students who are passing their exams with our guaranteed training system.
            </p>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold" asChild>
              <a href={SITE_CONFIG.links.courseCatalog} target="_blank" rel="noopener noreferrer">
                Start Your Training
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
