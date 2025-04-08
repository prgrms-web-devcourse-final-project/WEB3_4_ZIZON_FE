import React, { useState } from 'react';
import ImageUploadButton from '@/components/atoms/buttons/imageUploadButton/ImageUploadButton';
import Image from 'next/image';

interface ImageUploadFieldProps {
  label: string;
  onImageUpload: (file: File) => void;
}

export default function ImageUploadField({ label, onImageUpload }: ImageUploadFieldProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    onImageUpload(file);
    const imageUrl = URL.createObjectURL(file);
    setPreviewUrl(imageUrl);
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
