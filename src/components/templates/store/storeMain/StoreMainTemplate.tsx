import { ProductType } from '@/app/store/page';
import StoreMainContent from '@/components/organisms/store/StoreMainContent';
import StoreSearchRegister from '@/components/organisms/store/StoreSearchResgister';

// page로 부터 받을 데이터  : 상품 목록
export default function StoreMainTemplate({ productList }: { productList: ProductType[] }) {
  return (
    <div className="w-full max-w-1280">
      <h1 className="font-semibold text-32 text-black12 mb-40">스토어</h1>
      <div className="w-full flex flex-col gap-32">
        <StoreSearchRegister />
        <StoreMainContent productList={productList} />
      </div>
    </div>
  );
}
