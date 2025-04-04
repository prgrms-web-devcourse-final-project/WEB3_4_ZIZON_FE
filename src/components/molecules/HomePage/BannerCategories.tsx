'use client';

import ServiceCategoryItem from '@/components/atoms/buttons/serviceCategoryItem/ServiceCategoryItem';

function BannerCategories() {
  return (
    <div className="flex gap-24">
      <ServiceCategoryItem type="Moving" linkTo="/expert" />
      <ServiceCategoryItem type="Fix" linkTo="/expert" />
      <ServiceCategoryItem type="Tutoring" linkTo="/expert" />
      <ServiceCategoryItem type="Hobby" linkTo="/expert" />
      <ServiceCategoryItem type="Contents" linkTo="/store" />
    </div>
  );
}

export default BannerCategories;
