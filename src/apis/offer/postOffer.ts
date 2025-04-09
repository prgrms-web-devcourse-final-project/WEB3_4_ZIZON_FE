import { OfferFormType } from '@/components/organisms/offerForm/OfferForm';
import { APIBuilder } from '@/utils/APIBuilder';

export interface PostOfferRequestType {
  offer: OfferFormType;
  projectId: number;
}

interface PostOfferResponseType {
  message: string;
}

export const postOffer = async ({
  offer,
  projectId,
}: PostOfferRequestType): Promise<PostOfferResponseType> => {
  const response = await APIBuilder.post(`/projects/${projectId}/offers`, {
    price: offer.charge,
    description: offer.information,
    deliveryDate: offer.estimateDate,
  })
    .withCredentials(true)
    .timeout(10000)
    .build()
    .call<PostOfferResponseType>();

  return response.data;
};
