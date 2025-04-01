import React from 'react';
import XMark from "public/icons/XMark.svg"
import XMarkWhite from "public/icons/XMarkWhite.svg"
import Image from 'next/image';

interface XMarkTagProps {
  text: string;
  color: "default" | "gray" | "blue" | "dark";
  onClickXMark: () => void;
}

function XMarkTag({text, color = "default", onClickXMark}: XMarkTagProps) {
  if (color == "default") {
    return (
      <div className="flex border border-black3 rounded-full max-w-fit items-center justify-center py-8 px-12">
        <label className="text-13 font-medium content-center mr-4 text-black12">{text}</label>
        <Image src={XMark} alt={""} onClick={onClickXMark} width={9} height={9}/>
      </div>
    );
  } else if (color == "gray") {
    return (
      <div className="flex bg-black5 border border-black5 rounded-full max-w-fit items-center justify-center py-8 px-12">
        <label className="text-13 font-medium content-center mr-4 text-black12">{text}</label>
        <Image src={XMark} alt={""} onClick={onClickXMark} width={9} height={9}/>
      </div>
    );
  } else if (color == "blue") {
    return (
      <div className="flex bg-primary5 border border-primary5 rounded-full max-w-fit items-center justify-center py-8 px-12">
        <label className="text-13 font-medium content-center mr-4 text-black1">{text}</label>
        <Image src={XMarkWhite} alt={""} onClick={onClickXMark} width={9} height={9}/>
      </div>
    );
  } else if (color == "dark") {
    return (
      <div className="flex bg-black9 border border-black9 rounded-full max-w-fit items-center justify-center py-8 px-12">
        <label className="text-13 font-medium content-center mr-4 text-black1">{text}</label>
        <Image src={XMarkWhite} alt={""} onClick={onClickXMark} width={9} height={9}/>
      </div>
    );
  }
}

export default XMarkTag;
