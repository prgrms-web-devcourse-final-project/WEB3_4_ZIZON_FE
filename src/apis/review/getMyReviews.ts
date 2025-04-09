import { Review } from '@/types/review';
import { APIBuilder } from '@/utils/APIBuilder';
import { HTTPParams } from '@/types/api';

interface GetMyReviewsParams extends HTTPParams {
  page?: number;
  size?: number;
}

/**
 * 내가 쓴 리뷰 목록을 가져옵니다.
 * @param params 페이지네이션 파라미터
 * @returns 내가 쓴 리뷰 목록
 */
export const getMyReviews = async (params?: GetMyReviewsParams): Promise<Review[]> => {
  try {
    const response = await APIBuilder.get('/reviews/my').params(params).build().call<Review[]>();

    return response.data;
  } catch (error) {
    console.error('내가 쓴 리뷰 조회 실패:', error);
    throw error;
  }
};
