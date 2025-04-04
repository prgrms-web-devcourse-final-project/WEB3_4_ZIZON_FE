export interface OfferInfoType {
  id: number; // long
  project_id: number; // long
  expert_id: number; // long
  price: number; // decimal
  description: string; // string
  delivery_days: number; // int
  categoryName: string; // !! 백엔드에 추가 요청한 부분, 필드명 변경 가능
  status: 'pending' | 'accepted' | 'rejected'; // string (상태 값은 가능한 값으로 제한)
  created_at: string; // datetime (ISO 8601 형식의 문자열)
}
