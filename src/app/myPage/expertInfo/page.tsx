'use client';

import ExpertInfoForm from '@/components/organisms/expertInfoForm/ExpertInfoForm';

export default function ExpertInfoPage() {
  const initialData = {
    businessField: '청소',
    services: ['이사 청소', '입주 청소', '리모델링 후 청소'],
    experience: '6년',
    certifications: ['청소관리사', '청소대행전문가'],
    shortIntro: '6년 경력의 청소 전문가, 완벽한 클린 환경을 만들어 드립니다.',
    fullIntro: `안녕하세요, 청소 전문가 이진우입니다.
저는 24년간 수많은 공간을 책임지며, 단순한 청소가 아닌 완벽한 클린 환경을 만들어 왔습니다. 고객님의 소중한 공간을 내 집처럼 생각하며, 프리미엄 청소 서비스를 제공 합니다.
믿고 맡겨주시면, 깨끗함 이상의 만족을 드리겠습니다.
고객님의 새로운 시작, 이진우가 함께하겠습니다.`,
  };

  return (
    <div className="w-full pt-24 pl-64">
      <h1 className="text-24 font-bold mb-40">전문가 정보</h1>
      <ExpertInfoForm initialData={initialData} />
    </div>
  );
}
