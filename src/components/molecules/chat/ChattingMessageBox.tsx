'use client';
import { useSearchParams } from 'next/navigation';
import MessageTemplate from '../messageTemplate/MessageTemplate';

const CHATTING_LIST_DUMMY_DATA = [
  {
    id: 1,
    chat_room_id: 1,
    sender_id: 1,
    content: '안녕하세요, 서비스 진행 관련 문의드립니다.',
    file_url: null,
    is_read: false,
    created_at: '2025-03-24T11:05:00Z',
  },
  {
    id: 2,
    chat_room_id: 1,
    sender_id: 2,
    content: '안녕하세요! 어떤 서비스가 필요하신가요?',
    file_url: null,
    is_read: false,
    created_at: '2025-03-24T11:06:00Z',
  },
];

export default function ChattingMessageBox() {
  const searchParams = useSearchParams();
  const clientId = searchParams.get('clientId');
  return (
    <div className="w-full flex flex-col gap-32 bg-black1 px-32 py-32 rounded-[8px] h-745 overflow-y-scroll mb-16">
      {CHATTING_LIST_DUMMY_DATA.map(message => (
        <MessageTemplate
          key={message.id}
          dateTime={new Date(message.created_at)}
          message={message.content}
          tag={message.sender_id === Number(clientId) ? 'get' : 'send'}
        />
      ))}
    </div>
  );
}
