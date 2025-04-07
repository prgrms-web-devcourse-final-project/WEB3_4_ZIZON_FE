import {
  HTTPMethod,
  HTTPHeaders,
  HTTPParams,
  ApiResponse,
  ApiError,
  ApiErrorResponse,
} from '@/types/api';

// RequestInit 타입 확장
interface ExtendedRequestInit extends RequestInit {
  allowCredentials?: boolean;
}

// 기본 API URL 설정
const BASE_URL = process.env.LOCAL_SERVER_URL;

// API 클래스 정의
export class API {
  readonly method: HTTPMethod;
  readonly url: string;
  baseURL?: string;
  headers?: HTTPHeaders;
  params?: HTTPParams;
  data?: unknown;
  timeout?: number;
  withCredentials?: boolean;

  constructor(method: HTTPMethod, url: string) {
    this.method = method;
    this.url = url;
  }

  async call<T>(): Promise<ApiResponse<T>> {
    // URL 파라미터 처리
    let finalUrl = this.url;
    if (this.params) {
      const queryParams = new URLSearchParams();
      Object.entries(this.params).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, String(value));
        }
      });
      const queryString = queryParams.toString();
      if (queryString) {
        finalUrl += `?${queryString}`;
      }
    }

    // 기본 URL 설정
    const baseURL = this.baseURL || BASE_URL;
    const fullUrl = `${baseURL}${finalUrl}`;

    // 헤더 설정
    const headers: Record<string, string> = {
      'Content-Type': 'application/json; charset=utf-8',
      ...this.headers,
    };

    // 요청 설정
    const requestConfig: ExtendedRequestInit = {
      method: this.method,
      headers,
      credentials: this.withCredentials ? 'include' : 'same-origin',
      allowCredentials: true,
    };

    // 요청 본문 설정
    if (this.data && (this.method === 'POST' || this.method === 'PUT' || this.method === 'PATCH')) {
      requestConfig.body = JSON.stringify(this.data);
    }

    try {
      // 타임아웃 처리
      let controller: AbortController | undefined;
      if (this.timeout) {
        controller = new AbortController();
        const timeoutId = setTimeout(() => controller?.abort(), this.timeout);
        requestConfig.signal = controller.signal;

        // 타임아웃 후 타이머 정리
        setTimeout(() => clearTimeout(timeoutId), this.timeout);
      }

      // 요청 실행
      const response = await fetch(fullUrl, requestConfig);

      // 응답 처리
      if (!response.ok) {
        // 에러 응답 파싱
        let errorData: ApiErrorResponse;
        try {
          errorData = await response.json();
        } catch {
          errorData = {
            status: response.status,
            error: response.statusText,
            message: '알 수 없는 오류가 발생했습니다.',
          };
        }

        // API 명세서에 맞는 에러 코드 처리
        switch (response.status) {
          case 400:
            throw new ApiError(
              errorData.message || '잘못된 요청입니다.',
              response.status,
              response.statusText,
              errorData.code,
            );
          case 401:
            throw new ApiError(
              errorData.message || '인증에 실패했습니다.',
              response.status,
              response.statusText,
              errorData.code,
            );
          case 403:
            throw new ApiError(
              errorData.message || '접근이 거부되었습니다.',
              response.status,
              response.statusText,
              errorData.code,
            );
          case 404:
            throw new ApiError(
              errorData.message || '요청한 리소스를 찾을 수 없습니다.',
              response.status,
              response.statusText,
              errorData.code,
            );
          case 409:
            throw new ApiError(
              errorData.message || '리소스 충돌이 발생했습니다.',
              response.status,
              response.statusText,
              errorData.code,
            );
          case 500:
            throw new ApiError(
              errorData.message || '서버 오류가 발생했습니다.',
              response.status,
              response.statusText,
              errorData.code,
            );
          default:
            throw new ApiError(
              errorData.message || '알 수 없는 오류가 발생했습니다.',
              response.status,
              response.statusText,
              errorData.code,
            );
        }
      }

      const data = await response.json();
      return {
        data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      if (error instanceof Error) {
        throw new ApiError(error.message);
      }
      throw new ApiError('요청 중 오류가 발생했습니다.');
    }
  }
}
