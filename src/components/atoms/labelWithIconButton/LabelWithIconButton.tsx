import React from 'react';
import Image from 'next/image';
import MoveTruck from "public/icons/MoveTruck.svg"
import FixWrench from "public/icons/FixWrench.svg"
import LessonHat from "public/icons/LessonHat.svg"
import HobbyPalette from "public/icons/HobbyPalette.svg"

interface LabelWithIconButtonProps {
  onClick: () => void;
  value: "이사" | "설치" | "과외" | "취미";
  state: 'default' | 'active';
}

export default function LabelWithIconButton({onClick, value, state}: LabelWithIconButtonProps) {

  if(value === "이사") {
    return (
      <button type="button"
              onClick={onClick}
              className={`flex text-center min-w-full content-center px-24 py-28 bg-black2 rounded-lg text-20 font-medium text-black12 ${state === "active" ? "bg-primary0" : "hover:bg-black3" }` }>
        <Image className="mr-20" src={MoveTruck} alt={""} width={30} height={30} />
        <p className="max-h-fit my-auto">이사/청소</p>
      </button>
    );
  } else if(value === "설치") {
    return (
      <button type="button"
              onClick={onClick}
              className={`flex text-center min-w-full content-center px-24 py-28 bg-black2 rounded-lg text-20 font-medium text-black12 ${state === "active" ? "bg-primary0" : "hover:bg-black3" }` }>
        <Image className="mr-20" src={FixWrench} alt={""} width={30} height={30} />
        <p className="max-h-fit my-auto">설치/수리</p>
      </button>
    );
  } else if(value === "과외") {
    return (
      <button type="button"
              onClick={onClick}
              className={`flex text-center min-w-full content-center px-24 py-28 bg-black2 rounded-lg text-20 font-medium text-black12 ${state === "active" ? "bg-primary0" : "hover:bg-black3" }` }>
        <Image className="mr-20" src={LessonHat} alt={""} width={30} height={30} />
        <p className="max-h-fit my-auto">과외</p>
      </button>
    );
  } else if(value === "취미") {
    return (
      <button type="button"
              onClick={onClick}
              className={`flex text-center min-w-full content-center px-24 py-28 bg-black2 rounded-lg text-20 font-medium text-black12 ${state === "active" ? "bg-primary0" : "hover:bg-black3" }` }>
        <Image className="mr-20" src={HobbyPalette} alt={""} width={30} height={30} />
        <p className="max-h-fit my-auto">취미 생활</p>
      </button>
    );
  }
}
