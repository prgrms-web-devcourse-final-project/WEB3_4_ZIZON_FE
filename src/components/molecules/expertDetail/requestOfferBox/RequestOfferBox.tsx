'use client';

import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { useRouter } from 'next/navigation';

interface RequestOfferBoxProps {
  name: string;
  expertId: string;
}

export default function RequestOfferBox({ name, expertId }: RequestOfferBoxProps) {
  const router = useRouter();

  // 견적 요청하기 버튼 클릭시 expertId를 localStorage에 저장하고 /commission 페이지로 이동
  const onRequestOfferClick = () => {
    localStorage.setItem('target_expert_id', expertId);
    router.push('/commission');
  };

  return (
    <div className="w-302 px-24 py-20 bg-black1 shadow-style2 rounded-[16px] ">
      <p className="font-medium text-16 text-black10 leading-[1.5] mb-16">
        {name}전문가에게 원하는 서비스의 견적을 받아보세요
      </p>
      <StandardButton
        size="full"
        state="blue"
        onClick={() => onRequestOfferClick()}
        text="견적 요청하기"
        disabled={false}
      />
    </div>
  );
}
