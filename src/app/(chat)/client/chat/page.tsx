import getRooms, { GetRoomsResponse } from '@/apis/chat/getRooms';
import ChattingTemplate from '@/components/templates/chatTemplate/ChattingTemplate';
import { Suspense } from 'react';

export default async function ClientChatPage() {
  const chatRoomList: GetRoomsResponse = await getRooms();
  console.log('채팅방목록!!', chatRoomList);
  return (
    <div className="w-full flex justify-center">
      <Suspense fallback="펄백로딩중">
        <ChattingTemplate chatRoomList={chatRoomList} />
      </Suspense>
    </div>
  );
}
