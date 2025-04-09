'use client';

import ExpertInfoForm from '@/components/organisms/expertInfoForm/ExpertInfoForm';
import { useUserStore } from '@/store/userStore';
import { Expert } from '@/types/user';

export default function ExpertInfoPage() {
  const { expert: storeExpert } = useUserStore();

  const initialData: Expert = {
    id: storeExpert?.id ?? 0,
    name: storeExpert?.name ?? '',
    categoryName: storeExpert?.categoryName ?? '',
    subCategoryNames: storeExpert?.subCategoryNames ?? [],
    introduction: storeExpert?.introduction ?? '',
    careerYears: storeExpert?.careerYears ?? 0,
    gender: storeExpert?.gender ?? false,
    profileImage: storeExpert?.profileImage ?? '',
    mainCategoryId: storeExpert?.mainCategoryId ?? 0,
    subCategoryIds: storeExpert?.subCategoryIds ?? [],
    certificateNames: storeExpert?.certificateNames ?? [],
  };

  return (
    <div className="w-full pt-24 pl-64">
      <h1 className="text-24 font-bold mb-40">전문가 정보</h1>
      <ExpertInfoForm initialData={initialData} />
    </div>
  );
}
