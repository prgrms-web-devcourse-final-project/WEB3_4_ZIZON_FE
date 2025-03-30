import React from 'react';

interface ExpertStepFooterProps {
  state: "next" | "register";
  onClickBefore: () => void;
  onClickNext?: () => void;
  onClickRegister?: () => void;
}

function ExpertStepFooter({
                            state,
                            onClickBefore,
                            onClickNext,
                            onClickRegister,
                          }:ExpertStepFooterProps) {

  return (
    <div className="max-w-fit">
      <button className="py-12 px-28 bg-black1 rounded-lg border border-black3 text-16 font-semibold text-black7 mr-16" onClick={onClickBefore}>이전</button>
      {state === "next" ? (
        <button className="py-12 px-28 bg-black12 rounded-lg border border-black12 text-16 font-semibold text-black1"
                onClick={onClickNext}>다음</button>) :
        (<button className="py-12 px-28 bg-primary5 rounded-lg border border-primary5 text-16 font-semibold text-black1"
                 onClick={onClickRegister}>등록</button>)}
    </div>
  );
}

export default ExpertStepFooter;