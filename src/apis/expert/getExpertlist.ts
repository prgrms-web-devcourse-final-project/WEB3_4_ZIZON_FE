import { APIBuilder } from '@/utils/APIBuilder';

export interface ExpertListRequestType {
  careerLevel: string;
  categoryNames: string;
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
  const { careerLevel, categoryNames } = requestQuery;

  const response = await APIBuilder.get(
    `/experts?careerLevel=${careerLevel}&categoryNames=${categoryNames}`,
  )
    .baseURL(`${process.env.SERVER_URL}`)
    .timeout(10000)
    .revalidate(10) // 10초마다 재검증
    .build()
    .call<ExpertListResponseType>();

  return response.data;
};
