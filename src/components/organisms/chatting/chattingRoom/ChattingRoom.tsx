import ChattingInputBox from '@/components/molecules/chat/ChattingInputBox';
import ChattingMessageBox from '@/components/molecules/chat/ChattingMessageBox';

export default function ChattingRoom() {
  return (
    <div className="w-full flex-col gap-16 min-w-690 max-w-828">
      {/* 채팅화면 */}
      <ChattingMessageBox />
      {/* 채팅입력 */}
      <ChattingInputBox />
    </div>
  );
}
