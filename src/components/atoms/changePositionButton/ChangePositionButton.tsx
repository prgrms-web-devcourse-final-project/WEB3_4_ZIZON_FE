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
      <div onClick={() => {onChangeState(isState)}} className="text-center bg-black12 border border-black3 max-w-fit rounded-full py-8 px-62">
        <div className="flex">
          <Image src={ArrowsRightLeftWhite} alt={""} width={22} height={22} />
          <label className="text-black1 ml-8 text-13 font-medium">전문가로 전환</label>
        </div>
      </div>
    );
  } else {
    return (
      <div onClick={() => {onChangeState(isState)}} className="text-center bg-black2 border border-black7 max-w-fit rounded-full py-8 px-62">
        <div className="flex">
          <Image src={ArrowsRightLeftBlack} alt={""} width={22} height={22} />
          <label className="text-black12 ml-8 text-13 font-medium">의뢰인로 전환</label>
        </div>
      </div>
   );
  }
}

export default ChangePositionButton;