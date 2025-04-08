import { APIBuilder } from '@/utils/APIBuilder';
import { Member } from '@/types/user';

export interface GetUserByIdRequest {
  userId: number;
}

export const getUserById = async (request: GetUserByIdRequest): Promise<Member> => {
  const { userId } = request;

  const response = await APIBuilder.get(`/users/${userId}`).timeout(10000).build().call<Member>();

  return response.data;
};
