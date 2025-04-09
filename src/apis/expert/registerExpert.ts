import { APIBuilder } from '@/utils/APIBuilder';

export interface RegisterExpertRequestType {
  categoryName: string;
  subCategoryNames: string[];
  careerYears: number;
  introduction: string;
  certificateNames: string[];
  gender: boolean;
  bankName: string;
  accountNumber: string;
  sellerInfo: string;
}

export interface RegisterExpertResponseType {
  expertId: number;
  message: string;
}

export const registerExpert = async (
  request: RegisterExpertRequestType,
): Promise<RegisterExpertResponseType> => {
  const response = await APIBuilder.post('/experts', request)
    .timeout(10000)
    .build()
    .call<RegisterExpertResponseType>();

  return response.data;
};
