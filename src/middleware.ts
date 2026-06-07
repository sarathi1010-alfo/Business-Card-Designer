import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // If the request comes from a *.vercel.app domain, append an X-Robots-Tag
  // header to instruct search engines NOT to index the preview/deployment URL.
  // This ensures only the custom production domain is indexed.
  if (hostname.includes('vercel.app')) {
    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  return NextResponse.next();
}

// Apply the middleware to all paths
export const config = {
  matcher: '/:path*',
};