import Link from 'next/link';
import { CheckCircle, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container, Section } from '@/components/layout';
import { SITE_CONFIG } from '@/lib/constants';

// BreadcrumbList schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://theinspectionacademy.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Become an Inspector',
      item: 'https://theinspectionacademy.com/become-an-inspector',
    },
  ],
};

export const metadata = {
  title: 'How to Become a Home Inspector in Texas | The Inspection Academy',
  description: 'Complete guide to becoming a licensed home inspector in Texas. Learn about TREC requirements, licensing paths, and education requirements.',
  openGraph: {
    title: 'How to Become a Home Inspector in Texas',
    description: 'Step-by-step guide to getting your Texas home inspector license. TREC requirements, education paths, and career info.',
    url: 'https://theinspectionacademy.com/become-an-inspector',
    siteName: 'The Inspection Academy',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Become a Home Inspector in Texas',
    description: 'Step-by-step guide to getting your Texas home inspector license. TREC requirements, education paths, and career info.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://theinspectionacademy.com/become-an-inspector',
  },
};

const licenseLevels = [
  {
    level: 'Apprentice Inspector',
    description: 'Entry-level license to work under supervision',
    requirements: [
      'Be at least 18 years old',
      'Be a U.S. citizen or lawfully admitted alien',
      'Be sponsored by a Professional Inspector',
      'Pass background check',
      'Provide proof of liability insurance',
    ],
    note: 'Work under direct supervision to gain experience.',
  },
  {
    level: 'Real Estate Inspector',
    description: 'Mid-level license for residential inspections',
    requirements: [
      'Complete 90-154 hours of approved education',
      'Complete Texas Practicum (if using education pathway)',
      'Pass national (NHIE) and state exams',
      'Pass background check',
      'Provide proof of liability insurance',
    ],
    courses: [
      'Property & Building Inspection I',
      'Property & Building Inspection II',
      'Business Operations & Professional Responsibilities',
      'Texas Standards of Practice',
    ],
  },
  {
    level: 'Professional Inspector',
    description: 'Full license to operate independently',
    requirements: [
      'Complete 154+ hours of approved education',
      'Complete Texas Practicum (if using education pathway)',
      'Pass national (NHIE) and state exams',
      'Pass background check',
      'Provide proof of liability insurance',
    ],
    courses: [
      'Property & Building Inspection I',
      'Property & Building Inspection II',
      'Analysis of Findings & Reporting',
      'Business Operations & Professional Responsibilities',
      'Texas Standards of Practice',
      'Texas Law',
    ],
  },
];

export default function BecomeAnInspectorPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <Section className="pt-12 pb-16" background="gray">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">TREC Licensing Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How to Become a Home Inspector in Texas
            </h1>
            <p className="text-xl text-gray-600">
              Texas is one of the most regulated states for home inspectors. Here&apos;s everything you need to know about getting licensed.
            </p>
          </div>
        </Container>
      </Section>

      {/* TREC Overview */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Texas Real Estate Commission (TREC)
                </h2>
                <p className="text-gray-600 mb-4">
                  The Texas Real Estate Commission (TREC) is the state agency responsible for licensing and regulating home inspectors in Texas.
                </p>
                <p className="text-gray-600 mb-4">
                  TREC establishes licensing requirements, sets education standards, and administers the state licensing examinations.
                </p>
                <Button variant="outline" asChild>
                  <a href="https://www.trec.texas.gov/" target="_blank" rel="noopener noreferrer">
                    Visit TREC Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="font-semibold text-amber-800 mb-3">Industry Statistics</h3>
                <p className="text-amber-900 mb-4">
                  The average passing rate for Texas home inspector schools is only <strong>58.79%</strong>.
                </p>
                <p className="text-amber-800 text-sm">
                  That means nearly half of all students fail their first exam attempt. Choosing the right school matters.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* License Levels */}
      <Section background="gray">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Texas Inspector License Levels
            </h2>

            <div className="space-y-8">
              {licenseLevels.map((license, index) => (
                <Card key={license.level} className="overflow-hidden">
                  <CardHeader className="bg-primary/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <Badge variant="outline" className="mb-2">Level {index + 1}</Badge>
                        <CardTitle className="text-xl">{license.level}</CardTitle>
                        <CardDescription>{license.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {license.requirements.map((req, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                        {license.note && (
                          <p className="mt-4 text-sm text-gray-500 italic">{license.note}</p>
                        )}
                      </div>
                      {license.courses && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Required Courses</h4>
                          <ul className="space-y-2">
                            {license.courses.map((course, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <CheckCircle className="mr-2 h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600">{course}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* The Exams */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The Licensing Exams
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>National Home Inspector Exam (NHIE)</CardTitle>
                  <CardDescription>Required for all inspector licenses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>200 multiple-choice questions</li>
                    <li>4-hour time limit</li>
                    <li>Covers all aspects of home inspection</li>
                    <li>Must complete core courses before testing</li>
                  </ul>
                  <Button variant="outline" className="mt-4 w-full" asChild>
                    <a href="https://nationalhomeinspectorexam.org/" target="_blank" rel="noopener noreferrer">
                      Learn More About NHIE
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Texas State Exam</CardTitle>
                  <CardDescription>Texas-specific requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Covers Texas Standards of Practice</li>
                    <li>Texas-specific laws and regulations</li>
                    <li>Must complete Texas courses before testing</li>
                    <li>Administered by TREC-approved testing centers</li>
                  </ul>
                  <Button variant="outline" className="mt-4 w-full" asChild>
                    <a href="https://www.trec.texas.gov/" target="_blank" rel="noopener noreferrer">
                      TREC Exam Information
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why TIA */}
      <Section background="gray">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Why Choose The Inspection Academy?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Most home inspector schools were built by inspectors who know their trade but don&apos;t know how to teach it. We&apos;re different.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Traditional Schools</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-600">
                      <span className="mr-2 text-red-500">&#x2717;</span>
                      Rushed classroom sessions
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="mr-2 text-red-500">&#x2717;</span>
                      Passive video lectures
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="mr-2 text-red-500">&#x2717;</span>
                      "Good luck" with textbooks
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="mr-2 text-red-500">&#x2717;</span>
                      58.79% average pass rate
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">The Inspection Academy</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-600">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                      Self-paced online learning
                    </li>
                    <li className="flex items-start text-gray-600">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                      Interactive exercises & activities
                    </li>
                    <li className="flex items-start text-gray-600">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                      Adaptive test prep included
                    </li>
                    <li className="flex items-start text-gray-600">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                      Built to help you pass first time
                    </li>
                  </ul>
                </div>
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
              Ready to Start Your New Career?
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Join The Inspection Academy and get the training you need to pass your exam on the first try.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/courses">
                  View Courses
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                <a href={SITE_CONFIG.links.scheduleCall} target="_blank" rel="noopener noreferrer">
                  Book an Online Meeting
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
