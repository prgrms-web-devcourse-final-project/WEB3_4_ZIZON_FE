import { APIBuilder } from '@/utils/APIBuilder';
import { OrderPageResponse } from '@/types/order';

interface GetMyOrdersRequestType {
  page?: number;
  size?: number;
}

export default async function getMyOrders({
  page = 0,
  size = 10,
}: GetMyOrdersRequestType = {}): Promise<OrderPageResponse> {
  const params: Record<string, number> = {
    page,
    size,
  };

  const response = await APIBuilder.get('/orders/my')
    .params(params)
    .timeout(10000)
    .build()
    .call<OrderPageResponse>();

  return response.data;
}
