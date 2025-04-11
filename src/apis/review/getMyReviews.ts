import { Review } from '@/types/review';
import { APIBuilder } from '@/utils/APIBuilder';
import { HTTPParams } from '@/types/api';

interface GetMyReviewsParams extends HTTPParams {
  page?: number;
  size?: number;
}

interface GetMyReviewsResponse {
  reviews: Review[];
  currentPage: number;
  size: number;
  hasNext: boolean;
}

/**
 * 내가 쓴 리뷰 목록을 가져옵니다.
 * @param params 페이지네이션 파라미터
 * @returns 내가 쓴 리뷰 목록 응답
 */
export const getMyReviews = async (params?: GetMyReviewsParams): Promise<GetMyReviewsResponse> => {
  try {
    const response = await APIBuilder.get('/reviews/clients/me')
      .params(params)
      .build()
      .call<GetMyReviewsResponse>();

    return response.data;
  } catch (error) {
    console.error('내가 쓴 리뷰 조회 실패:', error);
    throw error;
  }
};
