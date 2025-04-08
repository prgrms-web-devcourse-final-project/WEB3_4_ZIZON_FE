// HTTP 메서드 타입 정의
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

// HTTP 헤더 타입 정의
export interface HTTPHeaders {
  [key: string]: string;
}

// HTTP 파라미터 타입 정의
export interface HTTPParams {
  [key: string]: string | number | boolean | undefined;
}

// API 응답 타입 정의
export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

// API 에러 인터페이스
export interface ApiErrorResponse {
  status: number;
  error: string;
  message: string;
  code?: string;
}

// API 에러 클래스
export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public statusText?: string,
    public code?: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}
