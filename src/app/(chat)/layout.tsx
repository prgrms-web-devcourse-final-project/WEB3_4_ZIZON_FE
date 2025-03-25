import type { Metadata } from 'next';
import '../globals.css';
import ReactQueryClientProvider from '@/config/ReactQueryClientProvider';

export const metadata: Metadata = {
  title: '💫DopDang',
  description: 'Serve you the professional touch',
};

export default function ChatLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
      <body>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
