'use client';

import { useRouter } from 'next/navigation';
import LoginButton from '@/components/atoms/buttons/loginButton/LoginButton';
import { APIBuilder } from '@/utils/APIBuilder';
import { ApiError } from '@/types/api';

function SocialLoginButtonConainter() {
  const router = useRouter();

  // 카카오 로그인 처리
  const handleKakaoLogin = async () => {
    try {
      // 카카오 로그인 API 호출
      const response = await APIBuilder.post('/oauth2/authorization/kakao', {}).build().call();

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
        } else if (error.status === 409) {
          alert('이미 등록된 전문가 프로필이 존재합니다.');
        } else {
          alert(error.message || '카카오 로그인 중 오류가 발생했습니다.');
        }
      } else {
        alert('카카오 로그인 중 오류가 발생했습니다.');
      }
    }
  };

  // 네이버 로그인 처리
  const handleNaverLogin = async () => {
    try {
      // 네이버 로그인 API 호출
      const response = await APIBuilder.get('/oauth2/authorization/naver').build().call();

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
        } else if (error.status === 409) {
          alert('이미 등록된 전문가 프로필이 존재합니다.');
        } else {
          alert(error.message || '네이버 로그인 중 오류가 발생했습니다.');
        }
      } else {
        alert('네이버 로그인 중 오류가 발생했습니다.');
      }
    }
  };

  // 구글 로그인 처리
  const handleGoogleLogin = async () => {
    try {
      // 구글 로그인 API 호출
      const response = await APIBuilder.get('/oauth2/authorization/google').build().call();

      if (response.status === 200) {
        // 로그인 성공 시 메인 페이지로 이동
        router.push('/');
      }
    } catch (error) {
      if (error instanceof ApiError) {
        alert(error.message || '구글 로그인 중 오류가 발생했습니다.');
      } else {
        alert('구글 로그인 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className="flex flex-col gap-16 mb-120">
      <LoginButton disabled={false} onClick={handleKakaoLogin} type="kakao" />
      <LoginButton disabled={false} onClick={handleNaverLogin} type="naver" />
      <LoginButton disabled={false} onClick={handleGoogleLogin} type="google" />
    </div>
  );
}

export default SocialLoginButtonConainter;
