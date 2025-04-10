import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { searchCertificates } from '@/apis/certificate/search';
import { Certificate } from '@/apis/certificate/search';

interface CertificateSearchProps {
  value: string;
  onChange: (value: string) => void;
  onSelect: (certificate: Certificate) => void;
  placeholder?: string;
  className?: string;
}

export default function CertificateSearch({
  value,
  onChange,
  onSelect,
  placeholder = '자격증 검색',
  className = '',
}: CertificateSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      if (searchTerm.trim().length < 1) {
        setCertificates([]);
        return;
      }

      setIsLoading(true);
      try {
        const results = await searchCertificates(searchTerm);
        setCertificates(results);
      } catch (error) {
        console.error('자격증 검색 중 오류 발생:', error);
        setCertificates([]);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchCertificates, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handleSelect = (certificate: Certificate) => {
    onSelect(certificate);
    setSearchTerm('');
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setSearchTerm(newValue);
    setIsOpen(true);
  };

  const handleClear = () => {
    onChange('');
    setSearchTerm('');
    inputRef.current?.focus();
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full px-16 py-12 border border-black5 rounded-sm text-16 text-black12 focus:outline-none focus:ring-1 focus:ring-primary5"
          onFocus={() => setIsOpen(true)}
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-16 top-1/2 -translate-y-1/2 text-black8 hover:text-black12"
          >
            <X className="size-16" />
          </button>
        )}
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-4 bg-white border border-black5 rounded-sm shadow-md max-h-[240px] overflow-y-auto">
          {isLoading ? (
            <div className="px-16 py-12 text-14 text-black8">검색 중...</div>
          ) : certificates.length > 0 ? (
            certificates.map(certificate => (
              <div
                key={certificate.id}
                className="px-16 py-12 hover:bg-black3 cursor-pointer text-14"
                onClick={() => handleSelect(certificate)}
              >
                {certificate.name}
              </div>
            ))
          ) : searchTerm.trim().length > 0 ? (
            <div className="px-16 py-12 text-14 text-black8">검색 결과가 없습니다</div>
          ) : null}
        </div>
      )}
    </div>
  );
}
