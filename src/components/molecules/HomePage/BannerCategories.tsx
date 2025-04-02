'use client';

import ServiceCategoryItem from '@/components/atoms/buttons/serviceCategoryItem/ServiceCategoryItem';

function BannerCategories() {
  return (
    <div className="flex gap-24">
      <ServiceCategoryItem type="Moving" />
      <ServiceCategoryItem type="Fix" />
      <ServiceCategoryItem type="Tutoring" />
      <ServiceCategoryItem type="Hobby" />
      <ServiceCategoryItem type="Contents" />
    </div>
  );
}

export default BannerCategories;
