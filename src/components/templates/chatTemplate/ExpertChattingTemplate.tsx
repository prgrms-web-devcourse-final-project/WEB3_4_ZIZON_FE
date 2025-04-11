'use client';

import { GetRoomsResponse } from '@/apis/chat/getRooms';
import getOfferList from '@/apis/offer/getOffer';
import getProjectInClient from '@/apis/project/getProjectInClient';
import ExpertChattingInfo from '@/components/organisms/chatting/chattingInfo/expert/ExpertChattingInfo';
import ChattingRoom from '@/components/organisms/chatting/chattingRoom/ChattingRoom';
import { useUserData } from '@/hooks/useUserData';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function ExpertChattingTemplate({
  chatRoomList,
}: {
  chatRoomList: GetRoomsResponse;
}) {
  const [room, setRoom] = useState<string | null>(null);
  const [projectId, setProjectId] = useState<number | null>(null); // 현제 선택된 프로젝트 Id
  const { expertInfo } = useUserData();
  const expertId = expertInfo?.id; // 현재 전문가(자기자신)의 id
  const service = expertInfo?.categoryName || '서비스'; // 전문가의 서비스 카테고리

  const { data: projectData, isLoading: isLoadingProject } = useQuery({
    queryKey: ['project', projectId],
    queryFn: () => getProjectInClient({ projectId: String(projectId) }),
    enabled: !!projectId,
  });

  const { data: offerData, isLoading: isLoadingOffer } = useQuery({
    queryKey: ['offer', projectId],
    queryFn: () => getOfferList({ projectId: projectId!, expertId: expertId! }),
    enabled: !!projectId,
  });

  return (
    <div className="flex gap-24 mt-46 items-start jusitfy-center w-1670">
      <ChattingRoom
        roomId={room}
        setRoom={setRoom}
        setProjectId={setProjectId}
        chatRoomList={chatRoomList}
      />

      {/* // OFFER의 description이 옳지 않은 값으로 온경우 에러가 발생 */}
      <ExpertChattingInfo
        projectData={projectData}
        offerData={offerData}
        service={service}
        expertId={expertId}
      />
    </div>
  );
}
