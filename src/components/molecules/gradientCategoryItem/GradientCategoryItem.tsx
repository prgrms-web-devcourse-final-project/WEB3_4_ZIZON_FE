import Link from 'next/link';
import Image from 'next/image';
export interface GradientCategoryItemProps {
  categoryName: string;
  caption: string;
  linkTo: string;
  imageSrc: string;
}

export default function GradientCategoryItem({
  categoryName,
  caption,
  linkTo,
  imageSrc,
}: GradientCategoryItemProps) {
  return (
    <Link href={linkTo} className="block relative w-302 h-420 rounded-[16px] overflow-hidden group">
      {/* 배경이미지 */}
      <div className="w-302 h-420 rounded-16 overflow-hidden">
        <Image
          src={imageSrc}
          width={302}
          height={420}
          alt={`${categoryName}-thumbnail-image`}
          className="size-full object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>
      {/* 그라디언트 오버레이 */}
      <div className="absolute top-0 left-0 bg-linear-to-b from-transparent  to-black/80 z-10 w-full h-full rounded-16"></div>
      {/* 텍스트 */}
      <div className="absolute bottom-32 left-32 z-20 text-black1">
        <h4 className="font-bold text-24 mb-12"> {categoryName}</h4>
        <span className="font-medium text-16 text-black3">{caption} </span>
      </div>
    </Link>
  );
}
