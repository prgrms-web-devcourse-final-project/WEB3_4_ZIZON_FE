import React from 'react';

interface props {
  text: string;
  theme: string;
}
export default function MediumTag({text, theme}:props) {
  if(theme == "") {
    return (
      <div className="text-center bg-black1 border border-black3 rounded-full max-w-fit min-w-fit py-8 px-16">
        <label className="text-13 content-center font-medium text-black12">{text}</label>
      </div>
    );
  } else if(theme == "lightBlue") {
    return (
      <div className="text-center bg-primary1 border border-primary1 rounded-full max-w-fit min-w-fit py-8 px-16">
        <label className="text-13 content-center font-medium text-primary5">{text}</label>
      </div>
    );
  } else if (theme == "lightGreen") {
    return (
      <div className="text-center bg-[#1CA673]/10  border border-[#1CA673]/1 rounded-full max-w-fit min-w-fit py-8 px-16">
        <label className="text-13 content-center font-medium text-[#1CA673]">{text}</label>
      </div>
    );
  } else if (theme == "lightOrange") {
    return (
      <div className="text-center bg-secondary1/10 border border-secondary1/1 rounded-full max-w-fit min-w-fit py-8 px-16">
        <label className="text-13 content-center font-medium text-secondary1">{text}</label>
      </div>
    );
  } else if (theme == "lightPurple") {
    return (
      <div className="text-center bg-[#AB2DFF]/10 border border-[#AB2DFF]/1 rounded-full max-w-fit min-w-fit py-8 px-16">
        <label className="text-13 content-center font-medium text-[#AB2DFF]">{text}</label>
      </div>
    );
  } else if (theme == "blue") {
    return (
      <div className="text-center bg-primary5 border border-primary5 rounded-full max-w-fit min-w-fit py-8 px-16">
        <label className="text-13 content-center font-medium text-black1">{text}</label>
      </div>
    );
  } else if (theme == "dark") {
    return (
      <div className="text-center bg-black9 border border-black9 rounded-full max-w-fit min-w-fit py-8 px-16">
        <label className="text-13 content-center font-medium text-black3">{text}</label>
      </div>
    );
  } else if (theme == "grey") {
    return (
      <div className="text-center bg-black3 border border-black3 rounded-full max-w-fit min-w-fit py-8 px-16">
        <label className="text-13 content-center font-medium text-black10">{text}</label>
      </div>
    );
  }
}