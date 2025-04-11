'use client';

import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';
import { useState } from 'react';
import ConfirmModal from '@/components/organisms/confirmModal/ConfirmModal';

function BannerButtons() {
  const router = useRouter();
  const { member, currentRole, setCurrentRole } = useUserStore();

  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [confirmButtonText, setConfirmButtonText] = useState('확인');
  const [modalAction, setModalAction] = useState<(() => void) | null>(null);

  // 모달 열기 함수
  const openModal = (
    title: string,
    message: string,
    action?: () => void,
    confirmText: string = '확인',
  ) => {
    setModalTitle(title);
    setModalMessage(message);
    setConfirmButtonText(confirmText);
    setModalAction(() => action);
    setIsModalOpen(true);
  };

  // 모달 닫기 함수 (취소)
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 확인 버튼 클릭 시 실행되는 함수
  const handleConfirm = () => {
    setIsModalOpen(false);
    if (modalAction) {
      modalAction();
    }
  };

  // 역할 변경 함수
  const handleRoleChange = async (newRole: 'client' | 'expert', redirectPath: string) => {
    try {
      // 서버에 상태 변경 알림 및 로컬 상태 업데이트
      await setCurrentRole(newRole);

      // 페이지 이동
      router.push(redirectPath);
    } catch (error) {
      console.error('역할 변경 중 오류 발생:', error);
      openModal('역할 변경 실패', '역할 변경 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      <div className="flex gap-12">
        <StandardButton
          text="전문가 등록"
          state="default"
          onClick={() => {
            if (!member) {
              openModal(
                '로그인 필요',
                '로그인 후 이용해주세요.',
                () => router.push('/login'),
                '로그인하기',
              );
            } else if (member && !member.expertId) {
              router.push('/expert/register');
            } else {
              openModal(
                '전문가 등록 완료',
                '전문가 등록이 되어있는 계정입니다.',
                () => {
                  handleRoleChange('expert', '/myPage/expertInfo');
                },
                '전문가 정보 보기',
              );
            }
          }}
          disabled={false}
        />
        <StandardButton
          text="견적요청"
          state="dark"
          onClick={() => {
            if (!member) {
              openModal(
                '로그인 필요',
                '로그인 후 이용해주세요.',
                () => router.push('/login'),
                '로그인하기',
              );
            } else if (currentRole === 'expert') {
              openModal(
                '요청서 작성하기',
                '요청서 작성은 의뢰인으로 전환 후\n 이용할 수 있는 기능입니다. \n\n의뢰인으로 전환하시겠습니까?',
                () => {
                  handleRoleChange('client', '/commission/common/start');
                },
                '의뢰인으로 전환하기',
              );
            } else {
              router.push('/commission/common/start');
            }
          }}
          disabled={false}
        />
      </div>

      {/* 모달 컴포넌트 */}
      <ConfirmModal
        isOpen={isModalOpen}
        title={modalTitle}
        message={modalMessage}
        confirmText={confirmButtonText}
        onConfirm={handleConfirm}
        onCancel={closeModal}
      />
    </>
  );
}

export default BannerButtons;
