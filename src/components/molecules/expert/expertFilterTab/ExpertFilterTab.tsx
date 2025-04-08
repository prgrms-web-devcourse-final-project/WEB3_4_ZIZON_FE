'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  CAREER_CATEGORY,
  CareerCategoryIdType,
  CareerCategoryValueType,
  PROJECT_CATEGORY,
  ProjectCategoryIdType,
  ProjectCategoryValueType,
} from '@/constants/category';
import DefaultCheckbox from '@/components/atoms/checkboxes/defaultCheckbox/DefaultCheckbox';

const CATEGORY_LIST: Array<{
  categoryId: ProjectCategoryIdType;
  label: ProjectCategoryValueType;
}> = Object.entries(PROJECT_CATEGORY).map(([key, value]) => ({
  categoryId: Number(key) as ProjectCategoryIdType,
  label: value as ProjectCategoryValueType,
}));

const CAREER_LIST: Array<{
  categoryId: CareerCategoryIdType;
  label: CareerCategoryValueType;
}> = Object.entries(CAREER_CATEGORY).map(([key, value]) => ({
  categoryId: key as CareerCategoryIdType,
  label: value as CareerCategoryValueType,
}));

const Divider = () => <div className="w-full h-[1px] bg-black2 my-32" />;

export default function ExpertFilterTab() {
  const searchParams = useSearchParams();
  const category = Number(searchParams.get('category')) as ProjectCategoryIdType;
  const career = searchParams.get('career');
  const router = useRouter();

  const handleParameterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`/expert?${params.toString()}`);
  };

  return (
    <div className="w-411 h-fit px-24 py-32 bg-black1 rounded-[16px]">
      <h3 className="mb-24 font-semibold text-24"> 카테고리</h3>
      <div className="flex flex-col gap-8">
        {CATEGORY_LIST.map(item => (
          <DefaultCheckbox
            key={item.categoryId}
            label={item.label}
            checked={item.categoryId === category}
            onChange={checked => {
              handleParameterChange('category', item.categoryId.toString());
            }}
          />
        ))}
      </div>
      <Divider />
      <h3 className="mb-24 font-semibold text-24"> 경력 </h3>
      <div className="flex flex-col gap-8">
        {CAREER_LIST.map(item => (
          <DefaultCheckbox
            key={item.categoryId}
            label={item.label}
            checked={item.categoryId === career}
            onChange={checked => {
              handleParameterChange('career', item.categoryId.toString());
            }}
          />
        ))}
      </div>
    </div>
  );
}
