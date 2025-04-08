// 채팅방 목록에 보여지는 채팅방 타입
export interface ChattingRoomType {
  roomId: string;
  otherUserName: string;
  otherUserProfile: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}
