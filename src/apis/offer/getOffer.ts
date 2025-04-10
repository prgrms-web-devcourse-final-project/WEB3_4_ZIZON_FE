import { APIBuilder } from '@/utils/APIBuilder';

interface OfferRequestType {
  projectId: number;
  expertId: number;
}

export interface OfferResponseType {
  id: number;
  projectId: number;
  expertId: number;
  price: number;
  description: string;
  deliveryDays: number;
  status: string;
  createdAt: string;
}

// 특정 프로젝트에 대한 견적서(offer)목록을 가져오는 api
export default async function getOffer({
  projectId,
  expertId,
}: OfferRequestType): Promise<OfferResponseType> {
  const response = await APIBuilder.get(`/projects/${projectId}/offers/expert/${expertId}`)
    .withCredentials(true)
    .timeout(50000)
    .build()
    .call<any>();

  console.log('offer', response);
  const data = response.data;
  return data;
}
