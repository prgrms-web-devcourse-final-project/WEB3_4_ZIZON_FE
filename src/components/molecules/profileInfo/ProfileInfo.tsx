'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import ChangePositionButton from '@/components/atoms/buttons/changePositionButton/ChangePositionButton';
import CertificationTag from '@/components/atoms/tags/certificationTag/CertificationTag';
import { APIBuilder } from '@/utils/APIBuilder';

interface S3Response {
  presignedUrl: string;
  accessUrl: string;
}

export interface ProfileInfoProps {
  profileImage: string;
  name: string;
  isState: 'client' | 'expert';
  certificationBadgeText?: string;
  onChangeState: () => void;
}

export default function ProfileInfo({
  profileImage,
  name,
  isState,
  certificationBadgeText,
  onChangeState,
}: ProfileInfoProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSaveImage = async () => {
    if (!selectedImage) return;

    try {
      setIsUploading(true);

      // Presigned URL 요청
      const response = await APIBuilder.post('/api/s3/upload-url', {
        folder: 'members',
        fileName: selectedImage.name,
        contentType: selectedImage.type,
      })
        .build()
        .call<S3Response>();

      const { presignedUrl, accessUrl } = response.data;

      // S3에 이미지 업로드
      const uploadResponse = await fetch(presignedUrl, {
        method: 'PUT',
        body: selectedImage,
        headers: {
          'Content-Type': selectedImage.type,
        },
      });

      if (!uploadResponse.ok) {
        throw new Error('이미지 업로드 실패');
      }

      // 프로필 이미지 업데이트
      await APIBuilder.put('/api/members/profile-image', {
        profileImage: accessUrl,
      })
        .build()
        .call();

      setSelectedImage(null);
      setPreviewUrl(null);
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center gap-20">
      <div className="relative">
        <div className=" w-150 h-150 overflow-hidden rounded-full shadow-style1">
          <Image
            src={previewUrl || profileImage || '/images/DefaultImage.png'}
            alt={name ?? '장난스러운짱구02'}
            width={150}
            height={150}
            className="size-full object-cover"
          />
        </div>
        <div className="absolute bottom-3 right-3 flex items-center justify-center z-10">
          {selectedImage ? (
            <button
              onClick={handleSaveImage}
              disabled={isUploading}
              className="bg-primary4 rounded-full w-32 h-32 cursor-pointer flex items-center justify-center"
            >
              <Image src="/icons/Check.svg" alt="edit" width={20} height={20} />
            </button>
          ) : (
            <label htmlFor="profile-image">
              <button
                onClick={handleEditClick}
                className="bg-primary4 rounded-full w-32 h-32 cursor-pointer flex items-center justify-center"
              >
                <Image src="/icons/Upload.svg" alt="edit" width={20} height={20} />
              </button>
              <input
                ref={fileInputRef}
                id="profile-image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          )}
        </div>
      </div>
      {isState === 'expert' && certificationBadgeText && (
        <CertificationTag text={certificationBadgeText} />
      )}
      <h2 className="text-24 font-bold">{name ?? '장난스러운짱구02'}</h2>
      <ChangePositionButton isState={isState} onChangeState={onChangeState} />
    </div>
  );
}
