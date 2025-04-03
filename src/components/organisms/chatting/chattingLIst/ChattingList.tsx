'use client';

import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';
import SmallTag from '@/components/atoms/tags/smallTag/SmallTag';
import ChatListItem from '@/components/molecules/chatListItem/ChatListItem';
import { CHATTING_STATE, ChattingStateType } from '@/constants/chat';
import { ChattingRoomType } from '@/types/chat';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState } from 'react';

interface ChattingListProps {
  chatList: ChattingRoomType[];
}

export const chattingRoomDummyData: ChattingRoomType[] = [
  {
    id: 'room1',
    client_id: 'client1',
    expert_id: 'expert1',
    created_at: '2025-04-01T10:00:00Z',
    lasst_message: '안녕하세요, 상담 요청드립니다.',
    last_message_time: '2025-04-01T10:05:00Z',
    expert_name: '이상훈',
    expert_profile_image: '/images/DefaultImage.png',
  },
  {
    id: 'room2',
    client_id: 'client2',
    expert_id: 'expert2',
    created_at: '2025-04-02T11:00:00Z',
    lasst_message: '견적서를 확인해주세요.',
    last_message_time: '2025-04-02T11:15:00Z',
    expert_name: '김민수',
    expert_profile_image: '/images/DefaultImage.png',
  },
  {
    id: 'room3',
    client_id: 'client3',
    expert_id: 'expert3',
    created_at: '2025-04-03T12:00:00Z',
    lasst_message: '감사합니다. 좋은 하루 되세요.',
    last_message_time: '2025-04-03T12:30:00Z',
    expert_name: '박지훈',
    expert_profile_image: '/images/DefaultImage.png',
  },
  {
    id: 'room4',
    client_id: 'client4',
    expert_id: 'expert4',
    created_at: '2025-04-04T13:00:00Z',
    lasst_message: '추가 문의사항이 있습니다.',
    last_message_time: '2025-04-04T13:20:00Z',
    expert_name: '최유리',
    expert_profile_image: '/images/DefaultImage.png',
  },
];

export default function ChattingList({ chatList }: ChattingListProps) {
  const [filter, setFilter] = useState<ChattingStateType>(CHATTING_STATE[0].state);
  const [search, setSearch] = useState<string>('');
  const searchParams = useSearchParams();
  const id = searchParams.get('id'); // 현재 선택된 채팅방 id
  const router = useRouter();

  // 현재 채팅 유저 상태 -> 전역에서 가져오는 방법 고려
  const pathname = usePathname();
  const userType = pathname.split('/')[1]; // client or expert

  const handleChatItemClick = (chatRoomId: string) => {
    router.push(`/${userType}/chat?id=${chatRoomId}`);
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
        placedholder="검색어를 입력해주세요"
        value={search}
        onChange={(value: string) => setSearch(value)}
      />

      {/* 채팅 목록 */}
      <div className="flex flex-col rounded-[8px] border-1 border-black4 overflow-hidden ">
        {chattingRoomDummyData.map((item, index) => (
          <ChatListItem
            key={index}
            chatRoomId={item.id}
            recentChatDate={new Date(item.last_message_time)}
            text={item.lasst_message}
            userName={item.expert_name}
            userProfile={item.expert_profile_image}
            isSelected={id === item.id}
            onClick={() => handleChatItemClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
