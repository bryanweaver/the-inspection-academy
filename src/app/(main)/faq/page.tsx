import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'FAQ | The Inspection Academy',
  description: 'Frequently asked questions about Texas home inspector training, licensing, and The Inspection Academy courses.',
};

const faqCategories = [
  {
    title: 'Getting Started',
    faqs: [
      {
        question: 'What are the requirements to become a home inspector in Texas?',
        answer: 'To become a licensed home inspector in Texas, you must: (1) Be at least 18 years old, (2) Complete the required TREC-approved education courses, (3) Pass the TREC-approved exam, (4) Submit your license application to TREC, and (5) Pay the required fees. Our courses cover all the education requirements.',
      },
      {
        question: 'How long does it take to complete the training?',
        answer: 'Most students complete their training in 2-4 months, depending on how much time they can dedicate. Our courses are completely self-paced, so you can go faster or slower based on your schedule. You have 12 months of access to complete all courses.',
      },
      {
        question: 'Do I need any prior experience?',
        answer: 'No prior experience is required. Our courses start from the fundamentals and build up your knowledge. Many successful inspectors come from various backgrounds including real estate, construction, engineering, or completely unrelated fields.',
      },
    ],
  },
  {
    title: 'Courses & Training',
    faqs: [
      {
        question: 'What\'s the difference between the Professional and Real Estate Inspector bundles?',
        answer: 'The Professional Inspector bundle includes all 6 TREC-required courses and qualifies you for the full Professional Inspector license. The Real Estate Inspector bundle includes 4 courses and qualifies you for the Real Estate Inspector license. Both include our Bulletproof Test Prep and Spectora training.',
      },
      {
        question: 'What is Bulletproof Test Prep?',
        answer: 'Bulletproof Test Prep is our adaptive exam preparation system. It uses technology to identify your weak areas and focuses your study time there. This means you spend less time reviewing what you already know and more time strengthening areas that need work.',
      },
      {
        question: 'Can I access the courses on my phone or tablet?',
        answer: 'Yes! Our courses are fully responsive and work on any device with internet access. Study at home on your computer or on-the-go with your phone or tablet.',
      },
      {
        question: 'Are the courses available in Spanish?',
        answer: 'Yes! Our courses are available in 25+ languages, including Spanish. You can study the material in your native language to better understand the concepts. The TREC exam, however, is only offered in English.',
      },
    ],
  },
  {
    title: 'Pricing & Payment',
    faqs: [
      {
        question: 'What payment options are available?',
        answer: 'We offer one-time payment or 0% interest financing for 12, 18, or 24 months. Choose the option that works best for your budget. There are no hidden fees or surprises.',
      },
      {
        question: 'Is there a money-back guarantee?',
        answer: 'Contact us within the first 7 days if you\'re not satisfied with the course quality. We want you to feel confident in your investment.',
      },
      {
        question: 'Can I use the promo code with financing?',
        answer: 'Yes! The promo code applies to the total price, so your monthly payments will be calculated on the discounted amount.',
      },
    ],
  },
  {
    title: 'Exam & Licensing',
    faqs: [
      {
        question: 'When can I take the TREC exam?',
        answer: 'You can schedule your TREC exam after completing all required courses. We recommend using the Bulletproof Test Prep until you\'re consistently scoring 80% or higher before scheduling your exam.',
      },
      {
        question: 'What is the passing score for the exam?',
        answer: 'You need to score at least 70% on the TREC exam to pass. Our training is designed to prepare you well beyond this threshold so you walk in confident.',
      },
      {
        question: 'What happens if I don\'t pass the exam?',
        answer: 'If you don\'t pass on your first attempt, you can retake the exam after a waiting period. You\'ll have continued access to our Bulletproof Test Prep to help you prepare for your next attempt.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 pb-16" background="gray">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about becoming a licensed Texas home inspector.
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ Sections */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.title} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-primary">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Our team is happy to answer any questions you have about our courses or the licensing process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href={SITE_CONFIG.links.scheduleCall} target="_blank" rel="noopener noreferrer">
                  Book an Online Meeting
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                <Link href="/contact">
                  Contact Us
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
