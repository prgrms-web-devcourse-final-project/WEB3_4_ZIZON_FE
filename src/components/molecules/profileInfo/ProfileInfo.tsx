'use client';

import Image from 'next/image';
import ChangePositionButton from '@/components/atoms/buttons/changePositionButton/ChangePositionButton';
import CertificationTag from '@/components/atoms/tags/certificationTag/CertificationTag';

export interface ProfileInfoProps {
  profileImage: string;
  name: string;
  isState: 'client' | 'expert';
  certificationBadgeText?: string;
  onChangeState: () => void;
}

export default function ProfileInfo({
  profileImage,
  name,
  isState,
  certificationBadgeText,
  onChangeState,
}: ProfileInfoProps) {
  return (
    <div className="flex flex-col items-center gap-20">
      <div className="w-150 h-150 overflow-hidden rounded-full shadow-style1">
        <Image
          src={profileImage ?? '/images/DefaultImage.png'}
          alt={name ?? '장난스러운짱구02'}
          width={150}
          height={150}
          className="size-full object-cover"
        />
      </div>
      {isState === 'expert' && certificationBadgeText && (
        <CertificationTag text={certificationBadgeText} />
      )}
      <h2 className="text-24 font-bold">{name ?? '장난스러운짱구02'}</h2>
      <ChangePositionButton isState={isState} onChangeState={onChangeState} />
    </div>
  );
}
