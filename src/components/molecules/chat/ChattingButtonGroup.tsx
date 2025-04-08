'use client';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { useState } from 'react';
import ModalContainer from '../modal/ModalContainer';
import ContractModal, { FormValue } from '../modal/ContractModal';
import { OfferInfoType } from '@/types/offer';
import { ExpertInfoType } from '@/types/expert';

export default function ChattingButtonGroup({
  offerInfo,
  expertInfo,
}: {
  offerInfo: OfferInfoType;
  expertInfo: ExpertInfoType;
}) {
  const [openContract, setOpenContract] = useState(false);

  // 계약서 제출
  const handleSubmitContract = (formValue: FormValue) => {};

  const contractInfo = {
    expertProfileImage: expertInfo.expert_profile,
    expertName: expertInfo.expert_name,
    expertCategory: expertInfo.expert_category,
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
