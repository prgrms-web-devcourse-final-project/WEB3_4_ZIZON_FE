'use client';

import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';
import { useState } from 'react';
import ModalContainer from '../modal/ModalContainer';

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
                () => router.push('/mypage/expertInfo'),
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
                  setCurrentRole('client');
                  router.push('/commission/common/start');
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

      {/* 알림 모달 */}
      <ModalContainer open={isModalOpen}>
        <div className="bg-white px-40 py-36 rounded-2xl shadow-lg w-314">
          <h3 className="text-24 font-semibold text-center mb-16">{modalTitle}</h3>
          <p className="text-16 font-regular text-center mb-32 whitespace-pre-line">
            {modalMessage}
          </p>
          <div className="flex flex-col gap-12">
            <StandardButton
              text={confirmButtonText}
              state="blue"
              size="full"
              onClick={handleConfirm}
              disabled={false}
            />
            <StandardButton
              text="취소"
              state="default"
              size="full"
              onClick={closeModal}
              disabled={false}
            />
          </div>
        </div>
      </ModalContainer>
    </>
  );
}

export default BannerButtons;
