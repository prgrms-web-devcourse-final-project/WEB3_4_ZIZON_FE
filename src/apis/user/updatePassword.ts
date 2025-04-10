import { APIBuilder } from '@/utils/APIBuilder';
import { ApiError } from '@/types/api';

export interface UpdatePasswordRequest {
  userId: number;
  currentPassword: string;
  newPassword: string;
}

export interface UpdatePasswordResponse {
  message: string;
}

export interface PasswordError {
  code: number;
  message: string;
}

export const updatePassword = async (
  request: UpdatePasswordRequest,
): Promise<UpdatePasswordResponse> => {
  const { userId, currentPassword, newPassword } = request;

  try {
    const response = await APIBuilder.patch(`/users/password/${userId}`, {
      currentPassword,
      newPassword,
    })
      .timeout(10000)
      .build()
      .call<UpdatePasswordResponse>();

    return response.data;
  } catch (error) {
    if (error instanceof ApiError) {
      // API 에러 정보 추출
      const status = error.status || 500;
      const message = error.message || '알 수 없는 오류가 발생했습니다.';

      throw {
        code: status,
        message: message,
      } as PasswordError;
    }

    // 기타 예외 처리
    throw {
      code: 500,
      message: '서버 내부 오류가 발생했습니다.',
    } as PasswordError;
  }
};
