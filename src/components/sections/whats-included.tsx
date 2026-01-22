import { CheckCircle, BookOpen, Target, FileText, Globe, Clock } from 'lucide-react';
import { Container, Section } from '@/components/layout';

const courses = [
  'Property & Building Inspection I',
  'Property & Building Inspection II',
  'Analysis of Findings & Reporting',
  'Business Operations & Professional Responsibilities',
  'Texas Standards of Practice',
  'Texas Law',
];

const bonuses = [
  {
    icon: Target,
    title: 'Bulletproof Test Prep',
    description: 'Adaptive exam preparation with unlimited practice tests',
  },
  {
    icon: FileText,
    title: 'Spectora Software Training',
    description: 'Learn industry-leading report writing software',
  },
  {
    icon: Globe,
    title: '25+ Language Options',
    description: 'Study in your native language',
  },
  {
    icon: Clock,
    title: '12-Month Access',
    description: 'Learn at your own pace',
  },
];

export function WhatsIncluded() {
  return (
    <Section background="white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Get Licensed
            </h2>
            <p className="text-xl text-gray-600">
              All 6 TREC-required courses plus the tools to actually pass
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Courses List */}
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  6 TREC-Required Courses
                </h3>
              </div>
              <ul className="space-y-4">
                {courses.map((course) => (
                  <li key={course} className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  Each course features interactive content, built-in activities,
                  and embedded practice questions—not passive video lectures.
                </p>
              </div>
            </div>

            {/* Bonuses */}
            <div>
              <div className="flex items-center mb-6">
                <CheckCircle className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Also Included
                </h3>
              </div>
              <div className="space-y-4">
                {bonuses.map((bonus) => (
                  <div
                    key={bonus.title}
                    className="flex items-start p-4 bg-primary/5 rounded-xl"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <bonus.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{bonus.title}</h4>
                      <p className="text-sm text-gray-600">{bonus.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
