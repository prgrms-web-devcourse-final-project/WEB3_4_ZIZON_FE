import { ProductType, DigitalContent } from '@/types/product';
import { categories } from '@/types/product';
import { APIBuilder } from '@/utils/APIBuilder';

// 상품 등록 요청 타입 정의
export interface CreateProductRequest {
  categoryId: (typeof categories)[number]['category_id'];
  title: string;
  description: string;
  price: number;
  stock: number;
  productType: ProductType;
  thumbnailImage: string;
  digitalContents?: DigitalContent[];
}

// 상품 등록 응답 타입 정의
export interface CreateProductResponse {
  message: string;
}

/**
 * 상품 등록 API 요청을 보내는 함수
 * @param productData - 등록할 상품 데이터
 * @returns 등록 성공 메시지
 */
export default async function createProduct(
  productData: CreateProductRequest,
): Promise<CreateProductResponse> {
  const response = await APIBuilder.post('/products', productData)
    .timeout(10000)
    .build()
    .call<CreateProductResponse>();

  return response.data;
}
