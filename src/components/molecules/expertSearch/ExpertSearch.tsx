import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  searchExpertByName,
  SearchExpertByNameResponseType,
} from '@/apis/expert/searchExpertByName';
import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';

interface ExpertSearchProps {
  className?: string;
}

export default function ExpertSearch({ className = '' }: ExpertSearchProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [experts, setExperts] = useState<SearchExpertByNameResponseType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchExperts = async () => {
      if (searchTerm.trim().length < 1) {
        setExperts([]);
        return;
      }

      setIsLoading(true);
      try {
        const results = await searchExpertByName({ name: searchTerm });
        setExperts(results);
      } catch (error) {
        console.error('전문가 검색 중 오류 발생:', error);
        setExperts([]);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchExperts, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  // 외부 클릭 감지하여 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (expert: SearchExpertByNameResponseType) => {
    router.push(`/expert/${expert.expertId}`);
    setSearchTerm('');
    setOpen(false);
  };

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    setOpen(true);
  };

  const handleClear = () => {
    setSearchTerm('');
    inputRef.current?.focus();
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <div className="relative">
        <SearchBar
          type="large"
          placeholder="찾고있는 전문가가 있나요?"
          value={searchTerm}
          onChange={handleInputChange}
        />
        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-20 top-1/2 -translate-y-1/2 text-black7 hover:text-black12"
            aria-label="검색어 지우기"
          >
            <X className="size-16" />
          </button>
        )}
      </div>

      {open && (
        <div className="absolute z-50 w-full mt-4 bg-black1 border border-black3 rounded-lg shadow-style1 max-h-240 overflow-y-auto">
          {isLoading ? (
            <div className="px-16 py-12 text-13 text-black7" role="status">
              검색 중...
            </div>
          ) : experts.length > 0 ? (
            experts.map(expert => (
              <div
                key={expert.expertId}
                onClick={() => handleSelect(expert)}
                className="px-16 py-12 hover:bg-black3 cursor-pointer transition-colors duration-200"
              >
                <div className="flex items-center gap-12">
                  {expert.profileImage && (
                    <div className="w-44 h-44 rounded-full border border-black3 overflow-hidden flex-shrink-0 relative">
                      <Image
                        src={expert.profileImage}
                        alt={`${expert.name} 프로필`}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-col justify-center gap-6">
                    <div className="font-medium text-16">{expert.name}</div>
                    <div className="text-13 text-black7">
                      {expert.categoryName} • {expert.careerYears}년 경력
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : searchTerm.trim().length > 0 ? (
            <div className="px-16 py-12 text-13 text-black7" role="status">
              <div>&ldquo;{searchTerm}&rdquo;에 대한 검색 결과가 없습니다</div>
              <div className="text-12 mt-4">다른 검색어로 다시 시도해보세요</div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
