'use client';

import Image from 'next/image';
import ExpertSearch from '@/components/molecules/expertSearch/ExpertSearch';
import BannerTitle from '@/components/molecules/HomePage/BannerTitle';
import BannerButtons from '@/components/molecules/HomePage/BannerButtons';
import BannerCategories from '@/components/molecules/HomePage/BannerCategories';

function BannerSection() {
  return (
    <section className="flex flex-col items-center mt-64 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1590 h-390 flex items-center justify-center -z-10">
        <Image
          src={'/images/main-banner-bg-image.webp'}
          width={1590}
          height={390}
          alt="banner"
          className="object-cover"
          priority
        />
      </div>
      <BannerTitle />
      <div className="flex flex-col items-center gap-48">
        <BannerButtons />
        <ExpertSearch />
        <BannerCategories />
      </div>
    </section>
  );
}

export default BannerSection;
