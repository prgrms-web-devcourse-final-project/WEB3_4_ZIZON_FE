'use client';

import ProfileInfo, { ProfileInfoProps } from '@/components/molecules/profileInfo/ProfileInfo';
import UserStateTabContainer from '@/components/molecules/userStateTabContainer/UserStateTabContainer';
import { useUserData } from '@/hooks/useUserData';
import { useUserStore } from '@/store/userStore';

interface MypageSidebarProps {
  profileInfo: Omit<ProfileInfoProps, 'onChangeState' | 'isState'>;
}

function MypageSidebar({ profileInfo }: MypageSidebarProps) {
  const { currentRole, setCurrentRole } = useUserStore();
  const { expertInfo, isLoading, error } = useUserData();

  // 역할 전환 함수
  const toggleRole = () => {
    setCurrentRole(currentRole === 'client' ? 'expert' : 'client');
  };

  if (isLoading) {
    return (
      <aside className="col-start-3 col-end-5 flex flex-col gap-24">
        <div className="animate-pulse bg-gray-200 h-32 rounded-md"></div>
        <div className="animate-pulse bg-gray-200 h-64 rounded-md"></div>
      </aside>
    );
  }

  if (error) {
    return (
      <aside className="col-start-3 col-end-5 flex flex-col gap-24">
        <div className="p-4 bg-red-100 text-red-700 rounded-md">
          <p>데이터를 불러오는 중 오류가 발생했습니다.</p>
          <p className="text-sm">{error.message}</p>
        </div>
      </aside>
    );
  }

  // 역할에 따른 추가 정보 구성
  const enhancedProfileInfo = {
    ...profileInfo,
    ...(currentRole === 'expert' &&
      expertInfo && {
        certificationBadgeText: expertInfo.certification ? '인증완료' : '인증필요',
      }),
  };

  return (
    <aside className="flex flex-col gap-24">
      <ProfileInfo {...enhancedProfileInfo} isState={currentRole} onChangeState={toggleRole} />
      <UserStateTabContainer isState={currentRole} />
    </aside>
  );
}

export default MypageSidebar;
