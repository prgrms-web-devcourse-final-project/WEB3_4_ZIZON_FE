import { APIBuilder } from '@/utils/APIBuilder';

interface ProductListItem {
  expert_id: number;
  category_id: number;
  title: string;
  stock: number;
  product_type: string; // string (상품 유형, 예: digital)
  thumbnail_image: string;
}

type ProductListResponseType = Array<ProductListItem>;

export default async function getProductList() {
  const response = await APIBuilder.get('/product')
    .timeout(10000)
    .withCredentials(true)
    .build()
    .call<ProductListResponseType>();

  return response.data;
}
