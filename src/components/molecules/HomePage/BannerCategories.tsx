'use client';

import ServiceCategoryItem from '@/components/atoms/buttons/serviceCategoryItem/ServiceCategoryItem';

function BannerCategories() {
  return (
    <div className="flex gap-24">
      <ServiceCategoryItem type="Moving" linkTo="/expert?category=1000" />
      <ServiceCategoryItem type="Fix" linkTo="/expert?category=2000" />
      <ServiceCategoryItem type="Tutoring" linkTo="/expert?category=3000" />
      <ServiceCategoryItem type="Hobby" linkTo="/expert?category=4000" />
      <ServiceCategoryItem type="Contents" linkTo="/store" />
    </div>
  );
}

export default BannerCategories;
