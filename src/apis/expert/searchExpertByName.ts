import { APIBuilder } from '@/utils/APIBuilder';

export interface SearchExpertByNameRequestType {
  name: string;
}

export interface SearchExpertByNameResponseType {
  expertId: number;
  name: string;
  categoryName: string;
  careerYears: number;
  introduction: string;
  profileImage: string;
  mainCategoryId: number;
}

export const searchExpertByName = async (
  request: SearchExpertByNameRequestType,
): Promise<SearchExpertByNameResponseType[]> => {
  const { name } = request;

  const response = await APIBuilder.get(`/experts/search/name`)
    .params({ name })
    .timeout(10000)
    .build()
    .call<SearchExpertByNameResponseType[]>();

  return response.data;
};
