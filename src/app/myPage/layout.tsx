import type { Metadata } from 'next';
import '../globals.css';
import ReactQueryClientProvider from '@/config/ReactQueryClientProvider';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import MypageSidebar from '@/components/organisms/sidebar/mypageSidebar/MypageSidebar';

export const metadata: Metadata = {
  title: '💫DopDang',
  description: 'Serve you the professional touch',
};

export default async function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const userRole = cookieStore.get('user_role')?.value || 'expert';
  const userName = cookieStore.get('name')?.value || '사용자';
  const profileImage = cookieStore.get('profile_image')?.value || '/images/defaultImage.png';
  const majorCategory = cookieStore.get('major_category')?.value;

  // 전문가가 아닌 사용자가 전문가 관련 페이지에 접근하려고 할 때
  if (userRole !== 'expert') {
    const path = cookieStore.get('path')?.value;
    if (path?.includes('expertInfo') || path?.includes('saleProduct')) {
      redirect('/myPage/myInfo');
    }
  }

  const profileInfo = {
    profileImage,
    userName,
    ...(userRole === 'expert' && { certificationBadgeText: majorCategory || 'OO' }),
  };

  return (
    <ReactQueryClientProvider>
      <html lang="kr">
        <body>
          <div className="grid grid-cols-12 gap-24 w-1920 px-320 mx-auto my-72">
            <MypageSidebar
              profileInfo={profileInfo}
              initialRole={userRole === 'expert' ? 'expert' : 'client'}
            />
            <main className="col-start-5 col-end-11">{children}</main>
          </div>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
