/**
 * Rendering Strategy Recommendations for Next.js App Router
 *
 * Guide to choosing the correct rendering strategy based on tool requirements.
 */

export type RenderingStrategy = 'SSR' | 'SSG' | 'ISR';

export interface RenderingRecommendation {
  strategy: RenderingStrategy;
  reason: string;
  nextjsPattern: string;
}

export function getRenderingStrategy(toolType: string): RenderingRecommendation {
  switch (toolType) {
    case 'real-time-converter':
      // e.g., kg to lbs. Output is deterministic, but URL params might drive it. Usually SSG or ISR if combinations are finite.
      // If it relies on pure client-side JS for the calc with no URL state, SSG is perfect.
      return {
        strategy: 'SSG',
        reason: 'Client-side calculation with no server dependencies. Maximum edge cache hit rate.',
        nextjsPattern: `export const dynamic = "force-static";`,
      };

    case 'pdf-generator':
      // e.g., PDF thumbnail generator. Depends on uploaded file (user specific).
      return {
        strategy: 'SSR',
        reason: 'Requires server processing of a user-uploaded file that cannot be pre-computed.',
        nextjsPattern: `export const dynamic = "force-dynamic";`,
      };

    case 'static-guide':
      // e.g., "list of best PDF tools"
      return {
        strategy: 'SSG',
        reason: 'Content rarely changes and is identical for all users.',
        nextjsPattern: `export const dynamic = "force-static";`,
      };

    case 'color-generator':
      // e.g., hex code input -> deterministic output. Might use URL params like ?hex=FF0000.
      // If server-rendered based on params, SSR is needed to read searchParams.
      // Alternatively, if it's purely client side, SSG is fine. Assuming we want SEO for ?hex=...
      return {
        strategy: 'SSR',
        reason: 'If we want unique indexed URLs for specific colors, we need to read searchParams on the server.',
        nextjsPattern: `export const dynamic = "force-dynamic";`,
      };

    case 'template-showcase':
      // e.g., resume template showcase. Data updates occasionally when new templates are added.
      return {
        strategy: 'ISR',
        reason: 'Content updates periodically from a CMS or DB, but doesn\'t need real-time rendering.',
        nextjsPattern: `export const revalidate = 3600; // revalidate every hour`,
      };

    case 'educational-guide':
      // e.g., "what is CMYK"
      return {
        strategy: 'SSG',
        reason: 'Educational content is static and identical for all users.',
        nextjsPattern: `export const dynamic = "force-static";`,
      };

    default:
      return {
        strategy: 'SSR',
        reason: 'Safe default for unknown dynamic content.',
        nextjsPattern: `export const dynamic = "force-dynamic";`,
      };
  }
}
