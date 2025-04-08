import StoreMainTemplate from '@/components/templates/store/storeMain/StoreMainTemplate';

export interface ProductType {
  category: '디지털 컨텐츠' | '리빙';
  imageUrl: string;
  price: number;
  seller_name: string;
  size: string;
  title: string;
}

export const DUMMY_PRODUCT_LIST: ProductType[] = [
  {
    category: '디지털 컨텐츠',
    imageUrl: '/images/DefaultImage.png',
    price: 35000,
    seller_name: '코딩천재',
    size: 'large',
    title: '디테일이 살아있는 차트 UI',
  },
  {
    category: '디지털 컨텐츠',
    imageUrl: '/images/DefaultImage.png',
    price: 50000,
    seller_name: '디자인마스터',
    size: 'medium',
    title: '모던한 웹사이트 디자인 템플릿',
  },
  {
    category: '디지털 컨텐츠',
    imageUrl: '/images/DefaultImage.png',
    price: 15000,
    seller_name: '개발왕',
    size: 'small',
    title: '효율적인 코드 스니펫 모음',
  },
  {
    category: '리빙',
    imageUrl: '/images/DefaultImage.png',
    price: 20000,
    seller_name: '교육전문가',
    size: 'large',
    title: 'React 초급 강의 자료',
  },
  {
    category: '디지털 컨텐츠',
    imageUrl: '/images/DefaultImage.png',
    price: 45000,
    seller_name: 'UI/UX 디자이너',
    size: 'medium',
    title: '사용자 친화적인 UI 컴포넌트',
  },
];

export default function StorePage() {
  return (
    <div className="mt-72 flex justify-center">
      <StoreMainTemplate productList={DUMMY_PRODUCT_LIST} />
    </div>
  );
}
