import { APIBuilder } from '@/utils/APIBuilder';

export interface ExpertRequestType {
  expertId: string;
}

export interface ExpertType {
  id: number; // 전문가 ID
  name: string; // 전문가 이름
  categoryName: string; // 메인 카테고리 이름
  subCategoryNames: string[]; // 서브 카테고리 이름 목록
  introduction: string; // 전문가 소개
  careerYears: number; // 경력(년)
  gender: boolean; // 성별 (true: 남성, false: 여성)
  profileImage: string; // 프로필 이미지 URL
  portfolioImage: string;
  mainCategoryId: number; // 메인 카테고리 ID
  subCategoryIds: number[]; // 서브 카테고리 ID 목록
  certificateNames: string[]; // 자격증 이름 목록
}

export const getExpert = async (request: ExpertRequestType): Promise<ExpertType> => {
  const { expertId } = request;

  const response = await APIBuilder.get(`/experts/${expertId}`)
    .timeout(10000)
    .build()
    .call<ExpertType>();

  return response.data;
};
