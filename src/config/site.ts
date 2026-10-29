export const siteConfig = {
  // Enforce strict production domain to prevent duplicate indexing and ensure
  // correct robots.txt sitemap URL resolution (brandcard.alfo.online)
  url: 'https://brandcard.alfo.online',

  // Shared global metadata
  name: "Business Card Designer",
  description: "Free business card designer to create custom printable and digital business cards in minutes. Choose professional templates and export print-ready PDF files.",
  creator: "alfo.online",
  ogImage: "/og.png",
  twitterHandle: "@alfo_online",
};

export type SiteConfig = typeof siteConfig;
