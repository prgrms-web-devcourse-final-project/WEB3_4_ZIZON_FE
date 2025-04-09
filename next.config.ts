import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      `${process.env.S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
      'lh3.googleusercontent.com',
      'k.kakaocdn.net',
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
