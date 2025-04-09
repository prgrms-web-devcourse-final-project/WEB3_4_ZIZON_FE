'use client';

import { GetRoomsResponse } from '@/apis/chat/getRooms';
import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';
import SmallTag from '@/components/atoms/tags/smallTag/SmallTag';
import ChatListItem from '@/components/molecules/chatListItem/ChatListItem';
import { CHATTING_STATE, ChattingStateType } from '@/constants/chat';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState } from 'react';

interface ChattingListProps {
  chatRoomList: GetRoomsResponse;
  handleRoomChange: (roomId: string, projectId: number, userId: number) => void;
  room: string | null; // 선택된 채팅방 id
}

export default function ChattingList({ chatRoomList, handleRoomChange, room }: ChattingListProps) {
  const [filter, setFilter] = useState<ChattingStateType>(CHATTING_STATE[0].state);
  const [search, setSearch] = useState<string>('');
  const searchParams = useSearchParams();
  const id = searchParams.get('roomId'); // 현재 선택된 채팅방 id
  const router = useRouter();

  // 현재 채팅 유저 상태 -> 전역에서 가져오는 방법 고려
  const pathname = usePathname();
  const userType = pathname.split('/')[1]; // client or expert

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
        {chatRoomList.map((item, index) => (
          <ChatListItem
            key={index}
            chatRoomId={item.roomId}
            recentChatDate={new Date(item.lastMessageTime)}
            text={item.lastMessage}
            userName={item.otherUserName}
            userProfile={item.otherUserProfile}
            isSelected={room === item.roomId}
            onClick={() => handleRoomChange(item.roomId, item.projectId, item.otherUserId)}
          />
        ))}
      </div>
    </div>
  );
}
