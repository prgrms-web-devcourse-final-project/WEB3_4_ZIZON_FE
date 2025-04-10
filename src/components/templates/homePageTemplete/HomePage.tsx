'use client';

import BannerSection from '@/components/organisms/HomePage/bannerSection/BannerSection';
import PopularExpertSection from '@/components/organisms/HomePage/popularExpertSection/PopularExpertSection';
import PopularServiceSection from '@/components/organisms/HomePage/popularServiceSection/PopularServiceSection';
import RecentProjectSection from '@/components/organisms/HomePage/recentProjectSection/RecentProjectSection';
import StoreCategorySection from '@/components/organisms/HomePage/storeCategorySection/StoreCategorySection';
import { useEffect, useState } from 'react';
import { getSortedExpertsByCategory, SortedExperts } from '@/apis/main/getPopularExpert';

export default function HomePage() {
  const [expertsByCategory, setExpertsByCategory] = useState<SortedExperts>({});

  useEffect(() => {
    const fetchExperts = async () => {
      const sortedExperts = await getSortedExpertsByCategory();
      setExpertsByCategory(sortedExperts);
    };

    fetchExperts();
  }, []);
  return (
    <div className="flex flex-col items-center gap-100 mb-120">
      <BannerSection />
      <PopularServiceSection />
      <PopularExpertSection expertsByCategory={expertsByCategory}/>
      <StoreCategorySection />
      <RecentProjectSection />
    </div>
  );
}
