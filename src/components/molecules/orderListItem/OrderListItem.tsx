import React from 'react';
import NumberReadability from '@/components/atoms/texts/numberReadability/NumberReadability';
import Image from 'next/image';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';

type SellState = "진행" | "대기" | "취소" | "구매";
interface OrderListItemProps {
  imageUrl: string;
  price: number;
  sellState: SellState;
  onClickAskButton: () => void;
  category: string;
}

export default function OrderListItem({ 
                                        imageUrl, 
                                        price,
                                        sellState,
                                        onClickAskButton,
                                        category
}:OrderListItemProps) {
  return (
    <div className="flex bg-black2 border border-black4 px-16 py-16 rounded-lg items-center justify-between">
      <div className="flex h-85 items-center content-between">
        <Image className="mr-16" src={imageUrl} alt={""} width={85} height={85}/>
        <div className="h-full">
          <div className="mb-12">{SellState(sellState)}</div>
          <label className="mt-8">{category}</label>
          <div className="flex text-16 mt-12 text-semibold">
            <NumberReadability value={price}/>원
          </div>
        </div>
      </div>
      <StandardButton text={"문의하기"} state={"default"} size={"fit"} onClick={onClickAskButton} disabled={false}/>
    </div>
  );
}

function SellState(sellState: SellState) {
  if(sellState === "진행") {
    return (
      <label className="text-16 font-semibold text-primary4 mb-12 max-w-fit">진행중</label>
    );
  } else if(sellState === "대기") {
    return (
      <label className="text-16 font-semibold text-greenComplete max-w-fit">작업 완료 대기</label>
    );
  } else if(sellState === "취소") {
    return (
      <label className="text-16 font-semibold text-redWarning max-w-fit">취소•문제 해결</label>
    );
  } else if(sellState === "구매") {
    return (
      <label className="text-16 font-semibold text-black6 max-w-fit">구매 확정</label>
    );
  }
}