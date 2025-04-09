import { ProductResponseType } from '@/apis/store/getProduct';
import HorizontalTab from '@/components/molecules/horizontalTab/HorizontalTab';
import ProductListItem from '@/components/molecules/productListItem/ProductListItem';
import Link from 'next/link';

const TAB_ARRAY = [
  { name: 'info', text: '상품정보' },
  { name: 'review', text: '리뷰' },
  { name: 'question', text: '문의' },
  { name: 'recommend', text: '추천' },
];

interface StoreDetailInfoProps {
  product: ProductResponseType;
}

const DUMMY_PRODUCT_LIST = [
  {
    id: 7,
    name: '디지털 물품 등록 테스트',
    description: '설명',
    price: 50000.0,
    productType: 'DIGITAL',
    thumbnailUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReH1nivRV_9yG4wz04xIz1EEh-J69U_2JRaA&s',
    expertName: '전문가',
    categoryName: '이사/청소',
    createdAt: '2025-04-07T23:00:03',
  },
  {
    id: 6,
    name: '물품 등록 테스트',
    description: '설명',
    price: 50000.0,
    productType: 'PHYSICAL',
    thumbnailUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReH1nivRV_9yG4wz04xIz1EEh-J69U_2JRaA&s',
    expertName: '전문가',
    categoryName: '이사/청소',
    createdAt: '2025-04-07T23:00:03',
  },
  {
    id: 5,
    name: '물품 등록 테스트',
    description: '설명',
    price: 50000.0,
    productType: 'PHYSICAL',
    thumbnailUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReH1nivRV_9yG4wz04xIz1EEh-J69U_2JRaA&s',
    expertName: '전문가',
    categoryName: '이사/청소',
    createdAt: '2025-04-07T23:00:03',
  },
  {
    id: 4,
    name: '물품 등록 테스트',
    description: '설명',
    price: 50000.0,
    productType: 'PHYSICAL',
    thumbnailUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReH1nivRV_9yG4wz04xIz1EEh-J69U_2JRaA&s',
    expertName: '전문가',
    categoryName: '이사/청소',
    createdAt: '2025-04-07T23:00:03',
  },
  {
    id: 3,
    name: '물품 등록 테스트',
    description: '설명',
    price: 50000.0,
    productType: 'PHYSICAL',
    thumbnailUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReH1nivRV_9yG4wz04xIz1EEh-J69U_2JRaA&s',
    expertName: '전문가',
    categoryName: '이사/청소',
    createdAt: '2025-04-07T23:00:03',
  },
];

const Divider = () => {
  return <div className="w-full h-[1px] bg-black4" />;
};

export default function StoreDetailInfo({ product }: StoreDetailInfoProps) {
  return (
    <div className="w-full flex flex-col gap-40">
      {/* Tab 영역 */}
      <HorizontalTab tabs={TAB_ARRAY} />

      {/* 상품 정보 영역 */}
      <div id="info">
        <h3 className="text-20 text-black10 font-bold mb-24">상품정보</h3>
        <p className="text-16 text-black7 font-medium leading-[2]">{product.description}</p>
      </div>

      <Divider />

      {/* 추천 상품 영역 */}
      <div id="recommend">
        <h3 className="text-20 text-black10 font-bold mb-24">추천</h3>
        <div className="w-full grid grid-cols-4 gap-24">
          {DUMMY_PRODUCT_LIST.map((product, index) => (
            <Link href={`/store/products/${product.id}`} key={product.name}>
              <ProductListItem product={product} size="small" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
