'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DopdangLogo from '@/components/atoms/icons/dopdangLogo/DopdangLogo';
import SignupForm from '@/components/organisms/auth/signupForm/SignupForm';
import OrSeparator from '@/components/atoms/texts/orSeparator/OrSeparator';
import SocialLoginButtonConainter from '@/components/molecules/socialLoginButtonConainter/SocialLoginButtonConainter';
import { SignupFormData } from '@/utils/FormValidator';
import { apiInstance } from '@/utils/apiInstance';

const initialFormData: SignupFormData = {
  email: '',
  password: '',
  passwordCheck: '',
  name: '',
  phoneNumber: '',
};

const SignupPageTemplate = () => {
  const router = useRouter();
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  // 회원가입 제출 처리
  const handleSignupSubmit = async (data: SignupFormData) => {
    try {
      const response = await apiInstance.post('/auth/signup', data);

      if (response.status === 201) {
        alert('회원가입이 완료되었습니다.');
        router.push('/login');
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('회원가입 중 오류가 발생했습니다.');
      }
    }
  };

  // 전화번호 인증 처리
  const handlePhoneVerification = async (
    phoneNumber: string,
    authCode: string,
  ): Promise<boolean> => {
    try {
      const response = await apiInstance.post('/auth/verify-phone', {
        phoneNumber,
        authCode,
      });

      if (response.status === 200) {
        setIsPhoneVerified(true);
        return true;
      }
      return false;
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
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
        isPhoneVerified={isPhoneVerified}
      />
      <OrSeparator />
      <SocialLoginButtonConainter />
    </div>
  );
};

export default SignupPageTemplate;
