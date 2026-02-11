import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container, Section } from '@/components/layout';
import { blogPosts } from '@/data/blog-posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | The Inspection Academy',
  description: 'Expert insights, guidance, and practical advice for aspiring and current home inspectors in Texas.',
  openGraph: {
    title: 'The Inspection Academy Blog',
    description: 'Expert insights, guidance, and practical advice for aspiring and current home inspectors in Texas.',
    url: 'https://www.theinspectionacademy.com/blog',
    siteName: 'The Inspection Academy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Inspection Academy Blog',
    description: 'Expert insights, guidance, and practical advice for aspiring and current home inspectors in Texas.',
  },
  alternates: {
    canonical: 'https://www.theinspectionacademy.com/blog',
    types: {
      'application/rss+xml': 'https://www.theinspectionacademy.com/feed.xml',
    },
  },
};

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
                      <span className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
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
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary hover:underline font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
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
