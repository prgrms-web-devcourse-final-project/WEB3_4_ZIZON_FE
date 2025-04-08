import { HTTPHeaders } from '@/types/api';
import { APIBuilder } from './APIBuilder';

// 기존 apiInstance와 호환성을 위한 래퍼 함수들
export const apiInstance = {
  async get<T>(endpoint: string, config?: RequestInit) {
    return APIBuilder.get(endpoint)
      .headers((config?.headers as HTTPHeaders) || {})
      .build()
      .call<T>();
  },

  async post<T>(endpoint: string, data: unknown, config?: RequestInit) {
    return APIBuilder.post(endpoint, data)
      .headers((config?.headers as HTTPHeaders) || {})
      .build()
      .call<T>();
  },

  async put<T>(endpoint: string, data: unknown, config?: RequestInit) {
    return APIBuilder.put(endpoint, data)
      .headers((config?.headers as HTTPHeaders) || {})
      .build()
      .call<T>();
  },

  async delete<T>(endpoint: string, config?: RequestInit) {
    return APIBuilder.delete(endpoint)
      .headers((config?.headers as HTTPHeaders) || {})
      .build()
      .call<T>();
  },
};
