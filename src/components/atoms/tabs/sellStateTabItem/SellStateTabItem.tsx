import React from 'react';
import Image from 'next/image';
import ProgressBlue from "public/icons/ProgressBlue.svg"
import ProblemRed from "public/icons/ProblemRed.svg"
import CheckGreen from "public/icons/CheckGreen.svg"

interface props {
  state: "진행" | "대기" | "취소" | "구매";
  count: number
}
function SellStateTabItem({state, count}:props) {
  const value = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  if(state === "진행") {
    return (
      <div className="flex bg-black1 drop-shadow-xl py-16 px-20 rounded-lg">
        <div className="flex ">
          <Image src={ProgressBlue} alt={""} width={30} height={30}/>
          <label className="text-13 w-[64px] font-medium text-black10 ml-8 content-center">진행중</label>
        </div>
        <label className="text-[20px] text-right  ml-32 w-full font-semiBold content-center">{value}</label>
      </div>
    );
  } else if(state === "대기") {
    return (
      <div className="flex bg-black1 drop-shadow-xl py-16 px-20 rounded-lg">
        <div className="flex">
          <Image src={CheckGreen} alt={''} width={30} height={30} />
          <label className="text-13 w-[148px] font-medium text-black10 ml-8 content-center">작업 완료 대기</label>
        </div>
        <label className="text-[20px] text-right  ml-32 w-full font-semiBold content-center">{value}</label>
      </div>
    );
  } else if (state === '취소') {
    return (
      <div className="flex bg-black1 drop-shadow-xl py-16 px-20 rounded-lg">
        <div className="flex">
          <Image src={ProblemRed} alt={''} width={30} height={30} />
          <label className="text-13 w-[156px] font-medium text-black10 ml-8 content-center">취소•문제 해결</label>
        </div>
        <label className="text-[20px] text-right  ml-32 w-full font-semiBold content-center">{value}</label>
      </div>
    );
  } else if (state === '구매') {
    return (
      <div className="flex bg-black1 border border-black4 py-16 px-20 rounded-lg">
        <label className="text-13 w-[98px] font-medium text-black10 ml-8 content-center">구매 확정</label>
        <label className="text-[20px] text-right  ml-32 w-full font-semiBold content-center">{value}</label>
      </div>
    );
  }
}

export default SellStateTabItem;