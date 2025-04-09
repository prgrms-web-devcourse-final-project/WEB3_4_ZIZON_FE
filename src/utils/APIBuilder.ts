import { HTTPMethod, HTTPHeaders, HTTPParams } from '@/types/api';
import { API } from '@/utils/API';
// TODO: 실제 API URL로 변경 필요
const BASE_URL = process.env.NEXT_PUBLIC_LOCAL_SERVER_URL;

// API 빌더 클래스 정의
export class APIBuilder {
  private _instance: API;

  constructor(method: HTTPMethod, url: string, data?: unknown) {
    this._instance = new API(method, url);
    this._instance.baseURL = BASE_URL;
    this._instance.data = data;
    this._instance.headers = {
      'Content-Type': 'application/json; charset=utf-8',
    };
    this._instance.timeout = 5000;
    this._instance.withCredentials = true;
  }

  // HTTP 메서드에 따라 APIBuilder 객체를 생성하는 메서드들
  static get = (url: string) => new APIBuilder('GET', url);
  static put = (url: string, data: unknown) => new APIBuilder('PUT', url, data);
  static post = (url: string, data: unknown) => new APIBuilder('POST', url, data);
  static delete = (url: string) => new APIBuilder('DELETE', url);
  static patch = (url: string, data: unknown) => new APIBuilder('PATCH', url, data);

  baseURL(value: string): APIBuilder {
    this._instance.baseURL = value;
    return this;
  }

  headers(value: HTTPHeaders): APIBuilder {
    this._instance.headers = value;
    return this;
  }

  timeout(value: number): APIBuilder {
    this._instance.timeout = value;
    return this;
  }

  params(value: HTTPParams): APIBuilder {
    this._instance.params = value;
    return this;
  }

  data(value: unknown): APIBuilder {
    this._instance.data = value;
    return this;
  }

  withCredentials(value: boolean): APIBuilder {
    this._instance.withCredentials = value;
    return this;
  }

  // 구성된 API 객체를 반환
  build(): API {
    return this._instance;
  }
}

// 예시 사용법
/*
  // API 요청 예시
  const response = await APIBuilder.post('/auth/login', { username: 'user', password: 'pass' })
    .baseURL('https://api.example.com')
    .headers({ 'X-API-Key': 'your-api-key' })
    .timeout(10000)
    .withCredentials(true)
    .build()
    .call<LoginResponse>();

  // 응답 처리
  try {
    const { data, status } = response;
    console.log(`로그인 성공: ${status}`);
    console.log(data);
  } catch (error) {
    if (error instanceof ApiError) {
      console.error(`API 오류: ${error.message} (${error.status})`);
    } else {
      console.error('알 수 없는 오류:', error);
    }
  }
*/
