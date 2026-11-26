import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/services/sports', destination: '/businesses/sports', permanent: true },
      { source: '/services/sports/:sportId', destination: '/businesses/sports/:sportId', permanent: true },
      { source: '/sports', destination: '/businesses/sports', permanent: true },
      { source: '/sports/:sportId', destination: '/businesses/sports/:sportId', permanent: true },

      { source: '/services/play', destination: '/businesses/play', permanent: true },
      { source: '/play', destination: '/businesses/play', permanent: true },

      { source: '/services/scapes', destination: '/businesses/scapes', permanent: true },
      { source: '/scapes', destination: '/businesses/scapes', permanent: true },

      { source: '/services/tech', destination: '/businesses/tech', permanent: true },
      { source: '/tech', destination: '/businesses/tech', permanent: true },

      { source: '/services/aquatics', destination: '/businesses/aquatics', permanent: true },
      { source: '/aquatics', destination: '/businesses/aquatics', permanent: true },

      { source: '/news', destination: '/news-clients', permanent: true },
      { source: '/clients', destination: '/news-clients', permanent: true },
      { source: '/career', destination: '/careers', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;
