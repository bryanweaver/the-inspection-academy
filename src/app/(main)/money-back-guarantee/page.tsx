import Link from 'next/link';
import { Shield, CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/layout';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'Money-Back Guarantee Terms & Conditions | The Inspection Academy',
  description: 'Read the full terms and conditions for The Inspection Academy\'s pass-or-get-your-money-back guarantee.',
  openGraph: {
    title: 'Money-Back Guarantee | The Inspection Academy',
    description: 'Pass your Texas home inspector exam or get your money back. Read our full guarantee terms.',
    url: 'https://theinspectionacademy.com/money-back-guarantee',
    siteName: 'The Inspection Academy',
    images: [{ url: 'https://theinspectionacademy.com/og-image.png', width: 1200, height: 630 }],
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
              Money-Back Guarantee Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600">
              The Inspection Academy (&quot;TIA&quot;) offers a conditional money-back guarantee for students who complete all required training and exam-prep steps but do not pass the Texas Home Inspector Licensing Exam on their first attempt.
            </p>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Intro */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <p className="text-green-800 m-0">
                  This guarantee is designed to protect students who put in the work and follow the program as designed. By enrolling in TIA and checking the acknowledgment box at checkout, the student agrees to the following terms.
                </p>
              </div>

              {/* Section 1 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                1. Eligibility Requirements
              </h2>
              <p className="text-gray-600 mb-4">
                To qualify for the money-back guarantee, the student must:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Complete all qualifying education courses through The Inspection Academy, including all required quizzes, activities, and assessments.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Pass a minimum of five (5) full-length sample exams (225 questions each) on the Bulletproof Test Prep app with a score of 75% or higher.
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">
                These requirements ensure that the student has fully engaged with the curriculum and completed the structured exam-prep process.
              </p>

              {/* Section 2 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                2. Exam Attempt Requirements
              </h2>
              <p className="text-gray-600 mb-4">
                To remain eligible for the money-back guarantee:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    The student must take the official state licensing exam <strong>within 30 days</strong> of passing their fifth required sample exam on the Bulletproof Test Prep app. This ensures the exam is taken while the student&apos;s preparation is fresh and aligned with the structured study sequence.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    The student must provide official documentation of exam failure, including the score report and exam date.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    The refund request must be submitted <strong>within 30 days</strong> of receiving the exam results.
                  </span>
                </li>
              </ul>

              {/* Section 3 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                3. Refund Amount
              </h2>
              <p className="text-gray-600 mb-4">
                If the student meets all eligibility requirements and does not pass the licensing exam on their first attempt:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Paid-in-Full Students</h3>
                  <p className="text-gray-700 m-0">
                    TIA will refund <strong>100% of tuition paid</strong>.
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Subscription Students</h3>
                  <p className="text-gray-700 m-0">
                    TIA will refund <strong>all payments made to date</strong>, and all remaining future payments will be forgiven.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Refunds are issued to the original payment method within 30 days of approval.</li>
                <li>• <strong>No exclusions apply.</strong> TIA refunds every dollar the student paid to TIA for tuition.</li>
              </ul>

              {/* Section 4 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                4. Student Responsibilities
              </h2>
              <p className="text-gray-600 mb-4">
                The student acknowledges and agrees that:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span className="text-gray-700">
                    TIA&apos;s course structure requires completion of all of the activities included in each of the required courses.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span className="text-gray-700">
                    Bulletproof Test Prep&apos;s adaptive system requires completion of targeted study recommendations before each subsequent sample exam.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span className="text-gray-700">
                    The student cannot skip required steps or bypass the structured learning sequence.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span className="text-gray-700">
                    The student must follow all instructions, policies, and academic integrity standards.
                  </span>
                </li>
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800 m-0 font-medium">
                  Failure to follow the required sequence or any attempt to circumvent the system voids eligibility.
                </p>
              </div>

              {/* Section 5 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                5. Exclusions
              </h2>
              <p className="text-gray-600 mb-4">
                The guarantee is void if:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="mr-3 text-red-500">✕</span>
                  <span className="text-gray-700">
                    The student engages in misconduct, cheating, or violation of exam rules.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-red-500">✕</span>
                  <span className="text-gray-700">
                    The student provides false, incomplete, or unverifiable documentation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-red-500">✕</span>
                  <span className="text-gray-700">
                    The student fails to submit the refund request within the 30-day window.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-red-500">✕</span>
                  <span className="text-gray-700">
                    The student does not complete the required TIA coursework and BTP sample exams as designed.
                  </span>
                </li>
              </ul>

              {/* Section 6 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                6. Refund Request Procedure
              </h2>
              <p className="text-gray-600 mb-4">
                To request a refund, the student must:
              </p>
              <ol className="space-y-3 mb-6 list-decimal list-inside">
                <li className="text-gray-700">
                  Submit a written request to TIA within 30 days of receiving exam results.
                </li>
                <li className="text-gray-700">
                  Include the official exam failure documentation.
                </li>
                <li className="text-gray-700">
                  Confirm that all eligibility requirements were completed.
                </li>
              </ol>
              <p className="text-gray-600">
                TIA will review the request and issue the refund within 30 days if approved.
              </p>

              {/* Section 7 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                7. Agreement to Terms
              </h2>
              <div className="bg-gray-100 border border-gray-300 rounded-xl p-6">
                <p className="text-gray-700 m-0">
                  By enrolling in The Inspection Academy and checking the acknowledgment box at checkout, the student confirms that they have read, understood, and agreed to these Money-Back Guarantee Terms & Conditions.
                </p>
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
