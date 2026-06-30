import { seoConfig } from "@/config/seo.config";

/**
 * Normalizes a route path.
 * Ensures lowercase, removes duplicate slashes, removes trailing slashes.
 */
export function normalizeRoute(route: string): string {
  if (!route) return '/';
  let normalized = route.toLowerCase();

  // Remove duplicate slashes (except protocol `://`)
  normalized = normalized.replace(/([^:]\/)\/+/g, '$1');

  // Remove trailing slash if it's not just '/'
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }

  return normalized;
}

/**
 * Sanitizes a slug string to strictly follow kebab-case.
 */
export function sanitizeSlug(slug: string): string {
  if (!slug) return '';
  return slug
    .toLowerCase()
    .trim()
    // Replace spaces and underscores with hyphens
    .replace(/[\s_]+/g, '-')
    // Remove non-alphanumeric characters (except hyphens)
    .replace(/[^a-z0-9-]/g, '')
    // Remove duplicate hyphens
    .replace(/-+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-+|-+$/g, '');
}

/**
 * Generates a clean canonical URL for a given path.
 * Strips query parameters, normalizes path, and enforces HTTPS.
 */
export function generateCanonicalUrl(path: string): string {
  const baseUrl = seoConfig.global.url.replace(/\/+$/, ''); // Remove trailing slashes from base URL

  // Handle absolute URLs passed as path
  if (path.startsWith('http')) {
    try {
      const url = new URL(path);
      // If it matches our base domain, we can extract the pathname
      if (url.origin === baseUrl) {
        path = url.pathname;
      } else {
        // External URL, return normalized version
        url.search = '';
        return normalizeRoute(url.toString());
      }
    } catch {
      // Invalid URL
    }
  }

  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // Remove query parameters from path if they exist
  const pathWithoutQuery = cleanPath.split('?')[0];

  const normalizedPath = normalizeRoute(pathWithoutQuery);

  // Combine base and path
  if (normalizedPath === '/') {
    return baseUrl;
  }

  return `${baseUrl}${normalizedPath}`;
}

/**
 * Validates an internal link, ensuring it meets standards.
 * Returns the normalized valid link or null if invalid.
 */
export function validateInternalLink(link: string): string | null {
  if (!link) return null;

  // Skip external links or anchor links
  if (link.startsWith('http') || link.startsWith('mailto:') || link.startsWith('#')) {
    return link;
  }

  // Internal paths
  if (!link.startsWith('/')) {
     link = `/${link}`;
  }

  // Basic validation that it doesn't contain weird characters
  // We allow query strings on internal links but validate the path part
  const [pathPart, queryPart] = link.split('?');

  const normalizedPath = normalizeRoute(pathPart);

  // If it's a completely malformed path after normalization, return null
  if (normalizedPath === '' && link !== '') return null;

  return queryPart ? `${normalizedPath}?${queryPart}` : normalizedPath;
}
