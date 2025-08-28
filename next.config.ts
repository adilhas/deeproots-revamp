import type { NextConfig } from 'next';
import nextI18NextConfig from './next-i18next.config.js';
// import withBundleAnalyzer from '@next/bundle-analyzer';

const isDev = process.env.NODE_ENV === 'development';
// const withAnalyzer = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `default-src 'self'; script-src 'self'${isDev ? " 'unsafe-eval'" : ''}; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://i.postimg.cc; connect-src 'self'; font-src 'self'; frame-ancestors 'none';`,
  },
  { key: 'Referrer-Policy', value: 'same-origin' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: nextI18NextConfig.i18n,
  compress: true,
  images: {
    domains: ['i.postimg.cc'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    // unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
