import Image from 'next/image';
import Moving from '../../../../../public/images/Moving.png';
import Fix from '../../../../../public/images/Fix.png';
import Tutoring from '../../../../../public/images/Tutoring.png';
import Hobby from '../../../../../public/images/Hobby.png';
import Contents from '../../../../../public/images/Contents.png';
import Link from 'next/link';

interface ServiceCategoryItemProps {
  type: 'Moving' | 'Fix' | 'Tutoring' | 'Hobby' | 'Contents';
  linkTo?: string;
}

const nameVariation = {
  Moving: '이사/청소',
  Fix: '설치/수리',
  Tutoring: '과외',
  Hobby: '취미/자기계발',
  Contents: '작업물',
} as const;

const imageVariation = {
  Moving,
  Fix,
  Tutoring,
  Hobby,
  Contents,
} as const;

export default function ServiceCategoryItem({ type, linkTo = '/' }: ServiceCategoryItemProps) {
  return (
    <Link href={linkTo} className="flex flex-col items-center justify-center gap-8">
      <div className="w-84 h-84 rounded-[8px] flex justify-center items-center bg-black1 hover:shadow-style1 transition-shadow duration-400">
        <Image
          src={imageVariation[type]}
          alt={`${nameVariation[type]}-image`}
          width={50}
          height={50}
        />
      </div>
      <span className="text-13 font-regular text-black10">{nameVariation[type]}</span>
    </Link>
  );
}
