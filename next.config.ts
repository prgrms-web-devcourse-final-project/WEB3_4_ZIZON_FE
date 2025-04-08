import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    domains: [
      'devcouse4-team16-bucket.s3.ap-northeast-2.amazonaws.com',
      'lh3.googleusercontent.com',
      'k.kakaocdn.net',
    ],
    formats: ['image/avif', 'image/webp'],
    domains: [`${process.env.S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`],
  },
};

export default nextConfig;
