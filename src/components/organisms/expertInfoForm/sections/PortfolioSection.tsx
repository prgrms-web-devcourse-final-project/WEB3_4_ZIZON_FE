import ImageUploadField from '@/components/molecules/imageUploadField/ImageUploadField';
import Image from 'next/image';

interface PortfolioSectionProps {
  title: string;
  image: string;
  isEditable: boolean;
  onEditClick: () => void;
  onTitleChange: (value: string) => void;
  onImageUpload: (file: File) => Promise<void>;
  onSave: () => void;
  disabled: boolean;
}

export default function PortfolioSection({
  title,
  image,
  isEditable,
  onEditClick,
  onTitleChange,
  onImageUpload,
  onSave,
  disabled,
}: PortfolioSectionProps) {
  const handleEditClick = () => {
    if (isEditable) {
      onSave();
    } else {
      onEditClick();
    }
  };

  return (
    <div className="flex flex-col gap-16">
      <div className="flex justify-between items-center">
        <h3 className="text-16 font-medium">포트폴리오</h3>
        <button
          onClick={handleEditClick}
          className="text-14 text-primary5 hover:text-primary4 transition-colors"
          disabled={disabled}
        >
          {isEditable ? '저장' : '수정'}
        </button>
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <label className="block text-14 text-black8">포트폴리오 제목</label>
          {isEditable ? (
            <input
              type="text"
              value={title}
              onChange={e => onTitleChange(e.target.value)}
              placeholder="예) 한국관광공사 프로젝트"
              className="w-full px-16 py-12 border border-black5 rounded-sm bg-transparent text-16 text-black12 focus:outline-none focus:ring-1 focus:ring-primary5 focus:border-transparent"
              disabled={disabled}
            />
          ) : (
            <div
              className={`px-16 py-12 border border-black5 rounded-sm text-16 text-black12 ${
                isEditable ? '' : 'bg-black3'
              }`}
            >
              {title || '포트폴리오 제목 없음'}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-8">
          <label className="block text-14 text-black8">포트폴리오 이미지</label>
          {isEditable ? (
            <ImageUploadField label="" onImageUpload={onImageUpload} />
          ) : (
            <div
              className={`w-full h-100 border border-black5 rounded-sm flex items-center justify-center ${
                isEditable ? '' : 'bg-black3'
              }`}
            >
              {image ? (
                <div className="relative w-full h-100">
                  <Image
                    src={image}
                    alt="포트폴리오 이미지"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <span className="text-16 text-black8">아직 포트폴리오가 없어요!</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
