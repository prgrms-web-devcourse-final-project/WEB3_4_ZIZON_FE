import NumberReadability from '@/components/atoms/texts/numberReadability/NumberReadability';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface PopularServiceItemProps {
  imageSrc: string;
  title: string;
  numberOfUsers: number;
  linkTo: string; // 서비스 아이템 클릭시 이동할 경로
}

export default function PopularServiceItem({
  imageSrc,
  title,
  numberOfUsers,
  linkTo,
}: PopularServiceItemProps) {
  const [imagePath, setImagePath] = useState(imageSrc);

  return (
    <Link href={linkTo} className="flex flex-col gap-12 items-start">
      <Image
        src={imagePath}
        alt="service-thumbnail-image"
        width={302}
        height={180}
        className="rounded-[16px]"
        onError={() => setImagePath('/public/images/DefaultImage.png')}
      />
      <h4 className="font-semibold text-20 text-black10">{title}</h4>
      <span className="flex gap-4 items-center font-regular text-16 text-black7 object-contain">
        <NumberReadability value={numberOfUsers} />
        <span>명 신청</span>
      </span>
    </Link>
  );
}
