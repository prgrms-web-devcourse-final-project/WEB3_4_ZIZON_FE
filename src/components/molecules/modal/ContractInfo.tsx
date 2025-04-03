import CertificationTag from '@/components/atoms/tags/certificationTag/CertificationTag';
import { formatMoney } from '@/utils/moneyFormat';
import Image from 'next/image';

export interface ContractInfoProps {
  expertProfileImage: string;
  expertName: string;
  expertCategory: string;
  charge: number;
}

export default function ContractInfo({
  expertProfileImage,
  expertName,
  expertCategory,
  charge,
}: ContractInfoProps) {
  return (
    <div>
      {/* 전문가 프로필 */}
      <div className="flex items-center gap-16 mb-24">
        <Image
          src={expertProfileImage}
          alt="profile-image"
          width={80}
          height={80}
          className="rounded-[8px] w-80 h-80"
        />
        <div>
          <h2 className="text-20 text-black10 font-medium mb-12">{expertName}</h2>
          <CertificationTag text={expertCategory} />
        </div>
      </div>

      {/* 견적서금액 */}
      <div className="w-full bg-black2 px-24 py-20 rounded-[8px] flex items-center justify-between">
        <span className="font-regular text-black7 text-16">견적서 예상금액</span>
        <span className="font-semibold text-black7 text-16">총 {formatMoney(charge)}원</span>
      </div>
    </div>
  );
}
