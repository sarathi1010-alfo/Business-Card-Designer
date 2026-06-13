import LZString from "lz-string";
import { Template } from "@/types/editor";

export function compressTemplateToUrl(template: Template): string {
  const jsonString = JSON.stringify(template);
  const compressed = LZString.compressToEncodedURIComponent(jsonString);
  // Get origin safely for SSR
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  return `${origin}/share?data=${compressed}`;
}

export function decompressTemplateFromUrl(compressed: string): Template | null {
  try {
    const decompressed = LZString.decompressFromEncodedURIComponent(compressed);
    if (!decompressed) return null;
    return JSON.parse(decompressed) as Template;
  } catch (error) {
    console.error("Failed to decompress template:", error);
    return null;
  }
}
