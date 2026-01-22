import Link from 'next/link';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Container, Section } from '@/components/layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { courses } from '@/data/courses';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Pricing | The Inspection Academy',
  description: 'Transparent pricing for Texas home inspector training. 0% interest financing available.',
};

const faqs = [
  {
    question: 'What payment options are available?',
    answer: 'We offer one-time payment or 0% interest financing for 12, 18, or 24 months. Choose the option that works best for your budget.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Contact us within the first 7 days if you\'re not satisfied with the course quality. We want you to feel confident in your investment.',
  },
  {
    question: 'What\'s included in the price?',
    answer: 'All bundles include the required TREC courses, Bulletproof Test Prep, Spectora software training, 12-month course access, and multi-language support.',
  },
  {
    question: 'Can I upgrade from Real Estate to Professional bundle?',
    answer: 'Yes! Contact us and we\'ll help you upgrade your bundle. You\'ll only pay the difference between the two packages.',
  },
  {
    question: 'Are there any additional fees?',
    answer: 'No hidden fees. The price you see includes everything you need to complete your training. The only additional costs are your TREC exam registration and licensing fees (paid directly to TREC).',
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 pb-16" background="gray">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600">
              No hidden fees. 0% interest financing available. Choose the bundle that matches your career goals.
            </p>
          </div>
        </Container>
      </Section>

      {/* Pricing Cards */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {courses.map((course) => (
              <div key={course.id} className="relative">
                {/* Badge outside Card to avoid overflow-hidden clipping */}
                {course.popular && (
                  <div className="absolute -top-3 right-4 z-10">
                    <Badge className="bg-primary text-white shadow-md">Most Popular</Badge>
                  </div>
                )}
                <Card
                  className={cn(
                    'h-full',
                    course.popular && 'border-2 border-primary shadow-lg'
                  )}
                >
                <CardHeader>
                  <CardTitle className="text-xl">{course.shortTitle}</CardTitle>
                  <CardDescription>{course.courses.length} TREC-required courses</CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Pricing Options */}
                  <div className="space-y-4 mb-6">
                    {/* One-time */}
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">One-Time Payment</span>
                        <span className="text-2xl font-bold text-gray-900">${course.price.toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-gray-500">Best value - save on total cost</p>
                    </div>

                    {/* Monthly */}
                    <div className="p-4 border rounded-lg bg-gray-50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">0% Financing</span>
                        <span className="text-2xl font-bold text-gray-900">${course.monthlyPrice}/mo</span>
                      </div>
                      <p className="text-sm text-gray-500">For {course.months} months - No interest!</p>
                    </div>
                  </div>

                  {/* What's Included */}
                  <ul className="space-y-2">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button className="w-full" variant={course.popular ? 'default' : 'outline'} asChild>
                    <Link href={`/courses/${course.slug}`}>
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              </div>
            ))}
          </div>

          {/* Promo */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-amber-100 border border-amber-300 rounded-full px-6 py-3">
              <span className="text-amber-800">
                Use code <strong>{SITE_CONFIG.promo.code}</strong> for {SITE_CONFIG.promo.discount} off ({SITE_CONFIG.promo.description})
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="gray">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
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
              Have More Questions?
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Schedule a free meeting and we&apos;ll answer all your questions about pricing, financing, and which bundle is right for you.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href={SITE_CONFIG.links.scheduleCall} target="_blank" rel="noopener noreferrer">
                Book an Online Meeting
              </a>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
