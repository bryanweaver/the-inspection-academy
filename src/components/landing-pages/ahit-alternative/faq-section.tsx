'use client';

import { Section, Container } from '@/components/layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ahitFAQs } from '@/data/landing-pages/ahit-alternative';
import { trackFAQExpand } from '@/lib/analytics';

export function FAQSection() {
  const handleAccordionChange = (value: string) => {
    if (value) {
      const index = parseInt(value.replace('faq-', ''), 10);
      if (!isNaN(index) && ahitFAQs[index]) {
        trackFAQExpand(ahitFAQs[index].question, index);
      }
    }
  };

  return (
    <Section background="gray">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            AHIT vs TIA - Common Questions
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Get answers to frequently asked questions about comparing schools
          </p>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            onValueChange={handleAccordionChange}
          >
            {ahitFAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white mb-3 rounded-lg border px-4"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}
