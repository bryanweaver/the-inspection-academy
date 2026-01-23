import Link from 'next/link';
import { GraduationCap, Award, Users, Target, ChevronRight, BookOpen, Brain, TrendingUp, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Container, Section } from '@/components/layout';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'About | The Inspection Academy',
  description: 'Learn about The Inspection Academy, our mission, and our commitment to helping aspiring home inspectors succeed in Texas.',
  openGraph: {
    title: 'About | The Inspection Academy',
    description: 'We\'re educators who believe everyone deserves access to quality training that actually works. 67% pass rate - #2 in Texas.',
    url: 'https://theinspectionacademy.com/about',
    siteName: 'The Inspection Academy',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://theinspectionacademy.com/about',
  },
};

const values = [
  {
    icon: GraduationCap,
    title: 'Education First',
    description: 'We\'re educators before anything else. Our approach is built on proven learning science, not marketing gimmicks.',
  },
  {
    icon: Target,
    title: 'Results Focused',
    description: 'Our success is measured by your success. We\'re focused on one thing: helping you pass your exam and start your career.',
  },
  {
    icon: Users,
    title: 'Student Centered',
    description: 'Every decision we make is based on what\'s best for our students. From flexible payment plans to multi-language support.',
  },
  {
    icon: Award,
    title: 'Professional Excellence',
    description: 'We hold ourselves to the highest standards because we want the same for you. Quality training creates quality inspectors.',
  },
];

const storyPoints = [
  {
    icon: BookOpen,
    title: 'The Problem We Saw',
    content: 'Too many aspiring home inspectors were failing their licensing exams—not because they weren\'t capable, but because their training wasn\'t effective.',
  },
  {
    icon: Brain,
    title: 'The Science Behind Learning',
    content: 'Traditional schools focus on information delivery—long lectures, passive videos, thick textbooks. But Adult Learning Theory shows adults need active engagement, practical application, and content that connects to real-world experience.',
  },
  {
    icon: TrendingUp,
    title: 'Our Solution',
    content: 'Courses designed by educators with advanced degrees, using proven techniques that help adults actually retain and apply what they learn. Our Bulletproof Test Prep uses adaptive technology to identify and target each student\'s weak areas.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 pb-16" background="gray">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About The Inspection Academy
            </h1>
            <p className="text-xl text-gray-600">
              We&apos;re educators who believe everyone deserves access to quality training that actually works.
            </p>
          </div>
        </Container>
      </Section>

      {/* Story - Enhanced */}
      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                How a simple question led to a better way to train home inspectors
              </p>
            </div>

            {/* Story Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {storyPoints.map((point, index) => (
                <div key={point.title} className="relative">
                  {/* Connector line for desktop */}
                  {index < storyPoints.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-6 h-0.5 bg-primary/20 z-10" />
                  )}
                  <Card className="h-full border-t-4 border-t-primary">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <point.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-sm font-semibold text-primary mb-2">
                        Step {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {point.title}
                      </h3>
                      <p className="text-gray-600">
                        {point.content}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Quote/Result */}
            <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 md:p-10 relative">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-800 font-medium mb-6 italic">
                  &ldquo;The result? Students who walk into their exams confident and prepared, ready to start their new careers as licensed Texas home inspectors.&rdquo;
                </p>
                <div className="flex items-center justify-center gap-8 text-sm">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">67%</div>
                    <div className="text-gray-600">First-Time Pass Rate</div>
                  </div>
                  <div className="w-px h-12 bg-gray-300" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">#2</div>
                    <div className="text-gray-600">In Texas (TREC Data)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section background="gray">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Values
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value) => (
                <Card key={value.title}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Credentials */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              TREC Approved Provider
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-6xl font-bold text-primary mb-4">
                #{SITE_CONFIG.trecNumber}
              </div>
              <p className="text-lg text-gray-600">
                The Inspection Academy is an approved provider by the Texas Real Estate Commission (TREC). All of our courses meet TREC requirements for home inspector licensing.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-primary">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Join the students who are learning the right way and passing their exams on the first try.
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
