import { APIBuilder } from '@/utils/APIBuilder';

interface ToggleUserViewResponse {
  message: string;
}

interface ApiError {
  status: number;
  message: string;
  timestamp: string;
}

/**
 * 사용자의 뷰 상태를 토글하는 API 함수
 * @param userId 토글할 사용자 ID
 * @returns 성공 시 메시지 반환
 * @throws 인증 오류 등 API 오류 발생 시 에러 객체 반환
 */
export const toggleUserRole = async (userId: string): Promise<ToggleUserViewResponse> => {
  try {
    const response = await APIBuilder.post(`/users/toggle/${userId}`, {})
      .timeout(10000)
      .build()
      .call<ToggleUserViewResponse>();

    return response.data;
  } catch (error) {
    // API 오류 처리
    if (error && typeof error === 'object' && 'status' in error) {
      throw error as ApiError;
    }
    // 기타 오류 처리
    throw new Error('사용자 뷰 상태 변경 중 오류가 발생했습니다.');
  }
};
