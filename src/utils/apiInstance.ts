// TODO: 실제 API URL로 변경 필요
const BASE_URL = 'http://localhost:3000/api';

interface RequestConfig extends RequestInit {
  headers?: HeadersInit;
}

interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
}

class ApiError extends Error {
  constructor(message: string, public status?: number, public statusText?: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
  if (!response.ok) {
    switch (response.status) {
      case 400:
        throw new ApiError('잘못된 요청입니다.', response.status, response.statusText);
      case 401:
        throw new ApiError('인증에 실패했습니다.', response.status, response.statusText);
      case 403:
        throw new ApiError('접근이 거부되었습니다.', response.status, response.statusText);
      case 404:
        throw new ApiError(
          '요청한 리소스를 찾을 수 없습니다.',
          response.status,
          response.statusText,
        );
      case 500:
        throw new ApiError('서버 오류가 발생했습니다.', response.status, response.statusText);
      default:
        throw new ApiError('알 수 없는 오류가 발생했습니다.', response.status, response.statusText);
    }
  }

  const data = await response.json();
  return {
    data,
    status: response.status,
    statusText: response.statusText,
  };
}

async function request<T>(endpoint: string, config: RequestConfig = {}): Promise<ApiResponse<T>> {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...config.headers,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...config,
      headers,
    });

    return handleResponse<T>(response);
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

export const apiInstance = {
  async get<T>(endpoint: string, config?: RequestConfig) {
    return request<T>(endpoint, { ...config, method: 'GET' });
  },

  async post<T>(endpoint: string, data?: any, config?: RequestConfig) {
    return request<T>(endpoint, {
      ...config,
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async put<T>(endpoint: string, data?: any, config?: RequestConfig) {
    return request<T>(endpoint, {
      ...config,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async delete<T>(endpoint: string, config?: RequestConfig) {
    return request<T>(endpoint, { ...config, method: 'DELETE' });
  },
};
