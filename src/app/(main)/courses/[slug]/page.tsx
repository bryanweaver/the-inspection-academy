import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ChevronRight, Clock, BookOpen, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Container, Section } from '@/components/layout';
import { courses } from '@/data/courses';
import { SITE_CONFIG } from '@/lib/constants';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};

  return {
    title: `${course.title} | The Inspection Academy`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <Section className="pt-12 pb-16" background="gray">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/courses"
              className="inline-flex items-center text-sm text-gray-600 hover:text-primary mb-6"
            >
              <ChevronRight className="mr-1 h-4 w-4 rotate-180" />
              Back to Courses
            </Link>

            {course.popular && (
              <Badge className="bg-primary text-white mb-4">Most Popular</Badge>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {course.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                {course.courses.length} Courses
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                12-Month Access
              </div>
              <div className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                25+ Languages
              </div>
              <div className="flex items-center">
                <Award className="mr-2 h-5 w-5" />
                TREC Approved
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Course Details */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What&apos;s Included
              </h2>

              {/* Included Courses */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  TREC-Required Courses
                </h3>
                <ul className="space-y-4">
                  {course.courses.map((item, index) => (
                    <li key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="mr-4 h-6 w-6 text-green-500 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">{item}</span>
                        <p className="text-sm text-gray-600 mt-1">
                          Interactive online course with quizzes and activities
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Bonus Features
                </h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How It Works */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  How It Works
                </h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 font-semibold">1</span>
                    <div>
                      <span className="font-medium text-gray-900">Enroll & Get Access</span>
                      <p className="text-sm text-gray-600">Instant access to all courses on TalentLMS</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 font-semibold">2</span>
                    <div>
                      <span className="font-medium text-gray-900">Complete Your Training</span>
                      <p className="text-sm text-gray-600">Learn at your own pace with interactive content</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 font-semibold">3</span>
                    <div>
                      <span className="font-medium text-gray-900">Use Bulletproof Test Prep</span>
                      <p className="text-sm text-gray-600">Adaptive practice exams target your weak areas</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 font-semibold">4</span>
                    <div>
                      <span className="font-medium text-gray-900">Pass & Get Licensed</span>
                      <p className="text-sm text-gray-600">Take the TREC exam with confidence</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-gray-900">
                      ${course.price.toLocaleString()}
                    </div>
                    <p className="text-gray-500 mt-1">
                      or ${course.monthlyPrice}/mo for {course.months} mo
                    </p>
                  </div>

                  {/* Promo */}
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6 text-center">
                    <p className="text-sm text-amber-800">
                      Use code <strong>{SITE_CONFIG.promo.code}</strong> for {SITE_CONFIG.promo.discount} off
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3">
                    <Button className="w-full" size="lg" asChild>
                      <a href={SITE_CONFIG.links.courseCatalog} target="_blank" rel="noopener noreferrer">
                        Enroll Now
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                    <Button className="w-full" variant="outline" asChild>
                      <a href={SITE_CONFIG.links.scheduleCall} target="_blank" rel="noopener noreferrer">
                        Book an Online Meeting
                      </a>
                    </Button>
                  </div>

                  {/* Trust Signals */}
                  <div className="mt-6 pt-6 border-t text-center text-sm text-gray-600">
                    <p>TREC Approved Provider #{SITE_CONFIG.trecNumber}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
