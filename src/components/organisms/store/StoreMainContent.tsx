import { ProductType } from '@/app/store/page';
import ProductListItem from '@/components/molecules/productListItem/ProductListItem';
import StoreTab from '@/components/molecules/store/StoreTab';
import Link from 'next/link';

export default function StoreMainContent({ productList }: { productList: ProductType[] }) {
  return (
    <div className="w-full flex justify-between">
      <StoreTab />
      <div className="w-954 grid 2xl:grid-cols-3 grid-cols-2 gap-24">
        {productList.map((product, index) => (
          <Link href={`/store/products/${index}`} key={product.title}>
            <ProductListItem {...product} size="large" />
          </Link>
        ))}
      </div>
    </div>
  );
}
