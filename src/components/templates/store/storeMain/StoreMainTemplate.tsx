import StoreMainContent from '@/components/organisms/store/StoreMainContent';
import StoreSearchRegister from '@/components/organisms/store/StoreSearchResgister';

// page로 부터 받을 데이터  : 상품 목록
export default function StoreMainTemplate() {
  return (
    <div className="w-full">
      <h1 className="font-semibold text-32 text-black12 mb-40">스토어</h1>
      <div className="flex flex-col gap-32">
        <StoreSearchRegister />

        <StoreMainContent />
      </div>
    </div>
  );
}
