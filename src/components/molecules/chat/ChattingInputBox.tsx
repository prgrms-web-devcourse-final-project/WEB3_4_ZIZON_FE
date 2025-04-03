'use client';

import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import FileInput from '@/components/atoms/inputs/fileInput/FileInput';
import TextInput from '@/components/atoms/inputs/textInput/TextInput';
import { useState } from 'react';

export default function ChattingInputBox() {
  const [message, setMessage] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  return (
    <div className="w-full flex flex-col gap-10">
      <TextInput
        value={message}
        onChange={(value: string) => setMessage(value)}
        placeholder="메시지를 입력해주세요. (Enter: 줄바꿈 / Ctrl+Enter: 전송)"
        id="chatting-input"
        type="text"
        disabled={false}
        color="white"
      />

      {/* 채팅 전송 */}
      <div className="flex justify-between items-center">
        <FileInput
          label="첨부파일"
          name="file-input"
          accept="image/*, .pdf, .docx"
          onChange={(file: File) => {
            setFile(file);
            console.log('첨부파일:', file);
          }}
        />
        <StandardButton
          text="전송"
          state="dark"
          disabled={false}
          onClick={() => {
            // 메시지 전송 로직
            console.log('메시지 전송:', message);
            setMessage(''); // 전송 후 입력창 초기화
          }}
        />
      </div>
    </div>
  );
}
