'use client';

import Image from 'next/image';
import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';
import BannerTitle from '@/components/molecules/HomePage/BannerTitle';
import BannerButtons from '@/components/molecules/HomePage/BannerButtons';
import BannerCategories from '@/components/molecules/HomePage/BannerCategories';

function BannerSection() {
  return (
    <section className="flex flex-col items-center mt-64 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1590 h-390 flex items-center justify-center -z-10">
        <Image
          src={'/images/main-banner-bg-image.png'}
          width={1590}
          height={390}
          alt="banner"
          className="object-cover"
        />
      </div>
      <BannerTitle />
      <div className="flex flex-col items-center gap-48">
        <BannerButtons />
        <SearchBar
          onChange={() => {}}
          placeholder="어떤 서비스가 필요하세요?"
          type="large"
          value=""
        />
        <BannerCategories />
      </div>
    </section>
  );
}

export default BannerSection;
