'use client';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { useState } from 'react';
import ModalContainer from '../modal/ModalContainer';
import ContractModal, { FormValue } from '../modal/ContractModal';
import { OfferResponseType } from '@/apis/offer/getOffer';
import { ExpertType } from '@/apis/expert/getExpert';
import { useMutation, useQuery } from '@tanstack/react-query';
import { postContract, PostContractRequestType } from '@/apis/contract/postContract';
import { useRouter } from 'next/navigation';

export default function ChattingButtonGroup({
  offerInfo,
  expertInfo,
}: {
  offerInfo: OfferResponseType;
  expertInfo: ExpertType;
}) {
  const [openContract, setOpenContract] = useState(false);
  const router = useRouter();
  const postContractMutation = useMutation({
    mutationFn: (contractRequest: PostContractRequestType) => postContract(contractRequest),
    onError: error => console.error('계약서 제출 에러:', error),
    onSuccess: data => {
      alert('계약서 제출 성공');
      setOpenContract(false);
      const { contractId } = data;
      const paymentType = 'PROJECT';
      router.push(`/payments?${contractId}&type=${paymentType}`);
    },
  });
  postContractMutation.data;
  // 계약서 제출
  const handleSubmitContract = (formValue: FormValue) => {
    postContractMutation.mutate({
      offerId: offerInfo.id,
      price: formValue.servicePrice,
      startDate: formValue.serviceStartDate,
      endDate: formValue.serviceEndDate,
    });
  };

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
        onClick={() => {
          alert('아직  구현되지 않았습니다.');
        }}
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
