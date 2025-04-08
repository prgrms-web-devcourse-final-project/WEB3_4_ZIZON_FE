import React from 'react';
import Image from 'next/image';

interface MessageTemplateProps {
  dateTime: Date;
  message: string;
  tag: 'get' | 'send';
  senderProfileImage?: string;
}
function MessageTemplate({ dateTime, message, tag, senderProfileImage }: MessageTemplateProps) {
  const yearMMDD = dateTime
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\./g, '')
    .trim(); // "2025.03.15" 형식으로 변환

  const hourMinute = dateTime.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
  }); // "13:12" 형식으로 변환

  if (tag === 'send' || senderProfileImage) {
    return (
      <div className="w-full flex items-center justify-start ">
        <div className="flex">
          <Image
            className="place-self-start rounded-full mb-16 mr-8 w-30 h-30"
            src={senderProfileImage || '/images/DefaultImage.png'}
            alt={''}
            width={30}
            height={30}
          />
          <div className="bg-black2 px-16 py-12 rounded-lg text-base/24 ">
            <p className="text-black10 text-16">{message}</p>
          </div>
          <div className="place-self-end text-black8 text-13 font-medium ml-8">
            <p>{yearMMDD}</p>

            <p>{hourMinute}</p>
          </div>
        </div>
      </div>
    );
  } else if (tag === 'get') {
    return (
      <div className="flex items-center w-full justify-end">
        <div className="flex ">
          <div className="place-self-end text-black8 text-13 font-medium mr-8">
            <p className="float-end">{yearMMDD}</p> <br />
            <p className="float-end">{hourMinute}</p>
          </div>
          <div className="bg-primary0 px-16 py-12 rounded-lg text-base/24 ">
            <p className="text-black10 text-16">{message}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageTemplate;
