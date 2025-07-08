import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow public access to these paths
  const isPublicPath =
    pathname.startsWith('/admin/login') ||
    pathname.startsWith('/seeder/login') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/api');

  if (isPublicPath) {
    return NextResponse.next();
  }

  // Get session token from NextAuth
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If user is not logged in, redirect to respective login page
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
  matcher: ['/admin/:path*', '/seeder/:path*'],
};
