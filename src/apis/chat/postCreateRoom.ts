import { APIBuilder } from '@/utils/APIBuilder';

export default async function postCreateRoom(projectId: number) {
  const response = await APIBuilder.post(`/chatrooms?projectId=${projectId}`, {})
    .timeout(10000)
    .withCredentials(true)
    .build()
    .call();

  return response.data;
}
