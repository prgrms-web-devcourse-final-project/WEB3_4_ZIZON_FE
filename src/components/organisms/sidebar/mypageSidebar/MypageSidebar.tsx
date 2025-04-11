'use client';

import ProfileInfo, { ProfileInfoProps } from '@/components/molecules/profileInfo/ProfileInfo';
import UserStateTabContainer from '@/components/molecules/userStateTabContainer/UserStateTabContainer';
import { useUserData } from '@/hooks/useUserData';
import { useUserStore } from '@/store/userStore';
import LoadingSpinner from '@/components/atoms/loadingSpinner/LoadingSpinner';
import ErrorState from '@/components/molecules/errorState/ErrorState';
import { useState } from 'react';
import ConfirmModal from '@/components/organisms/confirmModal/ConfirmModal';
import { useRouter } from 'next/navigation';

interface MypageSidebarProps {
  profileInfo: Omit<ProfileInfoProps, 'onChangeState' | 'isState'>;
}

function MypageSidebar({ profileInfo }: MypageSidebarProps) {
  const router = useRouter();
  const { currentRole, setCurrentRole, expert: storeExpert } = useUserStore();
  const { isLoading, error } = useUserData();

  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 역할 전환 함수
  const toggleRole = async () => {
    // 현재 클라이언트이고 전문가 정보가 있는 경우 바로 전환
    if (currentRole === 'client' && storeExpert) {
      try {
        await setCurrentRole('expert');
      } catch (error) {
        console.error('역할 변경 중 오류 발생:', error);
      }
      return;
    }

    // 현재 전문가인 경우 클라이언트로 전환
    if (currentRole === 'expert') {
      try {
        await setCurrentRole('client');
      } catch (error) {
        console.error('역할 변경 중 오류 발생:', error);
      }
      return;
    }

    // 클라이언트이고 전문가 정보가 없는 경우 모달 표시
    if (currentRole === 'client' && !storeExpert) {
      setIsModalOpen(true);
    }
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 전문가 등록 페이지로 이동
  const goToExpertRegister = () => {
    setIsModalOpen(false);
    router.push('/expert/register');
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

      {/* 전문가 등록 모달 */}
      <ConfirmModal
        isOpen={isModalOpen}
        title="전문가 등록 필요"
        message={`전문가로 전환하려면 \n전문가 등록이 필요합니다.\n\n전문가 등록 페이지로 이동하시겠습니까?`}
        confirmText="등록하러가기"
        cancelText="취소"
        onConfirm={goToExpertRegister}
        onCancel={closeModal}
      />
    </aside>
  );
}

export default MypageSidebar;
