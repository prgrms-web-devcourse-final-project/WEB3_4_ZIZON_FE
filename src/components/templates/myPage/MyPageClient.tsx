'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useUserStore } from '@/store/userStore';
import { getCurrentUser } from '@/apis/user/getCurrentUser';
import { getUserById } from '@/apis/user/getUserById';
import MypageSidebar from '@/components/organisms/sidebar/mypageSidebar/MypageSidebar';

interface MyPageClientProps {
  children: React.ReactNode;
}

export default function MyPageClient({ children }: MyPageClientProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [profileInfo, setProfileInfo] = useState<{
    profileImage: string;
    name: string;
  } | null>(null);
  const { member: storeMember } = useUserStore();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        let memberId: number;

        if (storeMember?.id) {
          memberId = storeMember.id;
        } else {
          const userInfo = await getCurrentUser();
          if (!userInfo) {
            router.push('/');
            return;
          }
          memberId = userInfo.id;
        }

        const memberInfo = await getUserById({ userId: memberId });
        setProfileInfo({
          profileImage: memberInfo.profileImage,
          name: memberInfo.name,
        });
      } catch (error) {
        console.error('사용자 정보 조회 실패:', error);
        if (error instanceof Error && error.message.includes('401')) {
          router.push('/');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, [router, storeMember]);

  if (isLoading || !profileInfo) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div>로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="flex gap-36 justify-center my-72">
      <MypageSidebar profileInfo={profileInfo} />
      <main className="w-750">{children}</main>
    </div>
  );
}
