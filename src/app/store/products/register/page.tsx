'use client';

import React, { useState } from 'react';
import ProductTypeSelector, {
  ProductTypeValue,
} from '@/components/molecules/productTypeSelector/ProductTypeSelector';
import ProductBasicInfoForm, {
  ProductBasicInfo as FormProductBasicInfo,
} from '@/components/organisms/productBasicInfoForm/ProductBasicInfoForm';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { useRouter } from 'next/navigation';
import createProduct, { CreateProductRequest } from '@/apis/store/createProduct';
import { putImageUpload } from '@/apis/imageUpload/putImageUpload';
import { putFileUpload } from '@/apis/imageUpload/putFileUpload';
import { toast } from 'sonner';
import { categories } from '@/types/product';

const initialBasicInfo: FormProductBasicInfo = {
  title: '',
  description: '',
  price: 0,
  stock: 0,
  subCategory: '',
  downloadLimit: 1,
};

// 파일 확장자 추출 함수
const getFileExtension = (file: File): string => {
  const fileName = file.name;
  const lastDotIndex = fileName.lastIndexOf('.');
  return lastDotIndex > 0 ? fileName.slice(lastDotIndex + 1).toUpperCase() : '';
};

export default function ProductRegistrationPage() {
  const router = useRouter();
  const [productType, setProductType] = useState<ProductTypeValue>('digital');
  const [basicInfo, setBasicInfo] = useState<FormProductBasicInfo>(initialBasicInfo);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBasicInfoChange = (
    field: keyof FormProductBasicInfo,
    value: string | number | File | null,
  ) => {
    setBasicInfo(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      // 필수 필드 검증
      if (
        !basicInfo.title ||
        !basicInfo.description ||
        !basicInfo.price ||
        !basicInfo.stock ||
        !basicInfo.subCategory
      ) {
        toast.error('모든 필수 항목을 입력해주세요.');
        return;
      }

      // 썸네일 이미지 업로드
      if (!basicInfo.thumbnailImage) {
        toast.error('썸네일 이미지를 업로드해주세요.');
        return;
      }

      const thumbnailImageUrl = await putImageUpload({
        tableUnionType: 'products',
        file: basicInfo.thumbnailImage,
      });

      if (!thumbnailImageUrl) {
        throw new Error('썸네일 이미지 업로드에 실패했습니다.');
      }

      // 디지털 콘텐츠 파일 업로드
      let digitalContentUrl: string;
      if (productType === 'digital' && basicInfo.digitalContent) {
        digitalContentUrl = await putFileUpload({
          tableUnionType: 'products',
          file: basicInfo.digitalContent,
          fileName: basicInfo.digitalContent.name,
        });

        if (!digitalContentUrl) {
          throw new Error('디지털 콘텐츠 파일 업로드에 실패했습니다.');
        }
      }

      // subCategory를 category_id로 변환
      const category = categories.find(
        cat =>
          cat.type === (productType === 'digital' ? 'DIGITAL' : 'PHYSICAL') &&
          cat.name === basicInfo.subCategory,
      );

      if (!category) {
        throw new Error('유효하지 않은 카테고리입니다.');
      }

      const productData: CreateProductRequest = {
        categoryId: category.category_id,
        title: basicInfo.title,
        description: basicInfo.description,
        price: basicInfo.price,
        stock: basicInfo.stock,
        productType: productType === 'digital' ? 'DIGITAL' : 'PHYSICAL',
        thumbnailImage: thumbnailImageUrl,
        digitalContents:
          productType === 'digital' && basicInfo.digitalContent
            ? [
                {
                  fileName: basicInfo.digitalContent.name,
                  fileUrl: digitalContentUrl || '',
                  fileSize: basicInfo.digitalContent.size,
                  fileType: getFileExtension(basicInfo.digitalContent),
                  downloadLimit: basicInfo.downloadLimit || 1,
                },
              ]
            : undefined,
      };

      await createProduct(productData);
      toast.success('상품이 성공적으로 등록되었습니다.');
      router.push('/store');
    } catch (error) {
      console.error('상품 등록 실패:', error);
      toast.error(error instanceof Error ? error.message : '상품 등록에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
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
        </div>
        <div className="w-1/3 flex justify-end gap-16 self-end">
          <StandardButton
            text="취소"
            onClick={() => router.back()}
            disabled={isSubmitting}
            state="default"
            size="full"
          />
          <StandardButton
            text="등록"
            onClick={handleSubmit}
            disabled={isSubmitting}
            state="blue"
            size="full"
          />
        </div>
      </article>
    </section>
  );
}
