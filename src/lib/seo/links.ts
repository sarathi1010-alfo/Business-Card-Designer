import { siteConfig } from "@/config/site";

export interface ToolMetadata {
  slug: string;
  name: string;
  cluster: string;
  tags: string[];
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generates breadcrumb schema for a spoke page
 */
export function generateBreadcrumbSchema(cluster: string, toolName: string, toolSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tools",
        "item": `${siteConfig.url}/tools`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": cluster,
        "item": `${siteConfig.url}/tools/${cluster}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": toolName,
        "item": `${siteConfig.url}/tools/${cluster}/${toolSlug}`
      }
    ]
  };
}

/**
 * Recommends internal links for a tool page to maintain the hub-and-spoke model.
 * It links back to the hub, and to 2-3 sibling spoke pages in the same cluster.
 */
export function getRecommendedInternalLinks(
  currentTool: ToolMetadata,
  allTools: ToolMetadata[]
): { name: string; url: string; type: 'hub' | 'sibling' | 'cross-cluster' }[] {

  const links: { name: string; url: string; type: 'hub' | 'sibling' | 'cross-cluster' }[] = [];

  // Always link back to the cluster hub
  links.push({
    name: `${currentTool.cluster.replace('-', ' ')} Hub`,
    url: `/tools/${currentTool.cluster}`,
    type: 'hub'
  });

  // Find siblings in the same cluster (excluding the current tool)
  const siblings = allTools.filter(t => t.cluster === currentTool.cluster && t.slug !== currentTool.slug);

  // Pick up to 3 siblings
  siblings.slice(0, 3).forEach(sibling => {
    links.push({
      name: sibling.name,
      url: `/tools/${sibling.cluster}/${sibling.slug}`,
      type: 'sibling'
    });
  });

  // Optional: Find 1 cross-cluster link based on shared tags
  const crossCluster = allTools.find(t =>
    t.cluster !== currentTool.cluster &&
    t.tags.some(tag => currentTool.tags.includes(tag))
  );

  if (crossCluster) {
    links.push({
      name: crossCluster.name,
      url: `/tools/${crossCluster.cluster}/${crossCluster.slug}`,
      type: 'cross-cluster'
    });
  }

  return links;
}
