import { siteConfig } from "./site";

export const seoConfig = {
  global: {
    titleTemplate: `%s | ${siteConfig.name}`,
    defaultTitle: "Business Card Designer | Free Online Brand Card Maker",
    defaultDescription: siteConfig.description,
    siteName: siteConfig.name,
    url: siteConfig.url,
    locale: "en_US",
    type: "website",
  },
  constraints: {
    title: {
      min: 10,
      max: 60, // Exact target length to avoid truncation
    },
    description: {
      min: 50,
      max: 160, // Standard max length
    },
  },
  social: {
    twitterHandle: siteConfig.twitterHandle,
    ogImage: siteConfig.ogImage,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
};
