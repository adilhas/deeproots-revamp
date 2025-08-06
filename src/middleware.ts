import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { rateLimit } from './lib/rateLimit';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const ip =
    req.headers.get('x-forwarded-for') ||
    req.headers.get('x-real-ip') ||
    '127.0.0.1';

  if (!rateLimit(String(ip))) {
    return new NextResponse('Too many requests', { status: 429 });
  }

  // Allow public access to these paths
  const isPublicPath =
    pathname.startsWith('/admin/login') ||
    pathname.startsWith('/seeder/login') ||
    pathname.startsWith('/seeder/forget-password') ||
    pathname.startsWith('/seeder/reset-password') ||
    pathname.startsWith('/seeder/create-account') ||
    pathname.startsWith('/api/private-seed') ||
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/api/seeder/create-account') ||
    pathname.startsWith('/api/seeder/forget-password') ||
    pathname.startsWith('/api/seeder/reset-password') ||
    pathname.startsWith('/api/seeder/validate-token') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon');

  if (isPublicPath) {
    return NextResponse.next();
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

  return NextResponse.next();
}
export const config = {
  matcher: ['/admin/:path*', '/seeder/:path*', '/api/:path*'],
};
