import '../globals.css';
import ReactQueryClientProvider from '@/config/ReactQueryClientProvider';
import MyPageClient from '@/components/templates/myPage/MyPageClient';

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <MyPageClient>{children}</MyPageClient>
    </ReactQueryClientProvider>
  );
}
