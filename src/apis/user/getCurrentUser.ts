import { APIBuilder } from '@/utils/APIBuilder';
import { Member } from '@/types/user';

export const getCurrentUser = async (): Promise<Member> => {
  const response = await APIBuilder.get(`/users/me`).timeout(10000).build().call<Member>();

  return response.data;
};
