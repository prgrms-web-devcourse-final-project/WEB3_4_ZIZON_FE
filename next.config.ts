import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [`${process.env.S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`],
  },
};

export default nextConfig;
