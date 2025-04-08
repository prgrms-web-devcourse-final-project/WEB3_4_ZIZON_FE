import { APIBuilder } from '@/utils/APIBuilder';
import { decodeToken } from '@/utils/decodeToken';
import { cookies } from 'next/headers';

interface RoomType {
  roomId: 'test3@test.com:한민@kakao.com';
  sender: 'test3@test.com';
  receiver: '한민@kakao.com';
  lastMessage: 'ㅂㅈㄷ';
  lastMessageTime: '2025-04-08T12:43:51';
  unreadCount: 5;
  projectId: 34;
  otherUserName: '한민';
  otherUserProfile: 'https://devcouse4-team16-bucket.s3.ap-northeast-2.amazonaws.com/projects/1/project_image.jpg';
  otherUserId: 12;
}

export type GetRoomsResponse = RoomType[];
export default async function getRooms() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    throw new Error('AccessToken이 없습니다.');
  }

  const email = decodeToken(token)?.username;
  const response = await APIBuilder.get(`/chatrooms/rooms?member=${email}`)
    .headers({
      Cookie: `accessToken=${token}`,
    })
    .withCredentials(true)
    .build()
    .call<GetRoomsResponse>();

  return response.data;
}
