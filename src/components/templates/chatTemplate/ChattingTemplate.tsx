'use client';

import { GetRoomsResponse } from '@/apis/chat/getRooms';
import { getExpert } from '@/apis/expert/getExpert';
import getOfferList from '@/apis/offer/getOffer';
import ClientChattingInfo from '@/components/organisms/chatting/chattingInfo/client/ClientChattingInfo';
import ChattingList from '@/components/organisms/chatting/chattingLIst/ChattingList';
import ChattingRoom from '@/components/organisms/chatting/chattingRoom/ChattingRoom';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function ChattingTemplate({ chatRoomList }: { chatRoomList: GetRoomsResponse }) {
  const [room, setRoom] = useState<string | null>(null);
  const [projectId, setProjectId] = useState<number | null>(null); // 현제 선택된 프로젝트 Id
  const [expertId, setExpertId] = useState<number | null>(null); // 현제 선택된 전문가 Id

  const { data: expertData, isLoading: isLoadingExpert } = useQuery({
    queryKey: ['expert', expertId],
    queryFn: () => getExpert({ expertId: String(expertId) }),
    enabled: !!expertId,
  });

  const { data: offerData, isLoading: isLoadingOffer } = useQuery({
    queryKey: ['offer', projectId],
    queryFn: () => getOfferList({ projectId: projectId! }),
    enabled: !!projectId,
    initialData: {
      id: 401,
      projectId: 301,
      expertId: 102,
      price: 4800000,
      description: '경력과 포트폴리오를 기반으로 한 제안',
      deliveryDays: 10,
      status: 'pending',
      createdAt: '2025-03-24T11:00:00Z',
    },
  });

  const handleRoomChange = (roomId: string, projectId: number, userId: number) => {
    setRoom(roomId);
    setProjectId(projectId);
    setExpertId(userId);
  };

  if (isLoadingExpert || isLoadingOffer) {
    return <div>로딩중</div>;
  }

  return (
    <div className="flex gap-24 mt-46 items-start jusitfy-center w-1670">
      <ChattingList chatRoomList={chatRoomList} handleRoomChange={handleRoomChange} room={room} />
      <ChattingRoom />
      <ClientChattingInfo expertData={expertData} offerData={offerData} expertId={expertId} />
    </div>
  );
}
