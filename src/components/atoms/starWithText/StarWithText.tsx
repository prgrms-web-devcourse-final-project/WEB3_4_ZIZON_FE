import React from 'react';
import Image from 'next/image';
import StarOnLarge from 'public/icons/StarOnLarge.svg';
import StarOffLarge from 'public/icons/StarOffLarge.svg';

interface StarWithTextProps {
  rating: number;
  maxRating?: number;
  reviewCount?: number;
}

const StarWithText: React.FC<StarWithTextProps> = ({ rating, maxRating = 5, reviewCount }) => {
  return (
    <div className="flex items-center gap-8">
      <div className="flex gap-1">
        {[...Array(maxRating)].map((_, index) => (
          <Image
            key={index}
            src={index < rating ? StarOnLarge : StarOffLarge}
            alt={`별점 ${index + 1}`}
            width={16}
            height={14}
          />
        ))}
      </div>
      {reviewCount !== undefined && (
        <span className="text-sm text-black7 font-medium">{reviewCount}개 리뷰</span>
      )}
    </div>
  );
};

export default StarWithText;
