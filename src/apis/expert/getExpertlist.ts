import { APIBuilder } from '@/utils/APIBuilder';

export interface ExpertListRequestType {
  careerLevel: string;
  categoryNames: string;
  search?: string;
}

export interface ExpertListItemType {
  name: string;
  categoryName: string;
  careerYears: number;
  introduction: string;
  profileImage: string;
  mainCategoryId: number;
  expertId?: number; // 백엔드 추가 예정
}

export type ExpertListResponseType = ExpertListItemType[];

export const getExpertlist = async (
  requestQuery: ExpertListRequestType,
): Promise<ExpertListResponseType> => {
  const { careerLevel, categoryNames, search } = requestQuery;

  // URLSearchParams를 사용하여 동적으로 쿼리 생성
  const params = new URLSearchParams();

  if (careerLevel) params.append('careerLevel', careerLevel);
  if (categoryNames) params.append('categoryNames', categoryNames);
  if (search) params.append('name', search);

  const response = await APIBuilder.get(`/experts/search?${params.toString()}`)
    .timeout(50000)
    .build()
    .call<ExpertListResponseType>();

  return response.data;
};
