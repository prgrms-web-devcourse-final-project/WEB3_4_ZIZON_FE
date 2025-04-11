'use client';

import ExpertInfoForm from '@/components/organisms/expertInfoForm/ExpertInfoForm';

export default function ExpertInfoPage() {
  return (
    <div className="w-full pt-24 pl-64">
      <h1 className="text-24 font-bold mb-40">전문가 정보</h1>
      <ExpertInfoForm />
    </div>
  );
}
