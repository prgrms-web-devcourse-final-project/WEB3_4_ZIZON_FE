import React from 'react';
import { Order } from '@/types/order';

interface DigitalContentListProps {
  digitalContent: Order['digitalContent'];
}

export default function DigitalContentList({ digitalContent }: DigitalContentListProps) {
  return (
    <div className="flex flex-col gap-12 rounded-lg mt-8">
      {digitalContent.map((content, index) => (
        <div
          key={index}
          className="flex items-center justify-between px-16 py-12 rounded-lg bg-black2"
        >
          <div className="flex flex-col gap-6">
            <p className="text-16 font-medium">{content.fileName}</p>
            <p className="text-13 text-black7">
              {(content.fileSize / 1024 / 1024).toFixed(1)}MB • {content.fileType}
            </p>
          </div>
          <button className="text-13 font-medium px-12 py-8 bg-black10 text-black1 rounded-sm">
            다운로드
          </button>
        </div>
      ))}
    </div>
  );
}
