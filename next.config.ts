import type { NextConfig } from 'next';
import nextI18NextConfig from './next-i18next.config.js';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...nextI18NextConfig,
  compress: true,
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
