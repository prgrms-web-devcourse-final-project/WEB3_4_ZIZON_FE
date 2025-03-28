import React from 'react';
import ArrowsRightLeftBlack from "public/icons/ArrowsRightLeftBlack.svg"
import ArrowsRightLeftWhite from "public/icons/ArrowsRightLeftWhite.svg"
import Image from 'next/image';

interface props {
  isState: boolean;
  onChangeState: (isState: boolean) => boolean;
}
function ChangePositionButton({isState, onChangeState}: props) {
  if (isState) {
    return (
      <button onClick={() => {onChangeState(!isState)}} className="text-center cursor-pointer bg-black12 border border-black3 max-w-fit rounded-full py-8 px-62">
        <div className="flex cursor-pointer">
          <Image className="cursor-pointer" src={ArrowsRightLeftWhite} alt={""} width={14} height={14} />
          <label className="text-black1 ml-8 text-13 cursor-pointer font-medium">전문가로 전환</label>
        </div>
      </button>
    );
  } else {
    return (
      <button onClick={() => {onChangeState(!isState)}} className="text-center bg-black2 border border-black7 max-w-fit rounded-full py-8 px-62">
        <div className="flex">
          <Image className="cursor-pointer" src={ArrowsRightLeftBlack} alt={""} width={14} height={14} />
          <label className="text-black12 cursor-pointer ml-8 text-13 font-medium">의뢰인로 전환</label>
        </div>
      </button>
   );
  }
}

export default ChangePositionButton;