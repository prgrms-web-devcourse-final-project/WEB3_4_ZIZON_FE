import React from 'react';
import Image from 'next/image';
import ChangePositionButton from '@/components/atoms/buttons/changePositionButton/ChangePositionButton';
import CertificationTag from '@/components/atoms/tags/certificationTag/CertificationTag';

interface ProfileInfoProps {
  profileImage: string;
  userName: string;
  isState: boolean;
  certificationBadgeText?: string;
  onChangeState: () => void
}
export default function ProfileInfo({profileImage, isState, certificationBadgeText, userName, onChangeState}: ProfileInfoProps) {
  return (
    <div className="grid grid-cols-1 gap-y-20 text-center items-center max-w-fit">
      <div className="flex max-w-full justify-center">
        <Image className="rounded-full m-auto" src={profileImage} alt={""} width={150} height={150} />
      </div>
      {isState && typeof certificationBadgeText == 'string'? <div className="max-w-fit mx-auto"><CertificationTag text={certificationBadgeText}/></div>: null}
      <div className="text-[20px] font-medium">
        <label>{userName}</label>
      </div>
      <ChangePositionButton isState={isState} onChangeState={onChangeState} />
    </div>
  );
}
