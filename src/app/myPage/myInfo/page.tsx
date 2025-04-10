'use client';

import UserInfoForm from '@/components/organisms/userInfoForm/UserInfoForm';
import { useUserStore } from '@/store/userStore';
import { Member } from '@/types/user';

export default function MyInfoPage() {
  const { member: storeMember } = useUserStore();
  const initialData: Member = {
    id: storeMember?.id ?? 0,
    expertId: storeMember?.expertId ?? 0,
    name: storeMember?.name ?? '',
    email: storeMember?.email ?? '',
    phone: storeMember?.phone ?? '',
    profileImage: storeMember?.profileImage ?? '',
    accountStatus: storeMember?.accountStatus ?? 'ACTIVE',
  };

  return (
    <div className="w-full pt-24 pl-64">
      <h1 className="text-24 font-bold mb-40">내 정보</h1>
      <UserInfoForm initialData={initialData} />
    </div>
  );
}
