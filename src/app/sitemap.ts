import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://theinspectionacademy.com';

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/courses',
    '/courses/texas-professional-inspector',
    '/courses/texas-real-estate-inspector',
    '/pricing',
    '/payment-plans',
    '/become-an-inspector',
    '/how-it-works',
    '/faq',
    '/contact',
    '/blog',
    '/money-back-guarantee',
    '/ahit-alternative',
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : page === '/courses' ? 0.9 : 0.8,
  }));

  // Blog posts
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls];
}
