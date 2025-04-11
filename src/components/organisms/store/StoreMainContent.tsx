import { Product } from '@/apis/store/getProductList';
import ProductListItem from '@/components/molecules/productListItem/ProductListItem';
import StoreTab from '@/components/molecules/store/StoreTab';
import Link from 'next/link';

export default function StoreMainContent({
  productList = [],
  category,
  onTabClick,
}: {
  productList: Product[];
  category: string;
  onTabClick: (category: string) => void;
}) {
  return (
    <div className="w-full flex justify-between">
      <StoreTab selectedCategory={category} onTabClick={onTabClick} />
      <div className="w-954 grid 2xl:grid-cols-3 grid-cols-2 gap-24">
        {!productList ||
          (productList.length === 0 && (
            <div className="col-span-2 text-center text-gray-500 mt-200">
              등록된 상품이 없습니다.
            </div>
          ))}

        {productList &&
          productList.map((product, index) => (
            <Link href={`/store/products/${product.id}`} key={product.id + `${index}`}>
              <ProductListItem product={product} size="large" />
            </Link>
          ))}
      </div>
    </div>
  );
}
