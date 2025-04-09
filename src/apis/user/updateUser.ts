import { APIBuilder } from '@/utils/APIBuilder';
import { Member } from '@/types/user';

export interface UpdateUserRequest {
  userId: number;
  data: Partial<Member>;
}

interface UpdateUserData {
  name: string;
  profileImage: string;
}

export const updateUser = async (request: UpdateUserRequest): Promise<UpdateUserData> => {
  const { userId, data } = request;

  const response = await APIBuilder.patch(`/users/${userId}`, data)
    .timeout(10000)
    .build()
    .call<UpdateUserData>();

  return response.data;
};
