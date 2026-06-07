import { siteConfig } from "@/config/site";

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

/**
 * Automatically generates unique, compelling titles and descriptions based on tool context.
 */
export function generateMetadata(context: ToolContext): GeneratedMetadata {
  const { tool_name, primary_action, input_type, output_type, key_benefit } = context;

  // Title variations (max 60 chars recommended)
  const titles = [
    `${tool_name} - ${primary_action} ${input_type} Online`,
    `Free ${tool_name} | ${key_benefit}`,
    `${primary_action} ${input_type} to ${output_type} Instantly`
  ];

  // Select the shortest title that fits well, or default to the first
  const title = titles.reduce((prev, curr) => (curr.length <= 60 && curr.length > prev.length ? curr : prev), titles[0]);

  // Description variations (max 155 chars recommended)
  const descriptions = [
    `Use our free ${tool_name} to easily ${primary_action.toLowerCase()} your ${input_type.toLowerCase()}. ${key_benefit}. No signup required.`,
    `Looking to ${primary_action.toLowerCase()} ${input_type.toLowerCase()} to ${output_type.toLowerCase()}? Try our fast and free ${tool_name}. ${key_benefit}.`,
    `The best online ${tool_name}. Securely ${primary_action.toLowerCase()} ${input_type.toLowerCase()} instantly. ${key_benefit}.`
  ];

  // Select the longest description under 155 chars
  const description = descriptions.reduce((prev, curr) => (curr.length <= 155 && curr.length > prev.length ? curr : prev), descriptions[0]);

  return {
    title,
    description,
    ogTitle: title, // OG tags can be slightly longer, but keeping them synced is generally fine
    ogDescription: description
  };
}

/**
 * Generates JSON-LD SoftwareApplication schema for a tool page
 */
export function generateToolSchema(context: ToolContext, toolSlug: string) {
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
    "url": `${siteConfig.url}/tools/${context.cluster}/${toolSlug}`
  };
}
