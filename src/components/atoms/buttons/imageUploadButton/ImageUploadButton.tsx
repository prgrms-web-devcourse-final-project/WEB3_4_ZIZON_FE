'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { compressImage } from '@/utils/compressImage';

interface ImageUploadButtonProps {
  onImageUpload: (file: File) => void;
}

function ImageUploadButton({ onImageUpload }: ImageUploadButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;
    try {
      const compressedFile = await compressImage(file);
      onImageUpload(compressedFile);
    } catch (err) {
      console.error('압축 중 오류 발생:', err);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="w-100 h-100 p-5 rounded-lg bg-black2 flex flex-col items-center justify-center cursor-pointer hover:bg-black3 transition-colors duration-200 group"
    >
      <div className="w-24 h-24 rounded p-5 bg-black3 flex items-center justify-center mb-8 group-hover:bg-black4">
        <Image src="/icons/Plus.svg" alt="이미지 추가" width={20} height={20} />
      </div>
      <span className="text-13 text-black8">이미지 추가</span>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}

export default ImageUploadButton;
