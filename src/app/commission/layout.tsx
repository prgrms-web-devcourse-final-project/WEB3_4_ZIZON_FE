import type { Metadata } from 'next';
import '../globals.css';
import ReactQueryClientProvider from '@/config/ReactQueryClientProvider';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: '💫DopDang',
  description: 'Serve you the professional touch',
};

const pretendard = localFont({
  src: '../../../public/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '300 700',
  variable: '--font-pretendard',
  fallback: ['Arial', 'sans-serif'],
});

export default function CommissionLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
    <body className={`${pretendard.className} bg-black2`}>
    <ReactQueryClientProvider>
      <main className="w-fit mx-auto pb-200">{children}</main>
    </ReactQueryClientProvider>
    </body>
    </html>
  );
}
