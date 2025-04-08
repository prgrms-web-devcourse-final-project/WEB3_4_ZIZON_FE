import Image from 'next/image';
import NumberReadability from '@/components/atoms/texts/numberReadability/NumberReadability';
import SmallTag from '@/components/atoms/tags/smallTag/SmallTag';

interface ProductListItemProps {
  size: 'small' | 'large';
  imageUrl: string;
  category: '디지털 컨텐츠' | '리빙';
  title: string;
  seller_name: string;
  price: number;
}

const SIZE_CONFIG = {
  small: {
    container: 'w-193',
    imageStlye: 'w-193 h-193',
    imageSize: 193,
  },
  large: {
    container: 'w-302',
    imageStlye: 'w-302 h-302',
    imageSize: 302,
  },
} as const;

function ProductListItem({
  size,
  imageUrl,
  category,
  title,
  seller_name,
  price,
}: ProductListItemProps) {
  const sizeStyle = SIZE_CONFIG[size];

  return (
    <div className={`${sizeStyle.container} flex flex-col gap-16 group`}>
      <div className={`${sizeStyle.imageStlye} rounded-2xl overflow-hidden`}>
        <Image
          src={imageUrl || '/images/DefaultImage.png'}
          alt={title}
          width={sizeStyle.imageSize}
          height={sizeStyle.imageSize}
          className="size-full object-cover group-hover:scale-105 transition-all duration-300 "
        />
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <SmallTag text={category} theme={category === '리빙' ? 'lightOrange' : 'lightBlue'} />
          <SmallTag text="소분류" theme="grey" />
        </div>
        <span className="text-16 font-regular text-black12 truncate">{title}</span>
        <span className="text-13 font-regular text-black7">{seller_name}</span>
      </div>

      <div className="flex text-20 font-bold text-black12">
        <NumberReadability value={price} />원
      </div>
    </div>
  );
}

export default ProductListItem;
