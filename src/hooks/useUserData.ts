'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';
import { getCurrentUser } from '@/apis/user/getCurrentUser';
import { getUserById } from '@/apis/user/getUserById';
import { getExpertById } from '@/apis/expert/getExpertById';
import { Expert } from '@/types/user';

interface UserData {
  id: number;
  email: string;
  name: string;
  profileImage: string;
  phone: string;
  accountStatus: string;
}

interface ExpertData extends Expert {
  expertId: number;
}

interface UseUserDataResult {
  memberInfo: UserData | null;
  expertInfo: ExpertData | null;
  isLoading: boolean;
  error: Error | null;
}

export function useUserData(): UseUserDataResult {
  const router = useRouter();
  const { member: storeMember } = useUserStore();
  const [memberInfo, setMemberInfo] = useState<UserData | null>(null);
  const [expertInfo, setExpertInfo] = useState<ExpertData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

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

        // 사용자 기본 정보 조회
        const userData = await getUserById({ userId: memberId });
        setMemberInfo(userData);

        // 전문가 정보가 있는 경우 조회
        if (storeMember?.expertId) {
          const expertData = await getExpertById({ expertId: storeMember.expertId });
          setExpertInfo({
            ...expertData,
            expertId: expertData.id,
          });
        }
      } catch (err) {
        console.error('사용자 정보 조회 실패:', err);
        setError(err instanceof Error ? err : new Error('알 수 없는 오류가 발생했습니다'));

        if (err instanceof Error && err.message.includes('401')) {
          router.push('/');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, [router, storeMember]);

  return { memberInfo, expertInfo, isLoading, error };
}
