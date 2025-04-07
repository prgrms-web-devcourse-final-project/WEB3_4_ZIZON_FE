'use client';

import { useState, useEffect } from 'react';
import { APIBuilder } from '@/utils/APIBuilder';
import { Member, Expert } from '@/types/user';
import { useUserStore } from '@/store/userStore';

export function useUserData() {
  const { currentRole, setCurrentRole } = useUserStore();
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
        // 임시 id 조회 로직
        const userInfo = await APIBuilder.get(`/users/me`).build().call<Member>();
        const memberId = userInfo.data.id;

        // 사용자 정보 가져오기
        const response = await APIBuilder.get(`/users/${memberId}`).build().call<Member>();
        setMemberInfo(response.data);
      } catch (err) {
        console.error('사용자 정보 조회 실패:', err);
        setError(err instanceof Error ? err : new Error('사용자 정보 조회 실패'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchMemberInfo();
  }, [currentRole]); // currentRole이 변경될 때마다 사용자 정보를 다시 가져옴

  // 역할이 expert일 경우 EXPERT 테이블 정보 가져오기
  useEffect(() => {
    const fetchExpertInfo = async () => {
      if (!memberInfo || currentRole !== 'expert') {
        setExpertInfo(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await APIBuilder.get(`/experts/${memberInfo.id}`).build().call<Expert>();
        setExpertInfo(response.data);
      } catch (err) {
        console.error('전문가 정보 조회 실패:', err);
        // 전문가 정보 조회 실패 시 alert 표시
        alert('전문가 등록이 되지 않은 사용자입니다.');
        // currentRole을 'client'로 변경
        setCurrentRole('client');
        setError(err instanceof Error ? err : new Error('전문가 정보 조회 실패'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchExpertInfo();
  }, [memberInfo, currentRole, setCurrentRole]);

  return {
    memberInfo,
    expertInfo,
    isLoading,
    error,
    role: currentRole,
  };
}
