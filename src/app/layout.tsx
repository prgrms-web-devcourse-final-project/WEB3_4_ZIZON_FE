import type { Metadata } from 'next';
import './globals.css';
import ReactQueryClientProvider from '@/config/ReactQueryClientProvider';
import localFont from 'next/font/local';
import DesktopNavigation from '@/components/organisms/desktopNavigation/DesktopNavigation';

export const metadata: Metadata = {
  title: '💫DopDang',
  description: 'Serve you the professional touch',
};

const pretendard = localFont({
  src: '../../public/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '300 700',
  variable: '--font-pretendard',
  fallback: ['Arial', 'sans-serif'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <ReactQueryClientProvider>
        <body className={`${pretendard.className}`}>
          <DesktopNavigation />
          <main className="w-full mx-320">{children}</main>
        </body>
      </ReactQueryClientProvider>
    </html>
  );
}
