import { APIBuilder } from '@/utils/APIBuilder';

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
  const response = await APIBuilder.get(`/products?page=${page}&size=12`)
    .timeout(10000)
    .withCredentials(true)
    .build()
    .call<ProductListResponseType>();
  //console.log('상품목록', response.data);
  return response.data;
}
