import React from 'react';
import HeartFull from "public/icons/HeartFull.svg"
import HeartOutLine from "public/icons/HeartOutline.svg"
import Image from 'next/image';

interface TagIconLeftProps {
  type: "like-on" | "like-off";
  count: number;
}
function TagIconLeft({type, count}:TagIconLeftProps) {
  const value = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  if (type == "like-on") {
    return (
      <div className="flex bg-black1 drop-shadow-xl min-w-fit max-w-fit py-8 px-12 rounded-full">
        <Image src={HeartFull} alt={""} width={20} height={20} />
        <label className="text-13 content-center font-medium ml-4">{value}</label>
      </div>
    );
  } else if (type == "like-off") {
    return (
      <div className="flex bg-black2 border border-black3 min-w-fit max-w-fit py-8 px-12 rounded-full">
        <Image src={HeartOutLine} alt={""} width={20} height={20} />
        <label className="text-13 content-center font-medium ml-4">{value}</label>
      </div>
    )
  }
}

export default TagIconLeft;