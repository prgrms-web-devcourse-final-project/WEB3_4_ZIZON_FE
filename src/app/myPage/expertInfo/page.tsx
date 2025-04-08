'use client';

import ExpertInfoForm from '@/components/organisms/expertInfoForm/ExpertInfoForm';
import { Expert } from '@/types/user';

export default function ExpertInfoPage() {
  const initialData: Expert = {
    id: 11,
    name: '전문가',
    categoryName: '이사/청소',
    subCategoryNames: ['입주 청소'],
    introduction: '안녕하세요, 5년 경력의 웹 개발 전문가입니다.',
    careerYears: 5,
    gender: false,
    profileImage:
      'https://devcouse4-team16-bucket.s3.ap-northeast-2.amazonaws.com/projects/1/project_image.jpg',
    mainCategoryId: 1000,
    subCategoryIds: [1001],
    certificateNames: [],
  };

  return (
    <div className="w-full pt-24 pl-64">
      <h1 className="text-24 font-bold mb-40">전문가 정보</h1>
      <ExpertInfoForm initialData={initialData} />
    </div>
  );
}
