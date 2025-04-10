import { useState } from 'react';
import CertificateSearch from '@/components/molecules/certificateSearch/CertificateSearch';
import { Certificate } from '@/apis/certificate/search';

interface CertificatesSectionProps {
  tags: string[];
  isEditable: boolean;
  onEditClick: () => void;
  onAddTag: (tag: string) => void;
  onRemoveTag: (index: number) => void;
  onSave: () => void;
}

export default function CertificatesSection({
  tags,
  isEditable,
  onEditClick,
  onAddTag,
  onRemoveTag,
  onSave,
}: CertificatesSectionProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleEditClick = () => {
    if (isEditable) {
      onSave();
    } else {
      onEditClick();
    }
  };

  const handleCertificateSelect = (certificate: Certificate) => {
    onAddTag(certificate.name);
    setSearchValue('');
  };

  return (
    <div className="space-y-16">
      <div className="flex justify-between items-center mb-8">
        <span className="text-16 font-medium">자격증</span>
        <button onClick={handleEditClick} className="text-14 text-primary6 hover:text-primary7">
          {isEditable ? '완료' : '수정'}
        </button>
      </div>

      {isEditable && (
        <div className="mb-16">
          <CertificateSearch
            value={searchValue}
            onChange={setSearchValue}
            onSelect={handleCertificateSelect}
            placeholder="자격증을 검색하세요"
            className="mb-8"
          />
          <div className="flex flex-wrap gap-8">
            {tags.map((tag, index) => (
              <div key={index} className="flex items-center bg-black3 px-12 py-6 rounded-sm">
                <span className="text-14 text-black12 mr-8">{tag}</span>
                <button
                  onClick={() => onRemoveTag(index)}
                  className="text-black8 hover:text-black12"
                >
                  <span className="sr-only">삭제</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {!isEditable && tags.length > 0 && (
        <div className="flex flex-wrap gap-8">
          {tags.map((tag, index) => (
            <div key={index} className="bg-black3 px-12 py-6 rounded-sm">
              <span className="text-14 text-black12">{tag}</span>
            </div>
          ))}
        </div>
      )}

      {!isEditable && tags.length === 0 && (
        <div className="text-14 text-black8">등록된 자격증이 없습니다</div>
      )}
    </div>
  );
}
