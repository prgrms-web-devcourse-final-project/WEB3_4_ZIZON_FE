'use client';

import LoginButton from '@/components/atoms/buttons/loginButton/LoginButton';

function SocialLoginButtonConainter() {
  return (
    <div className="flex flex-col gap-16 mb-120">
      <LoginButton disabled={false} onClick={() => {}} type="kakao" />
      <LoginButton disabled={false} onClick={() => {}} type="naver" />
    </div>
  );
}

export default SocialLoginButtonConainter;
