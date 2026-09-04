const fs = require('fs');
let content = fs.readFileSync('next.config.ts', 'utf8');

const redirectCode = `
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
      }
    ];
  },
`;

content = content.replace("async rewrites() {", redirectCode + "  async rewrites() {");

fs.writeFileSync('next.config.ts', content);
