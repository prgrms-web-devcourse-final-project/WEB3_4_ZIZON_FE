import { APIBuilder } from '@/utils/APIBuilder';
import { Expert } from '@/types/user';

export interface GetExpertByIdRequest {
  expertId: string | number;
}

export const getExpertById = async (request: GetExpertByIdRequest): Promise<Expert> => {
  const { expertId } = request;

  const response = await APIBuilder.get(`/experts/${expertId}`)
    .timeout(10000)
    .build()
    .call<Expert>();

  return response.data;
};
