'use client';

import LoginButton from '@/components/atoms/buttons/loginButton/LoginButton';
import { useState } from 'react';

function SocialLoginButtonConainter() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 카카오 로그인 처리
  const handleKakaoLogin = () => {
    setIsLoading(true);
    setError(null);

    try {
      // 리다이렉트 전에 상태 업데이트
      window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/authorization/kakao`;
    } catch (error) {
      setIsLoading(false);
      setError('카카오 로그인 중 오류가 발생했습니다.');
      console.error('카카오 로그인 오류:', error);
    }
  };

  // 네이버 로그인 처리
  const handleNaverLogin = () => {
    setIsLoading(true);
    setError(null);

    try {
      window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/authorization/naver`;
    } catch (error) {
      setIsLoading(false);
      setError('네이버 로그인 중 오류가 발생했습니다.');
      console.error('네이버 로그인 오류:', error);
    }
  };

  // 구글 로그인 처리
  const handleGoogleLogin = () => {
    setIsLoading(true);
    setError(null);

    try {
      window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/authorization/google`;
    } catch (error) {
      setIsLoading(false);
      setError('구글 로그인 중 오류가 발생했습니다.');
      console.error('구글 로그인 오류:', error);
    }
  };

  return (
    <div className="flex flex-col gap-16 mb-120">
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <LoginButton disabled={isLoading} onClick={handleKakaoLogin} type="kakao" />
      <LoginButton disabled={isLoading} onClick={handleNaverLogin} type="naver" />
      <LoginButton disabled={isLoading} onClick={handleGoogleLogin} type="google" />
    </div>
  );
}

export default SocialLoginButtonConainter;
