interface ExpertStepFooterProps {
  state: 'next' | 'register';
  onClickBefore: () => void;
  onClickNext?: () => void;
  onClickRegister?: () => void;
  disabled?: boolean;
}

function ExpertStepFooterButton({
  state,
  onClickBefore,
  onClickNext,
  onClickRegister,
  disabled = false,
}: ExpertStepFooterProps) {
  return (
    <div className="max-w-fit">
      <button
        className="py-12 px-28 bg-black1 rounded-lg border border-black3 text-16 font-semibold text-black7 mr-16 cursor-pointer"
        onClick={onClickBefore}
      >
        이전
      </button>
      {state === 'next' ? (
        <button
          className={`py-12 px-28 rounded-lg border text-16 font-semibold text-black1 cursor-pointer ${
            disabled ? 'bg-black3 border-black3 cursor-not-allowed' : 'bg-black12 border-black12'
          }`}
          onClick={onClickNext}
          disabled={disabled}
        >
          다음
        </button>
      ) : (
        <button
          className={`py-12 px-28 rounded-lg border text-16 font-semibold text-black1 cursor-pointer ${
            disabled ? 'bg-black3 border-black3 cursor-not-allowed' : 'bg-primary5 border-primary5'
          }`}
          onClick={onClickRegister}
          disabled={disabled}
        >
          등록
        </button>
      )}
    </div>
  );
}
export default ExpertStepFooterButton;
