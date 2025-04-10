'use client';

import { useRouter } from 'next/navigation';
import { useUserData } from '@/hooks/useUserData';
import MypageSidebar from '@/components/organisms/sidebar/mypageSidebar/MypageSidebar';
import LoadingSpinner from '@/components/atoms/loadingSpinner/LoadingSpinner';
import ErrorState from '@/components/molecules/errorState/ErrorState';

interface MyPageClientProps {
  children: React.ReactNode;
}

export default function MyPageClient({ children }: MyPageClientProps) {
  const router = useRouter();
  const { memberInfo, isLoading, error } = useUserData();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ErrorState
          title="데이터를 불러오는 중 오류가 발생했습니다"
          message={error.message}
          onRetry={() => window.location.reload()}
        />
      </div>
    );
  }

  if (!memberInfo) {
    router.push('/');
    return null;
  }

  const profileInfo = {
    profileImage: memberInfo.profileImage,
    name: memberInfo.name,
  };

  return (
    <div className="flex gap-36 justify-center my-72">
      <MypageSidebar profileInfo={profileInfo} />
      <main className="w-750">{children}</main>
    </div>
  );
}
