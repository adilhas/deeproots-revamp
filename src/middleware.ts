import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const siteUrl = process.env.NEXTAUTH_URL || 'https://www.deeproots.earth';
  const isDev = process.env.NODE_ENV !== 'production';

  function generateNonce() {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return btoa(String.fromCharCode(...array));
  }

  const nonce = generateNonce();

  const csp = `
    default-src 'self';
    connect-src 'self';
    img-src 'self' ${siteUrl} data:;
    script-src 'self' 'nonce-${nonce}'${isDev ? " 'unsafe-eval'" : ''};
    style-src 'self' 'unsafe-inline';
    object-src 'none';
    base-uri 'self';
    frame-ancestors 'none';
  `
    .replace(/\s{2,}/g, ' ')
    .trim();

  // Allow public access to these paths
  const isPublicPath =
    pathname.startsWith('/admin/login') ||
    pathname.startsWith('/seeder/login') ||
    pathname.startsWith('/seeder/forget-password') ||
    pathname.startsWith('/seeder/reset-password') ||
    pathname.startsWith('/seeder/create-account') ||
    pathname.startsWith('/api/private-seed') ||
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/api/auth/') ||
    pathname.startsWith('/api/seeder/create-account') ||
    pathname.startsWith('/api/seeder/forget-password') ||
    pathname.startsWith('/api/seeder/reset-password') ||
    pathname.startsWith('/api/seeder/validate-token') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/cron/') ||
    pathname.startsWith('/api/cron/maintenance/') ||
    pathname.startsWith('/favicon');

  if (isPublicPath) {
    const res = NextResponse.next();
    res.headers.set('Content-Security-Policy', csp);
    res.headers.set('x-nonce', nonce);
    return res;
  }

  // Get session token from NextAuth
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If user is not logged in, redirect or block as appropriate
  if (!token) {
    if (pathname.startsWith('/admin')) {
      const loginUrl = new URL('/admin/login', req.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (pathname.startsWith('/seeder')) {
      const loginUrl = new URL('/seeder/login', req.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (pathname.startsWith('/api')) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
  }

  // If logged in but role doesn't match the route, redirect to correct login
  if (token?.role === 'seeder' && pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  if (token?.role === 'admin' && pathname.startsWith('/seeder')) {
    return NextResponse.redirect(new URL('/seeder/login', req.url));
  }

  // return NextResponse.next();
  // Default: allow & set CSP
  const res = NextResponse.next();
  res.headers.set('Content-Security-Policy', csp);
  res.headers.set('x-nonce', nonce);
  return res;
}
export const config = {
  matcher: ['/admin/:path*', '/seeder/:path*'],
};
