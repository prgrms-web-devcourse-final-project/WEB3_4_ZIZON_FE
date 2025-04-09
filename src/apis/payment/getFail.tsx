import { APIBuilder } from '@/utils/APIBuilder';
import { cookies } from 'next/headers';

interface GetFailRequest {
  orderId: string;
  paymentKey: string;
  amount: string;
}

export interface FailResponse {
  amount: number;
  errorCode: number | null;
  expertName: string;
  message: string | null;
  paymentName: string;
  status: 'success' | 'fail';
}

export default async function getFail(params: GetFailRequest): Promise<FailResponse> {
  const { orderId, paymentKey, amount } = params;

  // 쿠키에서 토큰 가져오기
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    console.error('AccessToken이 없습니다.');
  }

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
    .call<FailResponse>();
  console.log('결제 실패 콜백 응답:', response);
  return response.data;
}
