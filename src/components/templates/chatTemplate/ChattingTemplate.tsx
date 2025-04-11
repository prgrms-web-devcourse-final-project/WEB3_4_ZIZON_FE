'use client';

import { GetRoomsResponse } from '@/apis/chat/getRooms';
import { getExpert } from '@/apis/expert/getExpert';
import getOfferList from '@/apis/offer/getOffer';
import ClientChattingInfo from '@/components/organisms/chatting/chattingInfo/client/ClientChattingInfo';
import ChattingRoom from '@/components/organisms/chatting/chattingRoom/ChattingRoom';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function ChattingTemplate({ chatRoomList }: { chatRoomList: GetRoomsResponse }) {
  const [room, setRoom] = useState<string | null>(null); // roomId

  const [projectId, setProjectId] = useState<number | null>(null); // 현제 선택된 프로젝트 Id
  const [expertId, setExpertId] = useState<number | null>(null); // 현제 선택된 전문가 Id

  const { data: expertData, isLoading: isLoadingExpert } = useQuery({
    queryKey: ['expert', expertId],
    queryFn: () => getExpert({ expertId: String(expertId) }),
    // queryFn: () => getExpert({ expertId: String(11) }),
    enabled: !!expertId,
  });

  const { data: offerData, isLoading: isLoadingOffer } = useQuery({
    queryKey: ['offer', projectId, expertId],
    queryFn: () => getOfferList({ projectId: projectId, expertId: expertId! }),
    // queryFn: () => getOfferList({ projectId: 235, expertId: 11 }),
    enabled: !!projectId && !!expertId,
  });

  return (
    <div className="flex gap-24 mt-46 items-start jusitfy-center w-1670">
      <ChattingRoom
        roomId={room}
        setRoom={setRoom}
        setProjectId={setProjectId}
        setExpertId={setExpertId}
        chatRoomList={chatRoomList}
      />

      <ClientChattingInfo expertData={expertData} offerData={offerData} expertId={expertId} />
    </div>
  );
}
