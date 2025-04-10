import * as console from 'node:console';

interface PostChatRoomsRequest {
  project_id: string;
}

interface PostChatRoomsResponse {
  message: string;
}

export const postChatRooms = async ({ project_id }: PostChatRoomsRequest): Promise<PostChatRoomsResponse> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_SERVER_URL}/chatrooms?projectId=${project_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to post chat room: ${errorText}`);
  }

  try {
    const data: PostChatRoomsResponse = await response.json();
    return data;
  } catch (e) {
    const text = await response.text();
    throw new Error(`Invalid JSON response: ${text}`);
  }
};
