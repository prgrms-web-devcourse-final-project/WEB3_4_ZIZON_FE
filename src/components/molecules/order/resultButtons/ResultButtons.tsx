'use client';

import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';

import { useRouter } from 'next/navigation';

export default function ResultButtons() {
  const router = useRouter();

  const onOrderListClick = () => router.push('/mypage/myproject');
  const onHomeClick = () => router.push('/');

  return (
    <div className="w-full flex gap-24 h-51">
      <StandardButton
        text="구매 내역 보기"
        state="default"
        size="full"
        onClick={() => {
          onOrderListClick();
        }}
        disabled={false}
      />
      <StandardButton
        text="홈으로"
        state="blue"
        size="full"
        onClick={() => {
          onHomeClick();
        }}
        disabled={false}
      />
    </div>
  );
}
