import React, { useState } from 'react';
import Image from 'next/image';
import FileInput from '@/components/atoms/inputs/fileInput/FileInput';

interface DigitalContentUploadFieldProps {
  label: string;
  onFileUpload: (file: File | null) => void;
  accept?: string;
}

export default function DigitalContentUploadField({
  label,
  onFileUpload,
  accept = '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.rar',
}: DigitalContentUploadFieldProps) {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (file: File) => {
    setFileName(file.name);
    onFileUpload(file);
  };

  const handleDeleteFile = () => {
    setFileName(null);
    onFileUpload(null);
  };

  return (
    <div className="flex flex-col gap-16">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-8">
          <h3 className="text-18 font-semibold text-black12">{label}</h3>
          <p className="text-14 text-black7">파일 형식은 {accept} 형식만 가능합니다.</p>
        </div>
        <FileInput
          label="파일 선택"
          name="digital-content"
          accept={accept}
          onChange={handleFileChange}
        />
      </div>
      {fileName && (
        <div className="flex items-center justify-between p-12 border border-black5 rounded-sm bg-black1">
          <div className="flex items-center gap-8">
            <Image src="/icons/Document.svg" alt="파일" width={16} height={16} />
            <span className="text-14 text-black10 truncate">{fileName}</span>
          </div>
          <button
            onClick={handleDeleteFile}
            className="p-2 rounded-full hover:bg-black3 transition-colors"
            aria-label="파일 삭제"
          >
            <Image src="/icons/Close.svg" alt="삭제" width={16} height={16} />
          </button>
        </div>
      )}
    </div>
  );
}
