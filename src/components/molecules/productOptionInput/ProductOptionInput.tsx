import React from 'react';
import LabeledInput from '@/components/molecules/labeledInput/LabeledInput';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';

export interface ProductOption {
  name: string;
  value: string;
  additionalPrice: number;
  stock: number;
}

interface ProductOptionInputProps {
  option: ProductOption;
  onOptionChange: (updatedOption: ProductOption) => void;
  onRemove: () => void;
}

export default function ProductOptionInput({
  option,
  onOptionChange,
  onRemove,
}: ProductOptionInputProps) {
  const handleInputChange = (field: keyof ProductOption) => (value: string) => {
    onOptionChange({
      ...option,
      [field]: field === 'additionalPrice' || field === 'stock' ? Number(value) : value,
    });
  };

  return (
    <div className="flex flex-col gap-16 p-16 border border-black3 rounded-lg">
      <div className="grid grid-cols-2 gap-16">
        <LabeledInput
          id="option-name"
          label="옵션 이름"
          placeholder="옵션 이름을 입력하세요"
          type="text"
          value={option.name}
          onChange={handleInputChange('name')}
        />
        <LabeledInput
          id="option-value"
          label="옵션 값"
          placeholder="옵션 값을 입력하세요"
          type="text"
          value={option.value}
          onChange={handleInputChange('value')}
        />
        <LabeledInput
          id="option-price"
          label="추가 가격"
          placeholder="추가 가격을 입력하세요"
          type="number"
          value={option.additionalPrice.toString()}
          onChange={handleInputChange('additionalPrice')}
        />
        <LabeledInput
          id="option-stock"
          label="재고"
          placeholder="재고를 입력하세요"
          type="number"
          value={option.stock.toString()}
          onChange={handleInputChange('stock')}
        />
      </div>
      <div className="flex justify-end">
        <StandardButton
          text="옵션 삭제"
          onClick={onRemove}
          disabled={false}
          state="red"
          size="fit"
        />
      </div>
    </div>
  );
}
