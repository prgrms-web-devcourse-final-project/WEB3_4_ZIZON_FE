import ClientChattingInfo from '@/components/organisms/chatting/chattingInfo/client/ClientChattingInfo';
import ChattingList, {
  dummyChattingRooms,
} from '@/components/organisms/chatting/chattingLIst/ChattingList';
import ChattingRoom from '@/components/organisms/chatting/chattingRoom/ChattingRoom';
import ChattingTemplate from '@/components/templates/chatTemplate/ChattingTemplate';

export default function ClientChatPage() {
  return (
    <ChattingTemplate>
      <ChattingList chattingRoomList={dummyChattingRooms} />
      <ChattingRoom />
      <ClientChattingInfo />
    </ChattingTemplate>
  );
}
