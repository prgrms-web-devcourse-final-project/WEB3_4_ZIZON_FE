'use client';

import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { useRouter } from 'next/navigation';

interface RequestOfferBoxProps {
  name: string;
  expertId: string;
  mainCategoryId: number;
}

export default function RequestOfferBox({ name, expertId }: RequestOfferBoxProps) {
  const router = useRouter();

  const onRequestOfferClick = () => {
    // TODO : 유저의 로그인 여부 확인
    // 로그인 완료시 : expertId를 쿠키에 저장하고 /commission 페이지로 이동
    localStorage.setItem('target_expert_id', expertId);
    router.push('/commission/common/start');

    // 로그인 전 상태 : 로그인 페이지로 이동
    // router.push('/login');
  };

  return (
    <div className="w-302 px-24 py-20 bg-black1 shadow-style2 rounded-[16px] ">
      <p className="font-medium text-16 text-black10 leading-[1.5] mb-16">
        {name} 전문가에게 원하는 서비스의 견적을 받아보세요
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
