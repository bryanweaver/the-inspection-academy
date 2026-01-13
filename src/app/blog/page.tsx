import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container, Section } from '@/components/layout';

export const metadata = {
  title: 'Blog | The Inspection Academy',
  description: 'Expert insights, guidance, and practical advice for aspiring and current home inspectors in Texas.',
};

const blogPosts = [
  {
    slug: 'comparing-home-inspector-schools',
    title: 'Comparing Home Inspector Schools in Texas',
    excerpt: 'When it comes to choosing a home inspection school, not all programs are created equal. Learn what to look for when comparing your options.',
    category: 'Choosing a School',
    date: 'January 25, 2025',
  },
  {
    slug: 'truth-about-traditional-education',
    title: 'The Truth About Traditional Home Inspector Education',
    excerpt: 'Traditional Texas home inspector education is broken. Too often, it fails to prepare students for the rigorous licensing exam.',
    category: 'Industry Insights',
    date: 'January 20, 2025',
  },
  {
    slug: 'going-beyond-minimum-requirements',
    title: 'Going Beyond Texas Minimum Educational Requirements',
    excerpt: 'TREC sets basic standards for education providers, but meeting minimums doesn\'t guarantee student success. Here\'s why we go further.',
    category: 'Education',
    date: 'January 15, 2025',
  },
  {
    slug: 'adult-learning-theory',
    title: 'How Adult Learning Theory Improves Exam Pass Rates',
    excerpt: 'Research shows that adults learn differently than children. Our curriculum is designed using proven Adult Learning Theory principles.',
    category: 'Learning Science',
    date: 'January 10, 2025',
  },
  {
    slug: 'nhie-exam-preparation',
    title: 'Preparing for the National Home Inspector Examination',
    excerpt: 'The NHIE covers an overwhelming amount of information. Here\'s how to approach your exam preparation strategically.',
    category: 'Exam Prep',
    date: 'January 5, 2025',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 pb-16" background="gray">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Inspection Academy Blog
            </h1>
            <p className="text-xl text-gray-600">
              Expert insights, guidance, and practical advice for aspiring and current home inspectors.
            </p>
          </div>
        </Container>
      </Section>

      {/* Blog Posts */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary hover:underline font-medium"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section background="gray">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6">
              Have a topic you&apos;d like us to cover? Email us your blog idea—we&apos;d love to help!
            </p>
            <a
              href="mailto:mwarner@theinspectionacademy.com?subject=Blog Topic Suggestion"
              className="text-primary hover:underline font-medium"
            >
              mwarner@theinspectionacademy.com
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
