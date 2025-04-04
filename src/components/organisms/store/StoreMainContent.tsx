import { ProductType } from '@/app/store/page';
import ProductListItem from '@/components/molecules/productListItem/ProductListItem';
import StoreTab from '@/components/molecules/store/StoreTab';

export default function StoreMainContent({ productList }: { productList: ProductType[] }) {
  return (
    <div className="w-full flex justify-between">
      <StoreTab />
      <div className="w-954 grid 2xl:grid-cols-3 grid-cols-2 gap-24">
        {productList.map((product, index) => (
          <ProductListItem {...product} size="large" key={product.title} />
        ))}
      </div>
    </div>
  );
}
