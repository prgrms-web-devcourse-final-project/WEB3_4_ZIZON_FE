'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import DopdangLogo from '@/components/atoms/icons/dopdangLogo/DopdangLogo';
import LoginForm from '@/components/organisms/auth/loginForm/LoginForm';
import GoToSignUp from '@/components/atoms/texts/goToSignUp/GoToSignUp';
import SocialLoginButtonConainter from '@/components/molecules/socialLoginButtonConainter/SocialLoginButtonConainter';
import { BaseFormData } from '@/utils/FormValidator';
import { APIBuilder } from '@/utils/APIBuilder';
import { ApiError } from '@/types/api';
import { useUserStore } from '@/store/userStore';
import { Member } from '@/types/user';
import { toast } from 'sonner';

const LoginPageTemplate = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setMember, member } = useUserStore();

  // URL 파라미터에서 사용자 정보 확인
  useEffect(() => {
    const userParam = searchParams.get('user');

    if (userParam) {
      try {
        // URL 디코딩 및 JSON 파싱
        const decodedUserParam = decodeURIComponent(userParam);
        const memberData = JSON.parse(decodedUserParam) as Member;

        // 사용자 정보를 Zustand 스토어에 저장
        setMember(memberData);

        // 메인 페이지로 리다이렉트
        router.push('/');
      } catch (error) {
        console.error('소셜 로그인 데이터 처리 중 오류:', error);
      }
    }
  }, [searchParams, setMember, router]);

  // 이미 로그인된 사용자는 메인 페이지로 리다이렉트
  useEffect(() => {
    // URL에 user 파라미터가 없고, member 정보가 있는 경우에만 리다이렉트
    if (member && !searchParams.get('user')) {
      router.push('/');
    }
  }, [member, router, searchParams]);

  // 로그인 제출 처리
  const handleLoginSubmit = async (data: BaseFormData) => {
    try {
      const response = await APIBuilder.post('/users/login', data).build().call();

      if (response.status === 200) {
        setMember(response.data as Member);
        router.push('/');
      }
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.status === 400) {
          toast.error('요청 데이터의 형식이 올바르지 않습니다.');
        } else if (error.status === 401) {
          toast.error('이메일 혹은 비밀번호가 올바르지 않습니다.');
        } else if (error.status === 403) {
          toast.error('로그인이 제한된 계정입니다.');
        } else if (error.status === 404) {
          toast.error('존재하지 않는 이메일입니다.');
        } else if (error.status === 429) {
          toast.error('로그인 시도 횟수가 초과되었습니다.');
        } else if (error.status === 500) {
          toast.error('서버 내부 오류가 발생했습니다.');
        } else {
          toast.error(error.message || '로그인 중 오류가 발생했습니다.');
        }
      } else {
        toast.error('로그인 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center mt-72">
      <DopdangLogo type="en" />
      <LoginForm onSubmit={handleLoginSubmit} />
      <GoToSignUp />
      <SocialLoginButtonConainter />
    </div>
  );
};

export default LoginPageTemplate;
