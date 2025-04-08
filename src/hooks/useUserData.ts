'use client';

import { useState, useEffect } from 'react';
import { Member, Expert } from '@/types/user';
import { useUserStore } from '@/store/userStore';
import { getCurrentUser } from '@/apis/user/getCurrentUser';
import { getUserById } from '@/apis/user/getUserById';
import { getExpertById } from '@/apis/expert/getExpertById';

export function useUserData() {
  const { currentRole, setCurrentRole, member: storeMember, setExpert, logout } = useUserStore();
  const [memberInfo, setMemberInfo] = useState<Member | null>(null);
  const [expertInfo, setExpertInfo] = useState<Expert | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // 사용자 기본 정보 가져오기 (MEMBER 테이블 데이터)
  useEffect(() => {
    const fetchMemberInfo = async () => {
      setIsLoading(true);
      setError(null);

      try {
        let memberId;

        if (storeMember && storeMember?.id) {
          memberId = storeMember.id;
        } else {
          // 임시 id 조회 로직
          const userInfo = await getCurrentUser();
          memberId = userInfo.id;

          if (!userInfo) {
            await logout();
            return;
          }
        }

        // 사용자 정보 가져오기
        const response = await getUserById({ userId: memberId });
        setMemberInfo(response);
      } catch (err) {
        console.error('사용자 정보 조회 실패:', err);
        setError(err instanceof Error ? err : new Error('사용자 정보 조회 실패'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchMemberInfo();
  }, [currentRole, storeMember, logout]);

  // storeMember.expertId가 존재할 경우 EXPERT 테이블 정보 가져오기
  useEffect(() => {
    const fetchExpertInfo = async () => {
      // storeMember가 없는 경우 로딩 상태만 변경하고 종료
      if (!storeMember) {
        setIsLoading(false);
        return;
      }

      // expert_id가 없는 경우 전문가 정보를 가져오지 않음
      if (!storeMember.expertId) {
        setIsLoading(false);
        return;
      }

      // 전문가 정보를 가져오는 경우에만 로딩 상태 설정
      setIsLoading(true);
      setError(null);

      try {
        const expertData = await getExpertById({ expertId: storeMember.expertId });
        setExpertInfo(expertData);
        setExpert(expertData); // store에 전문가 정보 저장
      } catch (err) {
        console.error('전문가 정보 조회 실패:', err);
        // 전문가 정보 조회 실패 시 클라이언트 역할로 변경하고 에러 설정
        setCurrentRole('client');
        setError(err instanceof Error ? err : new Error('전문가 정보 조회 실패'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchExpertInfo();
  }, [storeMember, setCurrentRole, setExpert]);

  return {
    memberInfo,
    expertInfo,
    isLoading,
    error,
    role: currentRole,
  };
}
