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
      // 제목과 이미지가 둘 다 없거나 둘 다 존재해야만 저장 가능
      const hasTitle = !!title.trim();
      const hasImage = !!image;

      if ((hasTitle && hasImage) || (!hasTitle && !hasImage)) {
        onSave();
      } else {
        // 둘 중 하나만 있는 경우 알림 표시
        alert('포트폴리오 제목과 이미지를 모두 입력하거나 모두 비워두어야 합니다.');
      }
    } else {
      onEditClick();
    }
  };

  return (
    <div className="flex flex-col gap-16 p-20 bg-black1 rounded-xl mb-120">
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
          <label className="block text-14 text-black7">포트폴리오 제목</label>
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
              className={`px-16 py-12 border border-black5 rounded-sm text-16 text-black7 ${
                isEditable ? '' : 'bg-black2'
              }`}
            >
              {title || '포트폴리오 제목 없음'}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-8">
          <label className="block text-14 text-black7">포트폴리오 이미지</label>
          {isEditable ? (
            <ImageUploadField label="" onImageChange={onImageUpload} />
          ) : (
            <div
              className={`w-full h-400 border border-black5 rounded-lg flex items-center justify-center ${
                isEditable ? '' : 'bg-black2'
              }`}
            >
              {image ? (
                <div className="relative w-full h-400 overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt="포트폴리오 이미지"
                    fill
                    className="size-full object-cover"
                  />
                </div>
              ) : (
                <span className="text-16 text-black7">아직 포트폴리오가 없어요!</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
