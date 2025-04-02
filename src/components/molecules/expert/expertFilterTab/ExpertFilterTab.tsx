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

interface ExpertFilterTabProps {
  selectedCategory: number;
  selectedCareer: string;
  onCategoryChange: (categoryId: ProjectCategoryIdType, checked: boolean) => void;
  onCareerChange: (careerId: CareerCategoryIdType, checked: boolean) => void;
}

const Divider = () => <div className="w-full h-[1px] bg-black2 my-32" />;

export default function ExpertFilterTab({
  selectedCategory,
  selectedCareer,
  onCategoryChange,
  onCareerChange,
}: ExpertFilterTabProps) {
  return (
    <div className="w-411 h-fit px-24 py-32 bg-black1 rounded-[16px]">
      <h3 className="mb-24 font-semibold text-24"> 카테고리</h3>
      <div className="flex flex-col gap-8">
        {CATEGORY_LIST.map(category => (
          <DefaultCheckbox
            key={category.categoryId}
            label={category.label}
            checked={category.categoryId === selectedCategory}
            onChange={checked => {
              onCategoryChange(category.categoryId, checked);
            }}
          />
        ))}
      </div>
      <Divider />
      <h3 className="mb-24 font-semibold text-24"> 경력 </h3>
      <div className="flex flex-col gap-8">
        {CAREER_LIST.map(career => (
          <DefaultCheckbox
            key={career.categoryId}
            label={career.label}
            checked={career.categoryId === selectedCareer}
            onChange={checked => {
              onCareerChange(career.categoryId, checked);
            }}
          />
        ))}
      </div>
    </div>
  );
}
