'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import ChangePositionButton from '@/components/atoms/buttons/changePositionButton/ChangePositionButton';
import CertificationTag from '@/components/atoms/tags/certificationTag/CertificationTag';
import { putImageUpload } from '@/apis/imageUpload/putImageUpload';
import { updateUser } from '@/apis/user/updateUser';
import { useUserStore } from '@/store/userStore';
import { toast } from 'sonner';

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
  const { member, setMember } = useUserStore();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSaveImage = async () => {
    if (!selectedImage || !member?.id) return;

    try {
      setIsUploading(true);

      // 이미지 업로드 및 URL 받기
      const accessUrl = await putImageUpload({
        tableUnionType: 'members',
        file: selectedImage,
      });

      if (!accessUrl) {
        throw new Error('이미지 업로드 실패');
      }

      // 프로필 이미지 업데이트
      const updateResponse = await updateUser({
        userId: member.id,
        data: {
          name: member.name,
          profileImage: accessUrl,
        },
      });

      setMember({
        ...member,
        ...updateResponse,
      });

      setSelectedImage(null);
      setPreviewUrl(null);
      toast.success('프로필 이미지가 업데이트되었습니다.');
    } catch (error) {
      console.error('프로필 이미지 업데이트 실패:', error);
      toast.error('이미지 업로드에 실패했습니다. 다시 시도해주세요.');
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
        <div className=" w-150 h-150 overflow-hidden rounded-full shadow-style1 border border-black3">
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
              className="bg-secondary3 rounded-full w-32 h-32 cursor-pointer flex items-center justify-center"
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
