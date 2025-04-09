import Tick from 'public/images/Tick.png';
import Image from 'next/image';
export default function ResultBanner({ status }: { status: 'SUCCESS' | 'FAIL' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-40">
      <Image src={Tick} alt="order-result-image" width={100} height={100} />
      {status === 'FAIL' ? (
        <h1 className="font-semibold text-32 text-redWarning">결제에 실패했습니다.</h1>
      ) : (
        <h1 className="font-semibold text-32 text-black12">결제에 완료되었습니다.</h1>
      )}
    </div>
  );
}
