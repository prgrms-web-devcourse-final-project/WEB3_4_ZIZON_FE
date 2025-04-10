import { APIBuilder } from '@/utils/APIBuilder';
import { cookies } from 'next/headers';

interface GetSuccessRequest {
  orderId: string;
  paymentKey: string;
  amount: string;
}

export interface SuccessResponse {
  amount: number;
  errorCode: number | null;
  expertName: string;
  message: string | null;
  paymentName: string;
  status: 'success' | 'fail';
}

// 결제 성공 콜백
export default async function getSuccess(params: GetSuccessRequest): Promise<SuccessResponse> {
  const { orderId, paymentKey, amount } = params;

  // 쿠키에서 토큰 가져오기
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    console.error('AccessToken이 없습니다.');
  }

  // fetch 요청
  const response = await APIBuilder.get(
    `/payments/success?orderId=${orderId}&paymentKey=${paymentKey}&amount=${amount}`,
  )
    .headers({
      'Content-Type': 'application/json',
      Cookie: `accessToken=${token}`,
    })
    .withCredentials(true)
    .timeout(50000)
    .build()
    .call<SuccessResponse>();

  return response.data;
}
