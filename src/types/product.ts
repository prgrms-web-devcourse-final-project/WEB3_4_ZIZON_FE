// 상품 타입 타입 정의
export type ProductType = 'DIGITAL' | 'PHYSICAL';

// 카테고리 타입 정의
export interface Category {
  category_id: number;
  name: string;
  type: ProductType;
}

// 카테고리 목록
export const categories: Category[] = [
  { category_id: 5000, name: '디지털 콘텐츠', type: 'DIGITAL' },
  { category_id: 5001, name: 'IT/Digital', type: 'DIGITAL' },
  { category_id: 5002, name: '기타', type: 'DIGITAL' },
  { category_id: 6000, name: '리빙', type: 'PHYSICAL' },
  { category_id: 6001, name: '취미/생활', type: 'PHYSICAL' },
  { category_id: 6002, name: '전문 프로그램', type: 'PHYSICAL' },
  { category_id: 6003, name: '외주', type: 'PHYSICAL' },
  { category_id: 6004, name: '기타', type: 'PHYSICAL' },
];

// 디지털 콘텐츠 타입 정의
export interface DigitalContent {
  fileName: string;
  fileUrl: string;
  fileSize: number;
  fileType: string;
  downloadLimit: number;
}
