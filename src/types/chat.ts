export interface ChattingRoomType {
  id: string; // 채팅방Id 를 쿼리 파라미터에 전달
  client_id: string;
  expert_id: string;
  created_at: string;
  lasst_message: string;
  last_message_time: string;
  // 백엔드에 추가 요청한 필드
  expert_name: string;
  expert_profile_image: string;
}
