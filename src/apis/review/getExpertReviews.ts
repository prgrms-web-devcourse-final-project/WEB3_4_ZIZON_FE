import { Review } from '@/types/review';
import { APIBuilder } from '@/utils/APIBuilder';
import { HTTPParams } from '@/types/api';

interface GetExpertReviewsParams extends HTTPParams {
  page?: number;
  size?: number;
}

interface GetExpertReviewsResponse {
  reviews: Review[];
  currentPage: number;
  size: number;
  hasNext: boolean;
}

/**
 * 전문가가 받은 리뷰 목록을 가져옵니다.
 * @param expertId 전문가 ID
 * @param params 페이지네이션 파라미터
 * @returns 전문가가 받은 리뷰 목록
 */
export const getExpertReviews = async (
  expertId: string,
  params?: GetExpertReviewsParams,
): Promise<GetExpertReviewsResponse> => {
  try {
    const response = await APIBuilder.get(`/reviews/experts/${expertId}`)
      .params(params)
      .build()
      .call<GetExpertReviewsResponse>();

    return response.data;
  } catch (error) {
    console.error('전문가 리뷰 조회 실패:', error);
    throw error;
  }
};
