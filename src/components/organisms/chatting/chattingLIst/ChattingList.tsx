'use client';

import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';
import SmallTag from '@/components/atoms/tags/smallTag/SmallTag';
import ChatListItem from '@/components/molecules/chatListItem/ChatListItem';
import { CHATTING_STATE, ChattingStateType } from '@/constants/chat';
import { ChattingRoomType } from '@/types/chat';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState } from 'react';

interface ChattingListProps {
  chattingRoomList: ChattingRoomType[];
}

export const dummyChattingRooms: ChattingRoomType[] = [
  {
    roomId: 'room1',
    otherUserName: '김철수',
    otherUserProfile: '/images/DefaultProfile.png',
    lastMessage: '안녕하세요! 상담 요청드립니다.',
    lastMessageTime: '2025-04-01T10:30:00Z',
    unreadCount: 2,
  },
  {
    roomId: 'room2',
    otherUserName: '이영희',
    otherUserProfile: '/images/DefaultProfile.png',
    lastMessage: '견적서를 확인해주세요.',
    lastMessageTime: '2025-04-02T14:15:00Z',
    unreadCount: 0,
  },
  {
    roomId: 'room3',
    otherUserName: '박민수',
    otherUserProfile: '/images/DefaultProfile.png',
    lastMessage: '감사합니다. 좋은 하루 되세요.',
    lastMessageTime: '2025-04-03T09:45:00Z',
    unreadCount: 5,
  },
  {
    roomId: 'room4',
    otherUserName: '최유리',
    otherUserProfile: '/images/DefaultProfile.png',
    lastMessage: '추가 문의사항이 있습니다.',
    lastMessageTime: '2025-04-04T16:20:00Z',
    unreadCount: 1,
  },
];

export default function ChattingList({ chattingRoomList }: ChattingListProps) {
  const [filter, setFilter] = useState<ChattingStateType>(CHATTING_STATE[0].state);
  const [search, setSearch] = useState<string>('');
  const searchParams = useSearchParams();
  const id = searchParams.get('roomId'); // 현재 선택된 채팅방 id
  const router = useRouter();

  // 현재 채팅 유저 상태 -> 전역에서 가져오는 방법 고려
  const pathname = usePathname();
  const userType = pathname.split('/')[1]; // client or expert

  const handleChatItemClick = (chatRoomId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('roomId', chatRoomId);
    router.push(`/client/chat?${params.toString()}`);
  };

  return (
    <div className="w-402 flex flex-col gap-20 justify-end">
      {/* 필터 태그 */}
      <div className="flex gap-8">
        {CHATTING_STATE.map(item => (
          <div onClick={() => setFilter(item.state)} key={item.state}>
            <SmallTag text={item.name} theme={filter === item.state ? 'dark' : 'default'} />
          </div>
        ))}
      </div>

      {/* 서치바 */}
      <SearchBar
        type="rounded"
        placeholder="검색어를 입력해주세요"
        value={search}
        onChange={(value: string) => setSearch(value)}
      />

      {/* 채팅 목록 */}
      <div className="flex flex-col rounded-[8px] border-1 border-black4 overflow-hidden ">
        {chattingRoomList.map((item, index) => (
          <ChatListItem
            key={index}
            chatRoomId={item.roomId}
            recentChatDate={new Date(item.lastMessageTime)}
            text={item.lastMessage}
            userName={item.otherUserName}
            userProfile={item.otherUserProfile}
            isSelected={id === item.roomId}
            onClick={() => handleChatItemClick(item.roomId)}
          />
        ))}
      </div>
    </div>
  );
}
