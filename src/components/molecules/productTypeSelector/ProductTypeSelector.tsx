import React from 'react';
import LabelWithIconButton, {
  ProductCategory,
} from '@/components/atoms/buttons/labelWithIconButton/LabelWithIconButton';

interface ProductTypeSelectorProps {
  selectedType: ProductCategory;
  onChange: (type: ProductCategory) => void;
}

interface CategoryOption {
  id: string;
  label: string;
  value: ProductCategory;
}

const CATEGORY_OPTIONS: CategoryOption[] = [
  { id: 'digital', label: 'IT/Digital', value: 'digital' },
  { id: 'living', label: '리빙', value: 'living' },
];

export default function ProductTypeSelector({ selectedType, onChange }: ProductTypeSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-16">
      {CATEGORY_OPTIONS.map(option => (
        <LabelWithIconButton
          key={option.id}
          name="product-type"
          value={option.value}
          state={selectedType === option.value ? 'active' : 'default'}
          onClick={() => onChange(option.value)}
        />
      ))}
    </div>
  );
}
