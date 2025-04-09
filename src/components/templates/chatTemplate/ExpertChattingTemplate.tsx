'use client';

import { GetRoomsResponse } from '@/apis/chat/getRooms';
import getOfferList from '@/apis/offer/getOffer';
import getProject from '@/apis/project/getProject';
import ExpertChattingInfo from '@/components/organisms/chatting/chattingInfo/expert/ExpertChattingInfo';
import ChattingList from '@/components/organisms/chatting/chattingLIst/ChattingList';
import ChattingRoom from '@/components/organisms/chatting/chattingRoom/ChattingRoom';
import { useUserData } from '@/hooks/useUserData';
import { useUserStore } from '@/store/userStore';
import { useQuery } from '@tanstack/react-query';
import { Suspense, useState } from 'react';

export default function ExpertChattingTemplate({
  chatRoomList,
}: {
  chatRoomList: GetRoomsResponse;
}) {
  const [room, setRoom] = useState<string | null>(null);
  const [projectId, setProjectId] = useState<number | null>(53); // 현제 선택된 프로젝트 Id
  const { expertInfo } = useUserData();
  const expertId = expertInfo?.id; // 현재 전문가(자기자신)의 id
  const service = expertInfo?.categoryName || '서비스'; // 전문가의 서비스 카테고리

  const { data: projectData, isLoading: isLoadingProject } = useQuery({
    queryKey: ['project', projectId],
    queryFn: () => getProject({ projectId: String(projectId) }),
    enabled: !!projectId,
    initialData: {
      id: 0,
      title: '프로젝트 명',
      summary: '프로젝트 요약',
      description:
        '[{"원하시는 요청 형식이 무엇인가요?":"설치 및 수리"},{"설치 및 수리의 대상이 무엇인가요?":"가구","더 상세한 분류는 무엇인가요?":"소파"},{"서비스를 희망하는 날짜는 언제인가요?":"가능한 빨리","설치 및 수리를 원하는 지역은 어디인가요?":"서울특별시 강남구"}]',
      region: '서울시 마포구',
      budget: 100000,
      deadline: '2025-04-09T07:50:07.887Z',
      status: 'PENDING',
      clientName: '이진우',
      clientProfileImageUrl: '/images/DefaultImage.png',
      imageUrls: ['string'],
      emails: 'hello@gmail.com',
    },
  });

  const { data: offerData, isLoading: isLoadingOffer } = useQuery({
    queryKey: ['offer', projectId],
    queryFn: () => getOfferList({ projectId: projectId!, expertId: expertId! }),
    enabled: !!projectId,
    initialData: {
      id: 401,
      projectId: 301,
      expertId: 102,
      price: 4800000,
      description:
        '안녕하세요. 프로젝트에 대한 견적서를 보내드립니다. 검토 후 궁금한 점이나 수정이 필요한 부분이 있으면 말씀해 주세요.',
      deliveryDays: 10,
      status: 'pending',
      createdAt: '2025-03-24T11:00:00Z',
    },
  });

  const handleRoomChange = (roomId: string, projectId: number, userId: number) => {
    setRoom(roomId);
    setProjectId(projectId);
  };

  if (isLoadingProject || isLoadingOffer) {
    return <div>로딩중</div>;
  }

  return (
    <div className="flex gap-24 mt-46 items-start jusitfy-center w-1670">
      <Suspense>
        <ChattingList chatRoomList={chatRoomList} handleRoomChange={handleRoomChange} room={room} />
      </Suspense>
      <ChattingRoom />
      <ExpertChattingInfo
        projectData={projectData}
        offerData={offerData}
        service={service}
        expertId={expertId}
      />
    </div>
  );
}
