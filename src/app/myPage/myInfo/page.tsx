'use client';

import UserInfoForm from '@/components/organisms/userInfoForm/UserInfoForm';

export default function MyInfoPage() {
  const initialData = {
    nickname: '이진우',
    email: 'jinu17@naver.com',
    password: 'jin********',
    phoneNumber: '010-1312-1231',
  };

  return (
    <div className="w-full pt-24 pl-64">
      <h1 className="text-24 font-bold mb-40">내 정보</h1>
      <UserInfoForm initialData={initialData} />
    </div>
  );
}
