import React from 'react';
import ProductOptionInput, {
  ProductOption,
} from '@/components/molecules/productOptionInput/ProductOptionInput';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';

interface ProductOptionFormProps {
  options: ProductOption[];
  onOptionsChange: (options: ProductOption[]) => void;
}

export default function ProductOptionForm({ options, onOptionsChange }: ProductOptionFormProps) {
  const handleAddOption = () => {
    onOptionsChange([...options, { name: '', value: '', additionalPrice: 0, stock: 0 }]);
  };

  const handleOptionChange = (index: number, updatedOption: ProductOption) => {
    const newOptions = [...options];
    newOptions[index] = updatedOption;
    onOptionsChange(newOptions);
  };

  const handleRemoveOption = (index: number) => {
    onOptionsChange(options.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-16">
      <div className="flex justify-between items-center">
        <h3 className="text-18 font-semibold text-black12">상품 옵션</h3>
        <StandardButton
          text="옵션 추가"
          onClick={handleAddOption}
          disabled={false}
          state="blue"
          size="fit"
        />
      </div>
      <div className="flex flex-col gap-16">
        {options.map((option, index) => (
          <ProductOptionInput
            key={index}
            option={option}
            onOptionChange={updatedOption => handleOptionChange(index, updatedOption)}
            onRemove={() => handleRemoveOption(index)}
          />
        ))}
      </div>
    </div>
  );
}
