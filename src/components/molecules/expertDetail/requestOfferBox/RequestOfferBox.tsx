'use client';

import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { useRouter } from 'next/navigation';

interface RequestOfferBoxProps {
  name: string;
  expertId: string;
}

export default function RequestOfferBox({ name, expertId }: RequestOfferBoxProps) {
  // !! storybook 환경에서 Next.js의 라우팅 컨텍스트를 제공하지 않아 에러발생
  // !! 실제 환경에서는 주석 해제
  // const router = useRouter(); // 📌주석 해제

  // 견적 요청하기 버튼 클릭시 expertId를 localStorage에 저장하고 /commission 페이지로 이동
  const onRequestOfferClick = () => {
    localStorage.setItem('target_expert_id', expertId);
    // router.push('/commission'); // 📌주석 해제
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
