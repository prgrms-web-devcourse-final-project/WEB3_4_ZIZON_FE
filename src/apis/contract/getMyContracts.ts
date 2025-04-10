import { ExpertContractListResponse } from '@/types/contract';
import { APIBuilder } from '@/utils/APIBuilder';

interface GetMyContractsParams {
  page?: number;
  size?: number;
  sort?: string;
}

/**
 * 로그인한 전문가가 체결한 계약 목록을 조회합니다.
 * @param params 페이지네이션 파라미터
 * @returns 계약 목록
 */
export const getMyContracts = async (
  params?: GetMyContractsParams,
): Promise<ExpertContractListResponse> => {
  const response = await APIBuilder.get('/contracts/my')
    .params({
      page: params?.page ?? 0,
      size: params?.size ?? 10,
      sort: params?.sort ?? 'createdAt,desc',
    })
    .build()
    .call<ExpertContractListResponse>();

  return response.data;
};
