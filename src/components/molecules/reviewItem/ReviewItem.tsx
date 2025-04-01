import Image from 'next/image';
import { getTimeAgo } from '@/utils/dateFormat';
import StarDefault from '@/components/atoms/starDefault/StarDefault';

interface ReviewItemProps {
  profile_image: string;
  name: string;
  content: string;
  review_type: string;
  created_at: Date;
  rating: number;
}

function ReviewItem({
  profile_image,
  name,
  content,
  review_type,
  created_at,
  rating,
}: ReviewItemProps) {
  return (
    <article className="w-628 flex flex-col">
      <div className="flex flex-col mb-12">
        <div className="flex gap-16 mb-12">
          <Image
            src={profile_image || '/images/DefaultImage.png'}
            alt="profile"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-8 mb-4">
              <span className="text-13 font-medium text-black6">{name}</span>
              <StarDefault rating={rating} />
            </div>
            <span className="text-16 font-medium text-black10">{review_type}</span>
          </div>
        </div>
        <p className="text-16 font-regular text-black7 leading-[140%]">{content}</p>
      </div>
      <span className="text-13 font-regular text-black6">{getTimeAgo(created_at)}</span>
    </article>
  );
}

export default ReviewItem;
