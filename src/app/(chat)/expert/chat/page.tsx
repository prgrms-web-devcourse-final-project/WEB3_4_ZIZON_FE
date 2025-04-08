import ExpertChattingInfo from '@/components/organisms/chatting/chattingInfo/expert/ExpertChattingInfo';
import ChattingList, {
  dummyChattingRooms,
} from '@/components/organisms/chatting/chattingLIst/ChattingList';
import ChattingRoom from '@/components/organisms/chatting/chattingRoom/ChattingRoom';
import ChattingTemplate from '@/components/templates/chatTemplate/ChattingTemplate';

export default function ExpertChatPage() {
  return (
    <ChattingTemplate>
      <ChattingList chattingRoomList={dummyChattingRooms} />
      <ChattingRoom />
      <ExpertChattingInfo />
    </ChattingTemplate>
  );
}
