'use client';

import Image from 'next/image';
import ChangePositionButton from '@/components/atoms/buttons/changePositionButton/ChangePositionButton';
import CertificationTag from '@/components/atoms/tags/certificationTag/CertificationTag';

export interface ProfileInfoProps {
  profileImage: string;
  userName: string;
  isState: 'client' | 'expert';
  certificationBadgeText?: string;
  onChangeState: () => void;
}

export default function ProfileInfo({
  profileImage,
  userName,
  isState,
  certificationBadgeText,
  onChangeState,
}: ProfileInfoProps) {
  return (
    <div className="flex flex-col items-center gap-20">
      <div className="w-150 h-150 overflow-hidden rounded-full shadow-style1">
        <Image
          src={profileImage}
          alt="프로필 이미지"
          width={150}
          height={150}
          className="size-full object-cover"
        />
      </div>
      {isState === 'expert' && certificationBadgeText && (
        <CertificationTag text={certificationBadgeText} />
      )}
      <h2 className="text-24 font-bold">{userName}</h2>
      <ChangePositionButton isState={isState} onChangeState={onChangeState} />
    </div>
  );
}
