import { APIBuilder } from '@/utils/APIBuilder';

export interface PostContractRequestType {
  offerId: number;
  price: number;
  startDate: string;
  endDate: string;
}

interface PostContractResponseType {
  contractId: number;
}

export const postContract = async (
  request: PostContractRequestType,
): Promise<PostContractResponseType> => {
  const { offerId, price, startDate, endDate } = request;

  const response = await APIBuilder.post('/contracts', {
    offerId,
    price,
    startDate,
    endDate,
  })
    .baseURL(`${process.env.SERVER_URL}`)
    .headers({
      'Content-Type': 'application/json',
    })
    .timeout(10000)
    .withCredentials(true)
    .build()
    .call<PostContractResponseType>();

  return response.data;
};
