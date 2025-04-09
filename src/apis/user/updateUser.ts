import { APIBuilder } from '@/utils/APIBuilder';
import { Member } from '@/types/user';

export interface UpdateUserRequest {
  userId: number;
  data: Partial<Member>;
}

export const updateUser = async (request: UpdateUserRequest): Promise<Member> => {
  const { userId, data } = request;

  const response = await APIBuilder.patch(`/users/${userId}`, data)
    .timeout(10000)
    .build()
    .call<Member>();

  return response.data;
};
