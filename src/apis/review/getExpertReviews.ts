import { Review } from '@/types/review';
import { APIBuilder } from '@/utils/APIBuilder';

/**
 * 전문가가 받은 리뷰 목록을 가져옵니다.
 * @param expertId 전문가 ID
 * @returns 전문가가 받은 리뷰 목록
 */
export const getExpertReviews = async (expertId: string): Promise<Review[]> => {
  try {
    const response = await APIBuilder.get(`/reviews/experts/${expertId}`).build().call<Review[]>();

    return response.data;
  } catch (error) {
    console.error('전문가 리뷰 조회 실패:', error);
    throw error;
  }
};
