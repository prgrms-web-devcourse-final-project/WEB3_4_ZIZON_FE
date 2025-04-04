import { DUMMY_PRODUCT_LIST } from '@/app/store/page';
import { ProductDetailType } from '@/app/store/products/[product_id]/page';
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
  product: ProductDetailType;
}

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
            <Link href={`/store/products/${index}`} key={product.title}>
              <ProductListItem {...product} size="small" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
