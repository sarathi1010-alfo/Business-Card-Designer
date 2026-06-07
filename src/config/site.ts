export const siteConfig = {
  // Use Vercel's NEXT_PUBLIC_SITE_URL if available (for preview environments)
  // Otherwise, default to the strict production domain to prevent duplicate indexing
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://business-card-designer.alfo.online',

  // Shared global metadata
  name: "Business Card Designer",
  description: "Design professional business cards in minutes — no design skills needed.",
  creator: "alfo.online",
  ogImage: "/og.png",
  twitterHandle: "@alfo_online",
};

export type SiteConfig = typeof siteConfig;
