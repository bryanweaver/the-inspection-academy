import Link from 'next/link';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Container, Section } from '@/components/layout';
import { courses } from '@/data/courses';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Courses | The Inspection Academy',
  description: 'TREC-approved Texas home inspector training courses. Choose from Professional Inspector or Real Estate Inspector bundles.',
};

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 pb-16" background="gray">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">TREC Approved</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Texas Home Inspector Training
            </h1>
            <p className="text-xl text-gray-600">
              Choose the course bundle that matches your career goals. All bundles include our Bulletproof Test Prep and Spectora software training.
            </p>
          </div>
        </Container>
      </Section>

      {/* Course Cards */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courses.map((course) => (
              <Card
                key={course.id}
                className={cn(
                  'relative overflow-hidden',
                  course.popular && 'border-2 border-primary shadow-lg'
                )}
              >
                {course.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white">Most Popular</Badge>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Pricing */}
                  <div className="mb-8 pb-6 border-b">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900">
                        ${course.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-gray-500 mt-2">
                      or ${course.monthlyPrice}/mo for {course.months} months (0% interest)
                    </p>
                  </div>

                  {/* Included Courses */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Included Courses:
                    </h4>
                    <ul className="space-y-3">
                      {course.courses.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Also Included:
                    </h4>
                    <ul className="space-y-3">
                      {course.features.slice(1).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="flex-col gap-4">
                  <Button className="w-full" size="lg" variant={course.popular ? 'default' : 'outline'} asChild>
                    <Link href={`/courses/${course.slug}`}>
                      Get Started
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <a
                    href={SITE_CONFIG.links.scheduleCall}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    Have questions? Schedule a call
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Promo */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-amber-100 border border-amber-300 rounded-full px-6 py-3">
              <span className="text-amber-800">
                Use code <strong>{SITE_CONFIG.promo.code}</strong> for {SITE_CONFIG.promo.discount} off
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-primary">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Not Sure Which Bundle Is Right for You?
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Schedule a free call with our team and we&apos;ll help you choose the right path for your career goals.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href={SITE_CONFIG.links.scheduleCall} target="_blank" rel="noopener noreferrer">
                Schedule a Free Call
              </a>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
