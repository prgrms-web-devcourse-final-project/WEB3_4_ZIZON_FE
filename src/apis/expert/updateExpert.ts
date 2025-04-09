import { APIBuilder } from '@/utils/APIBuilder';

interface UpdateExpertRequest {
  categoryName: string;
  subCategoryNames: string[];
  careerYears: number;
  introduction: string;
  certificateNames: string[];
  gender: boolean;
  bankName?: string;
  accountNumber?: string;
  portfolioTitle?: string;
  portfolioImage?: string;
}

interface UpdateExpertResponse {
  message: string;
}

export const updateExpert = async (expertId: number, data: UpdateExpertRequest) => {
  try {
    const response = await APIBuilder.put(`/experts/${expertId}`, data)
      .build()
      .call<UpdateExpertResponse>();

    return response.data;
  } catch (error) {
    console.error('전문가 정보 수정 중 오류 발생:', error);
    throw error;
  }
};
