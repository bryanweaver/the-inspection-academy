import { Phone, Mail, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Container, Section } from '@/components/layout';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'Contact | The Inspection Academy',
  description: 'Get in touch with The Inspection Academy. Schedule a meeting, send an email, or give us a call.',
};

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Talk to our team directly',
    action: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
    buttonText: 'Call Now',
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get a response within 24 hours',
    action: 'Send us an email',
    href: `mailto:${SITE_CONFIG.email}`,
    buttonText: 'Send Email',
  },
  {
    icon: Calendar,
    title: 'Book an Online Meeting',
    description: 'Book a time that works for you',
    action: 'Free 30-minute consultation',
    href: SITE_CONFIG.links.scheduleCall,
    buttonText: 'Schedule Now',
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 pb-16" background="gray">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have questions about our courses? We&apos;re here to help you start your journey to becoming a licensed Texas home inspector.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Methods */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method) => (
                <Card key={method.title} className="text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                      <method.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {method.description}
                    </p>
                    <p className="text-sm text-gray-500 mb-6">
                      {method.action}
                    </p>
                    <Button className="w-full" asChild>
                      <a
                        href={method.href}
                        target={method.external ? '_blank' : undefined}
                        rel={method.external ? 'noopener noreferrer' : undefined}
                      >
                        {method.buttonText}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Office Hours */}
      <Section background="gray">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Office Hours
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="grid gap-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-gray-900">9:00 AM - 6:00 PM Central</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="font-medium text-gray-900">Closed</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Online courses are available 24/7. Support responses within 24 business hours.
            </p>
          </div>
        </Container>
      </Section>

      {/* Map / Additional Info */}
      <Section background="white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              TREC Approved Provider
            </h2>
            <p className="text-gray-600 mb-2">
              The Inspection Academy is approved by the Texas Real Estate Commission
            </p>
            <p className="text-2xl font-bold text-primary">
              Provider #{SITE_CONFIG.trecNumber}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
