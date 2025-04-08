'use client';

import { useState, useEffect, useCallback } from 'react';
import { Member, Expert } from '@/types/user';
import { useUserStore } from '@/store/userStore';
import { getCurrentUser } from '@/apis/user/getCurrentUser';
import { getUserById } from '@/apis/user/getUserById';
import { getExpertById } from '@/apis/expert/getExpertById';

interface UserDataError {
  message: string;
  source: 'member' | 'expert';
}

export function useUserData() {
  const { currentRole, setCurrentRole, member: storeMember, setExpert, logout } = useUserStore();
  const [memberInfo, setMemberInfo] = useState<Member | null>(null);
  const [expertInfo, setExpertInfo] = useState<Expert | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<UserDataError | null>(null);

  // 공통 로딩 및 에러 처리 함수
  const handleLoading = useCallback((isLoadingState: boolean) => {
    setIsLoading(isLoadingState);
  }, []);

  const handleError = useCallback((err: unknown, source: 'member' | 'expert') => {
    console.error(`${source === 'member' ? '사용자' : '전문가'} 정보 조회 실패:`, err);
    setError({
      message:
        err instanceof Error
          ? err.message
          : `${source === 'member' ? '사용자' : '전문가'} 정보 조회 실패`,
      source,
    });
  }, []);

  // 사용자 기본 정보 가져오기 (MEMBER 테이블 데이터)
  const fetchMemberInfo = useCallback(async () => {
    handleLoading(true);
    setError(null);

    try {
      let memberId;

      if (storeMember?.id) {
        memberId = storeMember.id;
      } else {
        const userInfo = await getCurrentUser();

        if (!userInfo) {
          await logout();
          return;
        }

        memberId = userInfo.id;
      }

      // 사용자 정보 가져오기
      const response = await getUserById({ userId: memberId });
      setMemberInfo(response);
    } catch (err) {
      handleError(err, 'member');
    } finally {
      handleLoading(false);
    }
  }, [storeMember, logout, handleLoading, handleError]);

  // 전문가 정보 가져오기 (EXPERT 테이블 데이터)
  const fetchExpertInfo = useCallback(async () => {
    // storeMember가 없거나 expertId가 없는 경우 종료
    if (!storeMember?.expertId) {
      return;
    }

    handleLoading(true);
    setError(null);

    try {
      const expertData = await getExpertById({ expertId: storeMember.expertId });
      setExpertInfo(expertData);
      setExpert(expertData); // store에 전문가 정보 저장
    } catch (err) {
      handleError(err, 'expert');
      // 전문가 정보 조회 실패 시 클라이언트 역할로 변경
      setCurrentRole('client');
    } finally {
      handleLoading(false);
    }
  }, [storeMember, setExpert, setCurrentRole, handleLoading, handleError]);

  // 사용자 정보 초기 로드
  useEffect(() => {
    fetchMemberInfo();
  }, [fetchMemberInfo]);

  // 전문가 정보 로드 (storeMember가 변경될 때만)
  useEffect(() => {
    if (storeMember?.expertId) {
      fetchExpertInfo();
    }
  }, [storeMember?.expertId, fetchExpertInfo]);

  return {
    memberInfo,
    expertInfo,
    isLoading,
    error,
    role: currentRole,
  };
}
