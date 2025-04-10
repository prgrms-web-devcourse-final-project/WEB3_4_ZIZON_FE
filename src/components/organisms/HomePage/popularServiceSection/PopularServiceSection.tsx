'use client';

import ServiceItemList from '@/components/molecules/HomePage/ServiceItemList';
import SectionTitle from '@/components/atoms/texts/sectionTitle/SectionTitle';
import { PopularServiceItemProps } from '@/components/molecules/popularServiceItem/PopularServiceItem';

export const POPULAR_SERVICE_ITEMS: PopularServiceItemProps[] = [
  {
    imageSrc: '/images/service-category-1.webp',
    title: '원룸/소형 이사',
    numberOfUsers: 1100000,
    linkTo: '/commission/common/start',
  },
  {
    imageSrc: '/images/service-category-2.webp',
    title: '냉장고 설치 및 수리',
    numberOfUsers: 150300,
    linkTo: '/commission/common/start',
  },
  {
    imageSrc: '/images/service-category-3.webp',
    title: '코딩 과외',
    numberOfUsers: 103200,
    linkTo: '/commission/common/start',
  },
  {
    imageSrc: '/images/service-category-4.webp',
    title: '피아노/키보드 레슨',
    numberOfUsers: 400000,
    linkTo: '/commission/common/start',
  },
];

function PopularServiceSection() {
  return (
    <section className="flex flex-col gap-40">
      <SectionTitle title="돕당 인기 서비스" />
      <ServiceItemList items={POPULAR_SERVICE_ITEMS} />
    </section>
  );
}

export default PopularServiceSection;
