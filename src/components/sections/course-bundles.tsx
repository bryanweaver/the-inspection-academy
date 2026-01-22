import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Container, Section } from '@/components/layout';
import { courses } from '@/data/courses';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function CourseBundles() {
  return (
    <Section background="gray">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Path
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>

              <CardContent>
                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      ${course.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    or ${course.monthlyPrice}/mo for {course.months} mo
                  </p>
                </div>

                {/* Included Courses */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    {course.courses.length} TREC-required courses:
                  </h4>
                  <ul className="space-y-2">
                    {course.courses.map((item, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full" variant={course.popular ? 'default' : 'outline'} asChild>
                  <Link href={`/courses/${course.slug}`}>Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
            </div>
          ))}
        </div>

        {/* Promo Banner */}
        <div className="mt-8 text-center">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              We&apos;re Excited to Offer 15% Off All of Our Course Bundles
            </h3>
            <p className="text-gray-600 mb-4">
              To the First 15 Paid-in-Full Students to Enroll in 2026
            </p>
            <div className="inline-block bg-amber-500 text-black font-bold px-6 py-2 rounded-lg">
              USE THE CODE: {SITE_CONFIG.promo.code}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
