import { APIBuilder } from '@/utils/APIBuilder';
import { cookies } from 'next/headers';

export interface ProductListRequestType {
  categoryId?: number;
  page: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  productType: string;
  thumbnailUrl: string;
  expertName: string;
  categoryName: string;
  createdAt: string;
}

type ProductListResponseType = {
  products: Array<Product>;
  currentPage: number;
  pageSize: number;
  hasNext: boolean;
};

export default async function getProductList({
  categoryId,
  page,
}: ProductListRequestType): Promise<ProductListResponseType> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  if (!accessToken) {
    throw new Error('Access token not found');
  }

  const response = await APIBuilder.get(`/products?page=${page}&size=12`)
    .headers({
      'Content-Type': 'application/json',
      Cookie: `accessToken=${accessToken}`,
    })
    .timeout(10000)
    .withCredentials(true)
    .build()
    .call<ProductListResponseType>();
  console.log('상품목록', response.data);
  return response.data;
}
