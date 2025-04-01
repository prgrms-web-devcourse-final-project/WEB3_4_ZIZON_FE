import React from 'react';

type Theme = 'default' | 'lightBlue' | 'lightGreen' | 'lightOrange' | 'lightPurple' | 'blue' | 'dark' | 'grey';

interface SmallTagProps {
  text: string;
  theme?: Theme;
}

function SmallTag({ text, theme = "default" }:SmallTagProps) {
  const smailTagBGStyle = {
    default: "bg-black1 border-black3",
    lightBlue: "bg-primary1 border-primary1" ,
    lightGreen: "bg-[#1CA673]/10 border-[#1CA673]/1",
    lightOrange: "bg-secondary1/10 border-secondary1/1",
    lightPurple: "bg-[#AB2DFF]/10 border-[#AB2DFF]/1",
    blue: "bg-primary5 border-primary5",
    dark: "bg-black9 border-black9",
    grey: " bg-black3 border-black3",
  }
  const smailTagTextStyle ={
    default: "text-black12",
    lightBlue: "text-primary5",
    lightGreen: "text-[#1CA673]",
    lightOrange: "text-secondary1",
    lightPurple: "text-[#AB2DFF]",
    blue: "text-black1",
    dark: "text-black3",
    grey: "text-black10",
  }
  return (
    <div className={`text-center border rounded-[16px] max-w-fit min-w-fit py-4 px-12 ${smailTagBGStyle[theme]}`}>
      <label className={`text-13 font-medium2 ${smailTagTextStyle[theme]}`}>{text}</label>
    </div>
  );
}

export default SmallTag;