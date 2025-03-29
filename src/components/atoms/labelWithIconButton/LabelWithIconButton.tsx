import React from 'react';
import Image from 'next/image';
import Truck from "public/icons/Truck.svg"
import FixWrench from "public/icons/FixWrench.svg"
import LessonHat from "public/icons/LessonHat.svg"
import HobbyPalette from "public/icons/HobbyPalette.svg"

interface StandardButtonProps {
  onClick: () => void;
  value: "이사" | "설치" | "과외" | "취미";
  state: 'default' | 'active';
}

export default function LabelWithIconButton() {
  return (
    <div className="">
      <Image src={Truck} alt={""} width={30} height={30} />
      <label className="text-30 font-medium">이사/청소</label>
    </div>
  );
}
