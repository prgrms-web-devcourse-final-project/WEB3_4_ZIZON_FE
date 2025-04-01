import Image from 'next/image';
import StarOnLarge from 'public/icons/StarOnLarge.svg';

interface StarTagProps {
  rating: number;
  reviewCount: number;
}

const StarTag = ({ rating, reviewCount }: StarTagProps) => {
  return (
    <div className="flex items-center gap-2 px-12 py-8 bg-black1 border border-black3 rounded-full">
      <Image src={StarOnLarge} alt="별점" width={16} height={14} />
      <div className="flex gap-2 items-end">
        <span className="inline-block text-13 mr-2 text-black7 font-medium">
          {rating.toFixed(1)}
        </span>
        <span className="inline-block text-11 text-black7 font-regular">({reviewCount})</span>
      </div>
    </div>
  );
};

export default StarTag;
