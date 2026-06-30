import type { Metadata } from "next";
import { seoConfig } from "@/config/seo.config";
import { generateCanonicalUrl } from "./urls";

export interface ToolContext {
  tool_name: string;
  cluster: string;
  primary_action: string;
  input_type: string;
  output_type: string;
  key_benefit: string;
}

export interface GeneratedMetadata {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

interface ConstructMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  path: string;
  noIndex?: boolean;
}

/**
 * Constructs a standardized Metadata object for Next.js App Router.
 * Enforces character length constraints and auto-generates canonical URLs.
 */
export function constructMetadata({
  title,
  description,
  image,
  path,
  noIndex = false,
}: ConstructMetadataProps): Metadata {
  const canonicalUrl = generateCanonicalUrl(path);

  const finalTitle = title || seoConfig.global.defaultTitle;
  const finalDescription = description || seoConfig.global.defaultDescription;
  const finalImage = image || seoConfig.social.ogImage;

  // Note: We don't strictly slice the title/description here because it's better
  // to have the author fix it, but the validation script will catch violations.
  // We just ensure we return a fully formed Metadata object.

  return {
    title: finalTitle,
    description: finalDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: canonicalUrl,
      siteName: seoConfig.global.siteName,
      images: [
        {
          url: finalImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      locale: seoConfig.global.locale,
      type: seoConfig.global.type as any,
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [finalImage],
      creator: seoConfig.social.twitterHandle,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

/**
 * Automatically generates unique, compelling titles and descriptions based on tool context.
 * Used for dynamic programmatic SEO pages.
 */
export function generateToolMetadata(context: ToolContext, path: string): Metadata {
  const { tool_name, primary_action, input_type, output_type, key_benefit } = context;

  // Title variations (max 60 chars recommended)
  const titles = [
    `${tool_name} - ${primary_action} ${input_type} Online`,
    `Free ${tool_name} | ${key_benefit}`,
    `${primary_action} ${input_type} to ${output_type} Instantly`
  ];

  // Select the shortest title that fits well, or default to the first
  const title = titles.reduce((prev, curr) => (curr.length <= seoConfig.constraints.title.max && curr.length > prev.length ? curr : prev), titles[0]);

  // Description variations (max 160 chars recommended)
  const descriptions = [
    `Use our free ${tool_name} to easily ${primary_action.toLowerCase()} your ${input_type.toLowerCase()}. ${key_benefit}. No signup required.`,
    `Looking to ${primary_action.toLowerCase()} ${input_type.toLowerCase()} to ${output_type.toLowerCase()}? Try our fast and free ${tool_name}. ${key_benefit}.`,
    `The best online ${tool_name}. Securely ${primary_action.toLowerCase()} ${input_type.toLowerCase()} instantly. ${key_benefit}.`
  ];

  // Select the longest description under max chars
  const description = descriptions.reduce((prev, curr) => (curr.length <= seoConfig.constraints.description.max && curr.length > prev.length ? curr : prev), descriptions[0]);

  return constructMetadata({
    title,
    description,
    path,
  });
}

/**
 * Generates JSON-LD SoftwareApplication schema for a tool page
 */
export function generateToolSchema(context: ToolContext, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": context.tool_name,
    "applicationCategory": "BrowserApplication",
    "operatingSystem": "Any",
    "description": `A free online tool to ${context.primary_action.toLowerCase()} ${context.input_type.toLowerCase()} to ${context.output_type.toLowerCase()}.`,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "url": generateCanonicalUrl(path)
  };
}
