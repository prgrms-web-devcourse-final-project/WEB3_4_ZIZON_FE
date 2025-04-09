import { APIBuilder } from '@/utils/APIBuilder';
import { cookies } from 'next/headers';

export interface ProductListRequestType {
  categoryId: number;
  pageable: {
    page: number;
    size: number;
    sort: string[];
  };
}

export interface Product {
  expert_id: number; // expertName
  category_id: number;
  title: string;
  stock: number;
  product_type: string; // string (상품 유형, 예: digital)
  thumbnail_image: string;
}

type ProductListResponseType = Array<Product>;

export default async function getProductList({
  categoryId,
  pageable,
}: ProductListRequestType): Promise<ProductListResponseType> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  if (!accessToken) {
    throw new Error('Access token not found');
  }
  const query = encodeURIComponent(JSON.stringify(pageable));
  const response = await APIBuilder.get(`/products?pageable=${query}&categoryId=${categoryId}`)
    .headers({
      Cookie: `access_token=${accessToken}`,
      'Content-Type': 'application/json',
    })
    .timeout(10000)
    .withCredentials(true)
    .build()
    .call<ProductListResponseType>();

  return response.data;
}
