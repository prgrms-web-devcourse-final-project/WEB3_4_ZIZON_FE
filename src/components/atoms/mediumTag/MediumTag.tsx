interface props {
  text: string;
}
export default function MediumTag({text}:props) {
  if(text == "이사/청소") {
    return (
      <div className="text-center bg-primary1 border border-primary1 rounded-full max-w-fit min-w-fit py-2 px-4">
        <p className="text-primary5">{text}</p>
      </div>
    );
  } else if (text == "설치/수리") {
    return (
      <div className="text-center bg-[#1CA673]/10  border border-[#1CA673]/1 rounded-full max-w-fit min-w-fit py-2 px-4">
        <p className="text-[#1CA673]">{text}</p>
      </div>
    );
  } else if (text == "취미/자기계발") {
    return (
      <div className="text-center bg-secondary1/10 border border-secondary1/1 rounded-full max-w-fit min-w-fit py-2 px-4">
        <p className="text-secondary1">{text}</p>
      </div>
    );
  } else if (text == "과외") {
    return (
      <div className="text-center bg-[#AB2DFF]/10 border border-[#AB2DFF]/1 rounded-full max-w-fit min-w-fit py-2 px-4">
        <p className="text-[#AB2DFF]">{text}</p>
      </div>
    );
  } else {
    return (
      <div className="text-center bg-black1 border border-black3 rounded-full max-w-fit min-w-fit py-2 px-4">
        <p className="text-black12">{text}</p>
      </div>
    );
  }
}