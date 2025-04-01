import React from 'react';
import Image from 'next/image';

interface MessageTemplateProps {
  dateTime: string;
  message: string;
  tag : "get" | "send";
  senderProfileImage?: string;
}
function MessageTemplate({dateTime, message, tag, senderProfileImage}:MessageTemplateProps) {
  const yearMMDD = dateTime.split(" ")[0].split("-");
  const hourMinute = dateTime.split(" ")[1].split(":");
  if (tag === "send" && senderProfileImage) {
    return (
      <div className="flex items-center w-2/3">
        <Image className="place-self-start rounded-full mb-16 mr-8" src={senderProfileImage} alt={""} width={30} height={30} />
        <div className="bg-black2 px-16 py-12 rounded-lg text-base/24">
          <p className="text-black10 text-16">{message}</p>
        </div>
        <div className="place-self-end text-black8 text-13 font-medium ml-8">
          <p>{yearMMDD[0]}.{yearMMDD[1]}.{yearMMDD[2]}</p>
          <p>{hourMinute[0]}:{hourMinute[1]}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center w-2/3 float-end">
        <div className="place-self-end text-black8 text-13 font-medium mr-8">
          <p className="float-end">{yearMMDD[0]}.{yearMMDD[1]}.{yearMMDD[2]}</p>
          <p className="float-end">{hourMinute[0]}:{hourMinute[1]}</p>
        </div>
        <div className="bg-primary0 px-16 py-12 rounded-lg text-base/24">
          <p className="text-black10 text-16">{message}</p>
        </div>
      </div>
    );
  }
}

export default MessageTemplate;
