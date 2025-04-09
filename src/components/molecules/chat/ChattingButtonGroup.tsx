'use client';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { useState } from 'react';
import ModalContainer from '../modal/ModalContainer';
import ContractModal, { FormValue } from '../modal/ContractModal';
import { OfferResponseType } from '@/apis/offer/getOffer';
import { ExpertType } from '@/apis/expert/getExpert';

export default function ChattingButtonGroup({
  offerInfo,
  expertInfo,
}: {
  offerInfo: OfferResponseType;
  expertInfo: ExpertType;
}) {
  const [openContract, setOpenContract] = useState(false);

  // 계약서 제출
  const handleSubmitContract = (formValue: FormValue) => {};

  const contractInfo = {
    expertProfileImage: expertInfo.profileImage,
    expertName: expertInfo.name,
    expertCategory: expertInfo.categoryName,
    charge: offerInfo.price,
  };

  return (
    <div className="w-full flex gap-16">
      <StandardButton
        text="채팅방 나가기"
        onClick={() => {}}
        disabled={false}
        size="full"
        state="default"
      />
      <StandardButton
        text="거래하기"
        onClick={() => {
          setOpenContract(true);
        }}
        disabled={false}
        size="full"
        state="blue"
      />
      <ModalContainer open={openContract}>
        <ContractModal
          onClose={() => setOpenContract(false)}
          onSubmit={handleSubmitContract}
          offerData={contractInfo}
        />
      </ModalContainer>
    </div>
  );
}
