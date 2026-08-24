import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/sitemap-articles.xml',
        destination: '/sitemap/articles.xml',
      },
      {
        source: '/sitemap-products.xml',
        destination: '/sitemap/products.xml',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/v1/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/card/:path*',
        destination: '/business-card/digital-business-card',
        permanent: true,
      },
      {
        source: '/business-card/:path*',
        destination: '/use-cases/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
