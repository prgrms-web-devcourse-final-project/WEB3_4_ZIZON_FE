import { Member } from '@/types/user';
import { updateUser } from '@/apis/user/updateUser';
import { toast } from 'sonner';

interface UpdateUserFieldParams {
  userId: number;
  field: keyof Member;
  value: string;
  setMember: (member: Member) => void;
  currentName?: string;
}

export const updateUserField = async ({
  userId,
  field,
  value,
  setMember,
  currentName,
}: UpdateUserFieldParams): Promise<boolean> => {
  try {
    const updateData: Partial<Member> = {
      [field]: value,
    };

    if (field !== 'name' && currentName) {
      updateData.name = currentName;
    }

    const updatedUser = await updateUser({
      userId,
      data: updateData,
    });

    setMember(updatedUser);
    toast.success(`${field}이(가) 성공적으로 수정되었습니다.`);
    return true;
  } catch (error) {
    console.error(`${field} 수정 실패:`, error);
    toast.error(`${field} 수정에 실패했습니다.`);
    return false;
  }
};
