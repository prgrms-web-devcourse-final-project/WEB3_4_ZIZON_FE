import Image from 'next/image';
import Circle from '/public/icons/ExclamationCircle.svg';

interface PaymentNoticeProps {
  text: string;
}

export default function PaymentNotice({ text }: PaymentNoticeProps) {
  return (
    <div className="w-full flex gap-10 bg-primary0 rounded-[12px] px-24 py-20">
      <Image src={Circle} width={20} height={20} alt="exclamation-mark" />
      <span className="font-regular text-16 text-black10">{text}</span>
    </div>
  );
}
