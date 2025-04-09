'use client';

import { useRouter } from 'next/navigation';
import DopdangLogo from '@/components/atoms/icons/dopdangLogo/DopdangLogo';
import SignupForm from '@/components/organisms/auth/signupForm/SignupForm';
import OrSeparator from '@/components/atoms/texts/orSeparator/OrSeparator';
import SocialLoginButtonConainter from '@/components/molecules/socialLoginButtonConainter/SocialLoginButtonConainter';
import { SignupFormData } from '@/utils/FormValidator';
import { APIBuilder } from '@/utils/APIBuilder';
import { ApiError } from '@/types/api';

const initialFormData: SignupFormData = {
  email: '',
  password: '',
  passwordCheck: '',
  name: '',
  phoneNumber: '',
  authCode: '',
};

const SignupPageTemplate = () => {
  const router = useRouter();

  // 회원가입 제출 처리
  const handleSignupSubmit = async (data: SignupFormData) => {
    try {
      // API 명세서에 맞게 요청 데이터 구조 변경
      const requestData = {
        email: data.email,
        password: data.password,
        name: data.name,
        verifyCodeRequest: {
          phone: data.phoneNumber,
          code: data.authCode || '',
        },
      };

      const response = await APIBuilder.post('/users/signup', requestData).build().call();

      if (response.status === 200) {
        alert('회원가입에 성공했습니다.');
        router.push('/login');
      }
    } catch (error) {
      // API 명세서에 맞게 에러 처리 개선
      if (error instanceof ApiError) {
        if (error.status === 400) {
          if (error.code === 'SIGNUP_MISSING_FIELD') {
            alert('필수 입력값이 누락되었습니다.');
          } else if (error.code === 'INVALID_EMAIL_FORMAT') {
            alert('이메일 형식이 올바르지 않습니다.');
          } else if (error.code === 'INVALID_PASSWORD_FORMAT') {
            alert('비밀번호는 8자 이상, 특수문자를 포함해야 합니다.');
          } else {
            alert(error.message || '요청 데이터의 형식이 올바르지 않습니다.');
          }
        } else if (error.status === 401) {
          if (error.code === 'INVALID_OAUTH_TOKEN') {
            alert('인증이 필요하거나 유효하지 않은 토큰입니다.');
          } else {
            alert('인증에 실패했습니다. 다시 시도해주세요.');
          }
        } else if (error.status === 409) {
          if (error.code === 'EMAIL_ALREADY_EXISTS') {
            alert('이미 가입된 이메일입니다.');
          } else if (error.code === 'PHONE_ALREADY_EXISTS') {
            alert('이미 등록된 전화번호입니다.');
          } else {
            alert(error.message || '회원가입 중 오류가 발생했습니다.');
          }
        } else if (error.status === 500) {
          if (error.code === 'SIGNUP_SERVER_ERROR') {
            alert('회원가입 처리 중 오류가 발생했습니다.');
          } else {
            alert('서버 내부 오류가 발생했습니다.');
          }
        } else {
          alert(error.message || '회원가입에 실패했습니다.');
        }
      } else {
        alert('회원가입에 실패했습니다.');
      }
    }
  };

  // 전화번호 인증 처리
  const handlePhoneVerification = async (data: SignupFormData): Promise<boolean> => {
    try {
      // 인증번호 요청 시에는 code를 빈 문자열로 보냄
      const requestData = {
        email: data.email,
        password: data.password,
        name: data.name,
        verifyCodeRequest: {
          phone: data.phoneNumber,
        },
      };

      // 인증번호 요청 시 API 호출 (성공/실패 여부 상관 없음)
      const response = await APIBuilder.post('/users/signup', requestData).build().call();

      // 인증번호 요청 성공 시 true 반환
      return response.status === 200;
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.status === 400) {
          if (error.code === 'INVALID_EMAIL_FORMAT') {
            alert('이메일 형식이 올바르지 않습니다.');
          } else if (error.code === 'INVALID_PASSWORD_FORMAT') {
            alert('비밀번호는 8자 이상, 특수문자를 포함해야 합니다.');
          } else {
            alert('전화번호 형식이 올바르지 않습니다.');
          }
        } else if (error.status === 401) {
          if (error.code === 'INVALID_OAUTH_TOKEN') {
            alert('인증이 필요하거나 유효하지 않은 토큰입니다.');
          } else {
            alert('인증에 실패했습니다. 다시 시도해주세요.');
          }
        } else if (error.status === 409) {
          if (error.code === 'PHONE_ALREADY_EXISTS') {
            alert('이미 등록된 전화번호입니다.');
          } else {
            alert(error.message || '전화번호 인증 중 오류가 발생했습니다.');
          }
        } else if (error.status === 500) {
          if (error.code === 'SIGNUP_SERVER_ERROR') {
            alert('회원가입 처리 중 오류가 발생했습니다.');
          } else {
            alert('서버 내부 오류가 발생했습니다.');
          }
        } else {
          alert('전화번호 인증 중 오류가 발생했습니다.');
        }
      } else {
        alert('전화번호 인증 중 오류가 발생했습니다.');
      }
      return false;
    }
  };

  return (
    <div className="flex flex-col items-center mt-72">
      <DopdangLogo type="signup" />
      <SignupForm
        formData={initialFormData}
        onSubmit={handleSignupSubmit}
        onPhoneVerification={handlePhoneVerification}
      />
      <OrSeparator />
      <SocialLoginButtonConainter />
    </div>
  );
};

export default SignupPageTemplate;
