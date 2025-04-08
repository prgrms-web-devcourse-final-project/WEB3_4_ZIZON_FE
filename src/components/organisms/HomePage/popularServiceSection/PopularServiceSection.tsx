'use client';

import ServiceItemList from '@/components/molecules/HomePage/ServiceItemList';
import SectionTitle from '@/components/atoms/texts/sectionTitle/SectionTitle';
import { PopularServiceItemProps } from '@/components/molecules/popularServiceItem/PopularServiceItem';

export const POPULAR_SERVICE_ITEMS: PopularServiceItemProps[] = [
  {
    imageSrc: '/images/DefaultImage.png',
    title: '원룸/소형 이사',
    numberOfUsers: 1000000,
    linkTo: '/',
  },
  {
    imageSrc: '/images/DefaultImage.png',
    title: '냉장고 설치 및 수리',
    numberOfUsers: 1000000,
    linkTo: '/',
  },
  {
    imageSrc: '/images/DefaultImage.png',
    title: '코딩 과외',
    numberOfUsers: 1000000,
    linkTo: '/',
  },
  {
    imageSrc: '/images/DefaultImage.png',
    title: '피아노/키보드 레슨',
    numberOfUsers: 1000000,
    linkTo: '/',
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
