'use client';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';

export default function ChattingButtonGroup() {
  return (
    <div className="w-full flex gap-16">
      <StandardButton
        text="채팅방 나가기"
        onClick={() => {}}
        disabled={false}
        size="full"
        state="default"
      />
      <StandardButton
        text="거래하기"
        onClick={() => {}}
        disabled={false}
        size="full"
        state="blue"
      />
    </div>
  );
}
