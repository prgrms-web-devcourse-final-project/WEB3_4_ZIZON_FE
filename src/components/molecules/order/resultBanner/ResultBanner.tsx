import Tick from 'public/images/Tick.png';
import Image from 'next/image';
export default function ResultBanner() {
  return (
    <div className="flex flex-col items-center justify-center gap-40">
      <Image src={Tick} alt="order-result-image" width={100} height={100} />
      <h1 className="font-semibold text-32 text-black12">결제가 완료되었습니다.</h1>
    </div>
  );
}
