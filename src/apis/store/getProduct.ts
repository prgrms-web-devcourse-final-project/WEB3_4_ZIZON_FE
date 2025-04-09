import { Product } from '@/apis/store/getProductList';
import { APIBuilder } from '@/utils/APIBuilder';
import { cookies } from 'next/headers';

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
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  console.log('상품 상세 조회', productId);
  if (!accessToken) {
    throw new Error('Access token not found');
  }

  const response = await APIBuilder.get(`/products/${productId}`)
    .headers({
      'Content-Type': 'application/json',
      Cookie: `accessToken=${accessToken}`,
    })
    .timeout(10000)
    .withCredentials(true)
    .build()
    .call<ProductResponseType>();

  return response.data;
}
