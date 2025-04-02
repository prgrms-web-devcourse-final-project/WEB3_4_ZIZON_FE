'use client';

import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { ExpertCategory, EXPERT_CATEGORIES } from '@/constants/expert';

interface ExpertCategoryButtonsProps {
  selectedCategory: ExpertCategory;
  onCategorySelect: (category: ExpertCategory) => void;
}

export default function ExpertCategoryButtons({
  selectedCategory,
  onCategorySelect,
}: ExpertCategoryButtonsProps) {
  return (
    <div className="flex gap-16">
      {EXPERT_CATEGORIES.map(category => (
        <StandardButton
          key={category}
          text={category}
          onClick={() => onCategorySelect(category)}
          disabled={false}
          state={selectedCategory === category ? 'light-blue' : 'default'}
        />
      ))}
    </div>
  );
}
