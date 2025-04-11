import React from 'react';
import LabelWithIconButton from '@/components/atoms/buttons/labelWithIconButton/LabelWithIconButton';

// 상품 타입 정의
export type ProductTypeValue = 'digital' | 'living';

interface ProductTypeSelectorProps {
  selectedType: ProductTypeValue;
  onChange: (type: ProductTypeValue) => void;
}

// 카테고리 타입별 옵션 생성
const CATEGORY_OPTIONS = [
  { id: 'digital', label: 'IT/Digital', value: 'digital' as ProductTypeValue },
  { id: 'living', label: '리빙', value: 'living' as ProductTypeValue },
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
