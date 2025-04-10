import React, { useState } from 'react';
import ImageUploadButton from '@/components/atoms/buttons/imageUploadButton/ImageUploadButton';
import Image from 'next/image';
import { TableUnionType } from '@/apis/imageUpload/modules/postImageUpload';

interface ImageUploadFieldProps {
  label: string;
  tableUnionType?: TableUnionType;
  onImageChange?: (file: File) => void;
}

export default function ImageUploadField({ label, onImageChange }: ImageUploadFieldProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    // 파일을 URL로 변환하여 미리보기 표시
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    // 부모 컴포넌트에 파일 전달
    if (onImageChange) {
      onImageChange(file);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <p className="text-16 font-medium text-black12">{label}</p>
      <div className="flex gap-16">
        <ImageUploadButton onImageUpload={handleImageUpload} />
        {previewUrl && (
          <div className="relative w-100 h-100 rounded-lg border border-black3 overflow-hidden">
            <Image src={previewUrl} alt="미리보기 이미지" fill className="object-cover" />
          </div>
        )}
      </div>
    </div>
  );
}
