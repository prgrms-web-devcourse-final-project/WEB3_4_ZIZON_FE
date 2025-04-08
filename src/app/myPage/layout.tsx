'use client';

import '../globals.css';
import ReactQueryClientProvider from '@/config/ReactQueryClientProvider';
import { useRouter } from 'next/navigation';
import MypageSidebar from '@/components/organisms/sidebar/mypageSidebar/MypageSidebar';
import { useUserStore } from '@/store/userStore';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '@/apis/user/getCurrentUser';
import { getUserById } from '@/apis/user/getUserById';

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [profileInfo, setProfileInfo] = useState<{
    profileImage: string;
    name: string;
  } | null>(null);
  const { member: storeMember, logout } = useUserStore();

  // 사용자 정보 가져오기
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        let memberId;

        if (storeMember && storeMember?.id) {
          memberId = storeMember.id;
        } else {
          // store에 저장된 member의 id가 없는 경우 현재 사용자의 정보를 요청하고 id를 가져옴
          const userInfo = await getCurrentUser();
          memberId = userInfo.id;

          if (!userInfo) {
            await logout();
            return;
          }
        }

        const memberInfo = await getUserById({ userId: memberId });

        // 프로필 정보 설정
        setProfileInfo({
          profileImage: memberInfo.profileImage,
          name: memberInfo.name,
        });
      } catch (error) {
        // API 호출 실패 시 상세 로깅
        console.error('사용자 정보 조회 실패:', error);

        // 에러 유형에 따른 처리
        if (error instanceof Error) {
          console.error(`에러 메시지: ${error.message}`);
          console.error(`에러 스택: ${error.stack}`);
        }

        // store 초기화 및 로그인 페이지로 리다이렉트
        await logout();
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, [router, storeMember, logout]);

  // 로딩 중이거나 프로필 정보가 없는 경우 처리
  if (isLoading || !profileInfo) {
    return (
      <ReactQueryClientProvider>
        <div className="flex items-center justify-center h-screen">
          <div>로딩 중...</div>
        </div>
      </ReactQueryClientProvider>
    );
  }

  return (
    <ReactQueryClientProvider>
      <div className="flex gap-36 justify-center my-72">
        <MypageSidebar profileInfo={profileInfo} />
        <main className="w-750">{children}</main>
      </div>
    </ReactQueryClientProvider>
  );
}
