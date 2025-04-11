import React from 'react';
import LabeledInput from '@/components/molecules/labeledInput/LabeledInput';
import SubCategoryDropdown from '@/components/molecules/subCategoryDropdown/SubCategoryDropdown';
import ImageUploadField from '@/components/molecules/imageUploadField/ImageUploadField';
import DigitalContentUploadField from '@/components/molecules/digitalContentUploadField/DigitalContentUploadField';
import TextareaInput from '@/components/atoms/inputs/textareaInput/TextareaInput';
import InputLabel from '@/components/atoms/texts/inputLabel/InputLabel';
import { Category, categories } from '@/types/product';
import { ProductTypeValue } from '@/components/molecules/productTypeSelector/ProductTypeSelector';

export interface ProductBasicInfo {
  title: string;
  description: string;
  price: number;
  stock: number;
  thumbnailImage?: File;
  digitalContent?: File;
  subCategory?: string;
  downloadLimit?: number;
}

// 카테고리 타입에 따른 필터링 함수
const getFilteredCategories = (productType: ProductTypeValue): Category[] => {
  const type = productType === 'digital' ? 'DIGITAL' : 'PHYSICAL';
  return categories.filter(category => category.type === type);
};

// 카테고리 옵션 변환 함수
const convertToDropdownOptions = (categories: Category[]) => {
  return categories.map(category => ({
    value: category.name,
    label: category.name,
  }));
};

interface ProductBasicInfoFormProps {
  productType: ProductTypeValue;
  basicInfo: ProductBasicInfo;
  onBasicInfoChange: (field: keyof ProductBasicInfo, value: string | number | File | null) => void;
}

export default function ProductBasicInfoForm({
  productType,
  basicInfo,
  onBasicInfoChange,
}: ProductBasicInfoFormProps) {
  const handleInputChange = (field: keyof ProductBasicInfo) => (value: string) => {
    if (field === 'price' || field === 'stock' || field === 'downloadLimit') {
      onBasicInfoChange(field, Number(value));
    } else {
      onBasicInfoChange(field, value);
    }
  };

  // 현재 상품 타입에 맞는 카테고리 목록 가져오기
  const filteredCategories = getFilteredCategories(productType);
  const categoryOptions = convertToDropdownOptions(filteredCategories);

  return (
    <div className="flex flex-col gap-32">
      <SubCategoryDropdown
        label="상품 카테고리"
        categories={categoryOptions}
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
          {basicInfo.digitalContent && (
            <LabeledInput
              id="product-download-limit"
              label="다운로드 횟수"
              placeholder="다운로드 횟수를 입력하세요"
              type="number"
              value={basicInfo.downloadLimit?.toString() || '1'}
              onChange={handleInputChange('downloadLimit')}
            />
          )}
        </>
      )}
    </div>
  );
}
