import type { Metadata } from 'next';
import './globals.css';
import ReactQueryClientProvider from '@/config/ReactQueryClientProvider';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: '💫DopDang',
  description: 'Serve you the professional touch',
};

const pretendard = localFont({
  src: '../../public/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '400 700',
  variable: '--font-pretendard',
  fallback: ['Arial', 'sans-serif'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en" className={`${pretendard.variable}`}>
        <body className={`${pretendard.className}`}>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
