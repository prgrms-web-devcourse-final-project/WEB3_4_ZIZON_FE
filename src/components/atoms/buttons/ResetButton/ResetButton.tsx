import Image from 'next/image';
import ResetIcon from 'public/icons/Refresh.svg';

export default function ResetButton({ onReset }: { onReset: () => void }) {
  return (
    <button
      onClick={() => onReset()}
      type="button"
      className="flex items-center gap-4 text-16 text-black10 font-semibold bg-black1 border-1 border-black4 px-12 py-8 rounded-[8px]"
    >
      <Image src={ResetIcon} width={12} height={11} alt="reset-category-option-button-icon" />
      <span>초기화</span>
    </button>
  );
}
