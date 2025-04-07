'use client';

import { useRouter } from 'next/navigation';
import DopdangLogo from '@/components/atoms/icons/dopdangLogo/DopdangLogo';
import LoginForm from '@/components/organisms/auth/loginForm/LoginForm';
import GoToSignUp from '@/components/atoms/texts/goToSignUp/GoToSignUp';
import SocialLoginButtonConainter from '@/components/molecules/socialLoginButtonConainter/SocialLoginButtonConainter';
import { BaseFormData } from '@/utils/FormValidator';
import { APIBuilder } from '@/utils/APIBuilder';
import { ApiError } from '@/types/api';

const LoginPageTemplate = () => {
  const router = useRouter();

  // 로그인 제출 처리
  const handleLoginSubmit = async (data: BaseFormData) => {
    try {
      const response = await APIBuilder.post('/users/login', data).build().call();

      if (response.status === 200) {
        // 로그인 성공 시 메인 페이지로 이동
        router.push('/');
      }
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.status === 400) {
          alert('요청 데이터의 형식이 올바르지 않습니다.');
        } else if (error.status === 401) {
          alert('인증이 필요하거나 유효하지 않은 토큰입니다.');
        } else if (error.status === 403) {
          alert('로그인이 제한된 계정입니다.');
        } else if (error.status === 404) {
          alert('존재하지 않는 이메일입니다.');
        } else if (error.status === 429) {
          alert('로그인 시도 횟수가 초과되었습니다.');
        } else if (error.status === 500) {
          alert('서버 내부 오류가 발생했습니다.');
        } else {
          alert(error.message || '로그인 중 오류가 발생했습니다.');
        }
      } else {
        alert('로그인 중 오류가 발생했습니다.');
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
