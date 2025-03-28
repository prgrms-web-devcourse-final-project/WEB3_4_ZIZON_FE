import React from 'react';
import XMark from "public/icons/XMark.svg"
import XMarkWhite from "public/icons/XMarkWhite.svg"
import Image from 'next/image';

interface props {
  text: string;
  color: "" | "gray" | "blue" | "dark";
  isState: boolean;
  onClickXMark: (isState:boolean) => boolean;
}

function TagIconRight({text, color, isState, onClickXMark}: props) {
  if (color == "") {
    return (
      <div className="flex border border-black3 rounded-full max-w-fit items-center justify-center py-8 px-12">
        <label className="text-13 font-medium mr-4 text-black12">{text}</label>
        <Image src={XMark} alt={""} onClick={() => {onClickXMark(!isState)}} width={12} height={12}/>
      </div>
    );
  } else if (color == "gray") {
    return (
      <div className="flex bg-black5 border border-black5 rounded-full max-w-fit items-center justify-center py-8 px-12">
        <label className="text-13 font-medium mr-4 text-black12">{text}</label>
        <Image src={XMark} alt={""} onClick={() => {onClickXMark(!isState)}} width={12} height={12}/>
      </div>
    );
  } else if (color == "blue") {
    return (
      <div className="flex bg-primary5 border border-primary5 rounded-full max-w-fit items-center justify-center py-8 px-12">
        <label className="text-13 font-medium mr-4 text-black1">{text}</label>
        <Image src={XMarkWhite} alt={""} onClick={() => {onClickXMark(!isState)}} width={12} height={12}/>
      </div>
    );
  } else if (color == "dark") {
    return (
      <div className="flex bg-black9 border border-black9 rounded-full max-w-fit items-center justify-center py-8 px-12">
        <label className="text-13 font-medium mr-4 text-black1">{text}</label>
        <Image src={XMarkWhite} alt={""} onClick={() => {onClickXMark(!isState)}} width={12} height={12}/>
      </div>
    );
  }
}

export default TagIconRight;
