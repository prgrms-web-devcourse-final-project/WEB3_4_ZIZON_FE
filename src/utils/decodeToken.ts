import { AccountStatus } from '@/types/user';

interface TokenPayload {
  subject: string;
  id: number;
  username: string;
  role: 'CLIENT' | 'EXPERT';
  status: AccountStatus;
  iat: number;
  exp: number;
}

export function decodeToken(token: string): TokenPayload | null {
  try {
    // 토큰은 "header.payload.signature" 형식으로 구성됨
    const payload = token.split('.')[1]; // payload 부분 추출
    if (!payload) {
      throw new Error('토큰 포맷이 올바르지 않습니다.');
    }

    // Base64 디코딩 후 JSON 파싱
    const decodedPayload = JSON.parse(atob(payload));

    return decodedPayload;
  } catch (error) {
    return null;
  }
}
