import React from 'react';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { useRouter } from 'next/navigation';

export default function EmptyOrderList() {
  const router = useRouter();

  const handleGoToHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center py-80">
      <div className="w-120 h-120 mb-16">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60 10C32.4 10 10 32.4 10 60C10 87.6 32.4 110 60 110C87.6 110 110 87.6 110 60C110 32.4 87.6 10 60 10ZM60 100C37.9 100 20 82.1 20 60C20 37.9 37.9 20 60 20C82.1 20 100 37.9 100 60C100 82.1 82.1 100 60 100Z"
            fill="#E5E7EB"
          />
          <path
            d="M60 30C43.5 30 30 43.5 30 60C30 76.5 43.5 90 60 90C76.5 90 90 76.5 90 60C90 43.5 76.5 30 60 30ZM60 80C48.95 80 40 71.05 40 60C40 48.95 48.95 40 60 40C71.05 40 80 48.95 80 60C80 71.05 71.05 80 60 80Z"
            fill="#E5E7EB"
          />
          <path
            d="M60 50C55.5 50 52 53.5 52 58C52 62.5 55.5 66 60 66C64.5 66 68 62.5 68 58C68 53.5 64.5 50 60 50Z"
            fill="#E5E7EB"
          />
        </svg>
      </div>
      <p className="text-20 font-bold text-black7 mb-8">구매한 상품이 없습니다</p>
      <p className="text-16 text-black5 mb-32">지금 바로 상품을 구매해보세요!</p>
      <StandardButton
        text="홈으로 가기"
        onClick={handleGoToHome}
        disabled={false}
        size="fit"
        state="blue"
      />
    </div>
  );
}
