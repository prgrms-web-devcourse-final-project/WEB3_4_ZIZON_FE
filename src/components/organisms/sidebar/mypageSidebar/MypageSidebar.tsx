'use client';

import ProfileInfo, { ProfileInfoProps } from '@/components/molecules/profileInfo/ProfileInfo';
import UserStateTabContainer from '@/components/molecules/userStateTabContainer/UserStateTabContainer';
import { useUserData } from '@/hooks/useUserData';
import { useUserStore } from '@/store/userStore';
import LoadingSpinner from '@/components/atoms/loadingSpinner/LoadingSpinner';
import ErrorState from '@/components/molecules/errorState/ErrorState';

interface MypageSidebarProps {
  profileInfo: Omit<ProfileInfoProps, 'onChangeState' | 'isState'>;
}

function MypageSidebar({ profileInfo }: MypageSidebarProps) {
  const { currentRole, setCurrentRole, expert: storeExpert } = useUserStore();
  const { isLoading, error } = useUserData();

  // 역할 전환 함수
  const toggleRole = () => {
    if (currentRole === 'client' && !storeExpert) {
      alert('전문가 등록이 되지 않은 사용자입니다.');
      return;
    }

    setCurrentRole(currentRole === 'client' ? 'expert' : 'client');
  };

  // 로딩 상태 처리
  if (isLoading) {
    return (
      <aside className="flex flex-col gap-24">
        <div className="flex justify-center items-center p-24">
          <LoadingSpinner />
        </div>
      </aside>
    );
  }

  // 에러 상태 처리
  if (error) {
    return (
      <aside className="flex flex-col gap-24">
        <ErrorState
          title="데이터를 불러오는 중 오류가 발생했습니다"
          message={error.message}
          onRetry={() => window.location.reload()}
        />
      </aside>
    );
  }

  // 역할에 따른 추가 정보 구성
  const enhancedProfileInfo = {
    ...profileInfo,
    ...(currentRole === 'expert' &&
      storeExpert && {
        certificationBadgeText: storeExpert?.categoryName || '00',
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
