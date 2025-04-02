'use client';

import PopularServiceItem from '@/components/molecules/popularServiceItem/PopularServiceItem';
import { PopularServiceItemProps } from '@/components/molecules/popularServiceItem/PopularServiceItem';

interface ServiceItemListProps {
  items: PopularServiceItemProps[];
}

export default function ServiceItemList({ items }: ServiceItemListProps) {
  return (
    <div className="grid grid-cols-4 gap-24">
      {items.map(item => (
        <PopularServiceItem
          key={item.title}
          imageSrc={item.imageSrc}
          title={item.title}
          numberOfUsers={item.numberOfUsers}
          linkTo={item.linkTo}
        />
      ))}
    </div>
  );
}
