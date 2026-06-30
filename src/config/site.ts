export const siteConfig = {
  // Enforce strict production domain to prevent duplicate indexing and ensure
  // correct robots.txt sitemap URL resolution (brandcard.alfo.online)
  url: 'https://brandcard.alfo.online',

  // Shared global metadata
  name: "Business Card Designer",
  description: "Design professional business cards in minutes — no design skills needed.",
  creator: "alfo.online",
  ogImage: "/og.png",
  twitterHandle: "@alfo_online",
};

export type SiteConfig = typeof siteConfig;
