import React from 'react';
import ImageUploadButton from '@/components/atoms/buttons/imageUploadButton/ImageUploadButton';

interface ImageUploadFieldProps {
  label: string;
  onImageUpload: (file: File) => void;
}

export default function ImageUploadField({ label, onImageUpload }: ImageUploadFieldProps) {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-16 font-medium text-black12">{label}</p>
      <ImageUploadButton onImageUpload={onImageUpload} />
    </div>
  );
}
