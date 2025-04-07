'use client';

import UserInfoForm from '@/components/organisms/userInfoForm/UserInfoForm';
import { useUserStore } from '@/store/userStore';

export default function MyInfoPage() {
  const { member: storeMember } = useUserStore();
  const initialData = {
    name: storeMember?.name ?? '',
    email: storeMember?.email ?? '',
    password: '********',
    phone: storeMember?.phone ?? '01000000000',
  };

  return (
    <div className="w-full pt-24 pl-64">
      <h1 className="text-24 font-bold mb-40">내 정보</h1>
      <UserInfoForm initialData={initialData} />
    </div>
  );
}
