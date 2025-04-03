import ChattingList, {
  chattingRoomDummyData,
} from '@/components/organisms/chatting/chattingLIst/ChattingList';
import ChattingRoom from '@/components/organisms/chatting/chattingRoom/ChattingRoom';

export default function ClientChatPage() {
  return (
    <div className="w-full flex gap-24 mt-46 ">
      <ChattingList chatList={chattingRoomDummyData} />
      <ChattingRoom />
    </div>
  );
}
