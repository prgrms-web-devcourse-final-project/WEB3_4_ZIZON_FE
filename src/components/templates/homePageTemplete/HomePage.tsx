'use client';

import BannerSection from '@/components/organisms/HomePage/bannerSection/BannerSection';
import PopularExpertSection from '@/components/organisms/HomePage/popularExpertSection/PopularExpertSection';
import PopularServiceSection from '@/components/organisms/HomePage/popularServiceSection/PopularServiceSection';
import RecentProjectSection from '@/components/organisms/HomePage/recentProjectSection/RecentProjectSection';
import StoreCategorySection from '@/components/organisms/HomePage/storeCategorySection/StoreCategorySection';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-100 mb-120">
      <BannerSection />
      <PopularServiceSection />
      <PopularExpertSection />
      <StoreCategorySection />
      <RecentProjectSection />
    </div>
  );
}
