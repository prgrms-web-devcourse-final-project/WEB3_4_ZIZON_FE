import { APIBuilder } from '@/utils/APIBuilder';

export interface MessageType {
  roomId: string;
  sender: string;
  receiver: string;
  content: string;
  timestamp: string;
  user_name: string;
  user_profile_image: string;
  read: boolean;
  fileUrl: string | null;
}

export default async function getChatHistory(roomId: string): Promise<MessageType[]> {
  const [sender, receiver] = roomId.split(':');
  const response = await APIBuilder.get(
    `/chatrooms?sender=${encodeURIComponent(sender)}&receiver=${encodeURIComponent(receiver)}`,
  )
    .timeout(10000)
    .withCredentials(true)
    .build()
    .call<MessageType[]>();

  return response.data;
}
