'use client';

import React, { useState } from 'react';
import ProductTypeSelector from '@/components/molecules/productTypeSelector/ProductTypeSelector';
import ProductBasicInfoForm, {
  ProductBasicInfo,
} from '@/components/organisms/productBasicInfoForm/ProductBasicInfoForm';
import ProductOptionForm from '@/components/organisms/productOptionForm/ProductOptionForm';
import { ProductOption } from '@/components/molecules/productOptionInput/ProductOptionInput';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { ProductCategory } from '@/components/atoms/buttons/labelWithIconButton/LabelWithIconButton';
import { useRouter } from 'next/navigation';
const initialBasicInfo: ProductBasicInfo = {
  title: '',
  description: '',
  price: 0,
  stock: 0,
  subCategory: '',
};

export default function ProductRegistrationPage() {
  const router = useRouter();
  const [productType, setProductType] = useState<ProductCategory>('digital');
  const [basicInfo, setBasicInfo] = useState<ProductBasicInfo>(initialBasicInfo);
  const [options, setOptions] = useState<ProductOption[]>([]);

  const handleBasicInfoChange = (
    field: keyof ProductBasicInfo,
    value: string | number | File | null,
  ) => {
    setBasicInfo(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // TODO: 상품 등록 로직 구현
    console.log({
      productType,
      basicInfo,
      options,
    });
  };

  return (
    <section className="w-full flex justify-center my-72">
      <article className="min-w-700 flex flex-col gap-32">
        <div className="flex flex-col gap-32 px-64 py-52 bg-black1 rounded-xl">
          <h1 className="text-24 font-bold text-black12 mb-12">상품 등록하기</h1>
          <ProductTypeSelector selectedType={productType} onChange={setProductType} />
          <ProductBasicInfoForm
            productType={productType}
            basicInfo={basicInfo}
            onBasicInfoChange={handleBasicInfoChange}
          />
          {productType === 'living' && (
            <>
              <hr />
              <ProductOptionForm options={options} onOptionsChange={setOptions} />
            </>
          )}
        </div>
        <div className="w-1/3 flex justify-end gap-16 self-end">
          <StandardButton
            text="취소"
            onClick={() => router.back()}
            disabled={false}
            state="default"
            size="full"
          />
          <StandardButton
            text="등록"
            onClick={handleSubmit}
            disabled={false}
            state="blue"
            size="full"
          />
        </div>
      </article>
    </section>
  );
}
