import { APIBuilder } from '@/utils/APIBuilder';

export interface ProductResponseType {
  id: number;
  expert: string | null;
  title: string;
  price: number;
  stock: number;
  productType: 'PHYSICAL' | 'DIGITAL';
  thumbnailImage: string;
  createAt: string;
  digitalContents: string | null;
  description?: string | null;
}

export default async function getProduct(productId: number): Promise<ProductResponseType> {
  const response = await APIBuilder.get(`/products/${productId}`)
    .timeout(10000)
    .withCredentials(true)
    .build()
    .call<ProductResponseType>();

  return response.data;
}
