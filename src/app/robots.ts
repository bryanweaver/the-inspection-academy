import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.theinspectionacademy.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/?s=',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
