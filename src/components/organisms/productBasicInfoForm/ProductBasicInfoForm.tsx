import React from 'react';
import LabeledInput from '@/components/molecules/labeledInput/LabeledInput';
import { ProductCategory } from '@/components/atoms/buttons/labelWithIconButton/LabelWithIconButton';
import SubCategoryDropdown from '@/components/molecules/subCategoryDropdown/SubCategoryDropdown';
import ImageUploadField from '@/components/molecules/imageUploadField/ImageUploadField';
import DigitalContentUploadField from '@/components/molecules/digitalContentUploadField/DigitalContentUploadField';
import TextareaInput from '@/components/atoms/inputs/textareaInput/TextareaInput';
import InputLabel from '@/components/atoms/texts/inputLabel/InputLabel';

export interface ProductBasicInfo {
  title: string;
  description: string;
  price: number;
  stock: number;
  thumbnailImage?: File;
  digitalContent?: File;
  subCategory?: string;
}

const SUB_CATEGORIES = {
  digital: [
    { value: 'it_digital', label: 'IT/Digital' },
    { value: 'etc', label: '기타' },
  ],
  living: [
    { value: 'hobby_life', label: '취미/생활' },
    { value: 'professional', label: '전문 프로그램' },
    { value: 'outsourcing', label: '외주' },
    { value: 'etc', label: '기타' },
  ],
};

interface ProductBasicInfoFormProps {
  productType: ProductCategory;
  basicInfo: ProductBasicInfo;
  onBasicInfoChange: (field: keyof ProductBasicInfo, value: string | number | File | null) => void;
}

export default function ProductBasicInfoForm({
  productType,
  basicInfo,
  onBasicInfoChange,
}: ProductBasicInfoFormProps) {
  const handleInputChange = (field: keyof ProductBasicInfo) => (value: string) => {
    if (field === 'price' || field === 'stock') {
      onBasicInfoChange(field, Number(value));
    } else {
      onBasicInfoChange(field, value);
    }
  };

  return (
    <div className="flex flex-col gap-32">
      <SubCategoryDropdown
        label="상품 카테고리"
        categories={SUB_CATEGORIES[productType]}
        selectedValue={basicInfo.subCategory}
        onChange={value => onBasicInfoChange('subCategory', value)}
      />
      <LabeledInput
        id="product-title"
        label="상품 이름"
        placeholder="상품 이름을 입력하세요"
        type="text"
        value={basicInfo.title}
        onChange={handleInputChange('title')}
      />
      <div className="flex flex-col gap-8">
        <InputLabel label="상품 설명" htmlFor="product-description" />
        <TextareaInput
          id="product-description"
          placeholder="상품 설명을 입력하세요"
          value={basicInfo.description}
          onChange={handleInputChange('description')}
          rows={6}
        />
      </div>
      <LabeledInput
        id="product-price"
        label="가격"
        placeholder="가격을 입력하세요"
        type="number"
        value={basicInfo.price.toString()}
        onChange={handleInputChange('price')}
      />
      <LabeledInput
        id="product-stock"
        label="재고"
        placeholder="재고를 입력하세요"
        type="number"
        value={basicInfo.stock.toString()}
        onChange={handleInputChange('stock')}
      />
      <ImageUploadField
        label="상품 썸네일"
        onImageChange={file => onBasicInfoChange('thumbnailImage', file)}
      />
      {productType === 'digital' && (
        <>
          <hr />
          <DigitalContentUploadField
            label="디지털 상품 파일"
            onFileUpload={file => onBasicInfoChange('digitalContent', file)}
          />
        </>
      )}
    </div>
  );
}
