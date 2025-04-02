import Image from 'next/image';
import ExpertInfoCard from '@/components/molecules/expert/expertInfoCard/ExpertInfoCard';
import { PROJECT_CATEGORY, ProjectCategoryIdType } from '@/constants/category';
import CertificationTag from '@/components/atoms/tags/certificationTag/CertificationTag';
import React, { ReactElement } from 'react';
interface ExpertProfileProps {
  profileImageUrl: string;
  name: string;
  introduction: string;
  categoryId: ProjectCategoryIdType;
  ExpertInfoCardComponent: ReactElement<typeof ExpertInfoCard>;
}

export default function ExpertProfile({
  profileImageUrl,
  name,
  introduction,
  categoryId,
  ExpertInfoCardComponent,
}: ExpertProfileProps) {
  const certifiedName = PROJECT_CATEGORY[categoryId];

  return (
    <div className="flex flex-col gap-24">
      <Image
        src={profileImageUrl}
        width={150}
        height={150}
        className="rounded-[16px] object-cover w-150 h-150"
        alt="expert-profile-image"
      />
      <div className="flex flex-col gap-16">
        <CertificationTag text={certifiedName} />
        <h1 className="text-28 font-bold text-black12">{name}</h1>
        <h2 className="text-16 font-regular text-black10">{introduction}</h2>
      </div>
      {ExpertInfoCardComponent}
    </div>
  );
}
