import { APIBuilder } from '@/utils/APIBuilder';
import { Member } from '@/types/user';
import { ApiError } from '@/types/api';

export interface GetUserByIdRequest {
  userId: number;
}

export const getUserById = async (request: GetUserByIdRequest): Promise<Member> => {
  try {
    const { userId } = request;

    const response = await APIBuilder.get(`/users/${userId}`).timeout(10000).build().call<Member>();

    return response.data;
  } catch (error) {
    if (error instanceof ApiError) {
      const status = error.status || 500;
      const message = error.message || '알 수 없는 오류가 발생했습니다.';

      throw new ApiError(message, status, 'ApiError', String(status));
    }

    throw new ApiError('서버 내부 오류가 발생했습니다.', 500, 'ApiError', '500');
  }
};
