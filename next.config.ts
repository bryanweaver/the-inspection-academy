import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async redirects() {
    return [
      // Old WordPress URLs → new Next.js routes (permanent 301)
      {
        source: '/author/:slug',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/tag/:slug',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/home-inspection-career',
        destination: '/become-an-inspector',
        permanent: true,
      },
      {
        source: '/texas-home-inspector-training',
        destination: '/courses',
        permanent: true,
      },
      // Old root-level blog posts → /blog/ prefix
      {
        source: '/comparing-home-inspector-schools',
        destination: '/blog/comparing-home-inspector-schools',
        permanent: true,
      },
      {
        source: '/the-truth-about-traditional-home-inspection-education',
        destination: '/blog/truth-about-traditional-education',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
