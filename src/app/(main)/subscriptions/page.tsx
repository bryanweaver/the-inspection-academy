import Link from 'next/link';
import { CheckCircle, CreditCard, Calendar, Shield, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Container, Section } from '@/components/layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'Subscription Payment Plans | The Inspection Academy',
  description: '0% interest subscription payment plans for Texas home inspector training. 12, 18, and 24 month terms available.',
};

const subscriptionPlans = [
  {
    term: '12 Months',
    professionalMonthly: 208,
    realEstateMonthly: 150,
    downPayment: 150,
  },
  {
    term: '18 Months',
    professionalMonthly: 139,
    realEstateMonthly: 100,
    downPayment: 250,
  },
  {
    term: '24 Months',
    professionalMonthly: 104,
    realEstateMonthly: 75,
    downPayment: 350,
  },
];

const benefits = [
  {
    icon: CreditCard,
    title: 'No Interest',
    description: 'Our subscription plans charge 0% interest. You only pay a modest fee to cover transaction costs.',
  },
  {
    icon: Calendar,
    title: 'Flexible Terms',
    description: 'Choose from 12, 18, or 24 month payment plans to fit your budget.',
  },
  {
    icon: Shield,
    title: 'No Late Fees',
    description: 'We never charge late fees. If you miss a payment, your access pauses until you catch up.',
  },
];

const faqs = [
  {
    question: 'How do the subscription plans work?',
    answer: 'Instead of paying for your enrollment all up front, our subscriptions allow you to pay smaller monthly payments. After a small down payment and your first month\'s payment, you gain full access to your chosen courses.',
  },
  {
    question: 'Why are down payments necessary?',
    answer: 'Down payments help cover the costs of onboarding students to our Learning Management System, distributing virtual textbooks, and payment processing fees.',
  },
  {
    question: 'What happens if I miss a payment?',
    answer: 'We never charge late fees. However, course access locks until you pay overdue balances in full. Once paid, access restores immediately. We retain course progress for 90 days, allowing time to catch up.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'Students must use a credit card, debit card, Amazon Pay, or bank draft for automatic payments. The first payment includes the down payment and the first monthly installment.',
  },
  {
    question: 'Are there other requirements to start a subscription?',
    answer: 'Yes, before enrolling in a subscription plan, you must schedule an online meeting with TIA. This meeting ensures transparency about all plan options, creates a recorded verbal contract for protection, and builds trust between both parties.',
  },
];

export default function SubscriptionsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 pb-16" background="gray">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Subscription Payment Plans
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Starting a new career is exciting, but paying for education upfront can be stressful.
            </p>
            <p className="text-xl text-gray-600">
              Our <span className="font-semibold text-primary">0% interest</span> subscription plans make home inspector training accessible.
            </p>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section background="white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Payment Table */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Monthly Payment Options
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left font-semibold text-gray-900 border">Term</th>
                    <th className="p-4 text-center font-semibold text-gray-900 border">Down Payment</th>
                    <th className="p-4 text-center font-semibold text-gray-900 border">
                      Professional Bundle
                      <span className="block text-sm font-normal text-gray-500">($2,495 total)</span>
                    </th>
                    <th className="p-4 text-center font-semibold text-gray-900 border">
                      Real Estate Bundle
                      <span className="block text-sm font-normal text-gray-500">($1,795 total)</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subscriptionPlans.map((plan) => (
                    <tr key={plan.term} className="hover:bg-gray-50">
                      <td className="p-4 border font-medium">{plan.term}</td>
                      <td className="p-4 border text-center">
                        <span className="text-xl font-bold text-gray-900">${plan.downPayment}</span>
                      </td>
                      <td className="p-4 border text-center">
                        <span className="text-2xl font-bold text-gray-900">${plan.professionalMonthly}</span>
                        <span className="text-gray-500">/mo</span>
                      </td>
                      <td className="p-4 border text-center">
                        <span className="text-2xl font-bold text-gray-900">${plan.realEstateMonthly}</span>
                        <span className="text-gray-500">/mo</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center">
              * Down payment required. Monthly payments include a small transaction fee.
            </p>
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section background="gray">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              How to Get Started
            </h2>

            <div className="space-y-6">
              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Schedule an Online Meeting</h3>
                  <p className="text-gray-600">
                    Before enrolling, you&apos;ll meet with our team to discuss your options, review plan details, and ensure you understand the terms.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Choose Your Plan</h3>
                  <p className="text-gray-600">
                    Select the course bundle and payment term that works best for your budget and timeline.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Make Your Down Payment</h3>
                  <p className="text-gray-600">
                    Pay your down payment and first month&apos;s installment to gain immediate access to all courses.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Start Learning</h3>
                  <p className="text-gray-600">
                    Begin your training immediately while automatic monthly payments handle the rest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
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
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-primary">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Subscription?
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Schedule a meeting to discuss the best subscription option for your future.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href={SITE_CONFIG.links.scheduleCall} target="_blank" rel="noopener noreferrer">
                Book an Online Meeting
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
