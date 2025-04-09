import getProductList from '@/apis/store/getProductList';
import StoreMainTemplate from '@/components/templates/store/storeMain/StoreMainTemplate';

export default async function StorePage({
  searchParams,
}: {
  searchParams: Promise<{ categoryId: string; page: string }>;
}) {
  const { categoryId, page } = await searchParams;
  const {
    products: productListData,
    currentPage,
    pageSize,
    hasNext,
  } = await getProductList({
    page: Number(page) || 0,
  });
  return (
    <div className="mt-72 flex justify-center">
      <StoreMainTemplate productList={productListData} />
    </div>
  );
}
