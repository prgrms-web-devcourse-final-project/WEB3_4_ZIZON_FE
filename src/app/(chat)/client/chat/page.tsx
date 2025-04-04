import ClientChattingInfo from '@/components/organisms/chatting/chattingInfo/client/ClientChattingInfo';
import ChattingList, {
  dummyChattingRooms,
} from '@/components/organisms/chatting/chattingLIst/ChattingList';
import ChattingRoom from '@/components/organisms/chatting/chattingRoom/ChattingRoom';
import ChattingTemplate from '@/components/templates/chatTemplate/ChattingTemplate';
import { ExpertInfoType } from '@/types/expert';
import { OfferInfoType } from '@/types/offer';

export default function ClientChatPage() {
  //1. 채팅방 목록 가져오기 -> room_id, project_id 얻기

  //2.searchParams중 room_id가 변하면 견적서(offer) 정보, 전문가 정보를 받야와야 함.
  //

  const dummyOfferInfo: OfferInfoType = {
    id: 401,
    project_id: 301,
    expert_id: 102,
    price: 4800000.0,
    description: '경력과 포트폴리오를 기반으로 한 제안입니다.',
    delivery_days: 10,
    categoryName: '웹 개발',
    status: 'pending',
    created_at: '2025-03-24T11:00:00Z',
  };

  const dummyExpertInfo: ExpertInfoType = {
    introduction: '자기소개',
    career_years: 10,
    certification: '자격증 정보',
    bank_account: '계좌 정보',
    availability: 'available',
    seller_info: '판매자 추가 정보',
    // 추가예상 정보
    expert_name: '이수정',
    expert_profile: '/images/DefaultImage.png',
    expert_category: '과외',
  };

  return (
    <ChattingTemplate>
      <ChattingList chattingRoomList={dummyChattingRooms} />
      <ChattingRoom />
      <ClientChattingInfo offerInfo={dummyOfferInfo} expertInfo={dummyExpertInfo} />
    </ChattingTemplate>
  );
}
