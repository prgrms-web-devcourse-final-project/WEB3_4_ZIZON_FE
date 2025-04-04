'use client';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import LabeledInput from '@/components/molecules/labeledInput/LabeledInput';
import LabeledTextArea from '@/components/molecules/labeledTextArea/LabeledTextArea';
import { useState } from 'react';

export interface OfferFormType {
  charge: string | null;
  estimateDate: string | null;
  information: string | null;
}

interface OfferFormProps {
  onSubmit: (value: OfferFormType) => void;
}

export default function OfferForm({ onSubmit }: OfferFormProps) {
  const [value, setValue] = useState<OfferFormType>({
    charge: null,
    estimateDate: null,
    information: null,
  });

  const handleChargeChange = (chargeValue: string) => {
    setValue(prev => ({ ...prev, charge: chargeValue }));
  };

  const handleEstimadeDateChange = (estimateDateValue: string) => {
    setValue(prev => ({ ...prev, estimateDate: estimateDateValue }));
  };

  const handleInformationChange = (informationValue: string) => {
    setValue(prev => ({ ...prev, information: informationValue }));
  };

  const isFormValid = Object.values(value).every(v => v !== null && v !== '');
  return (
    <div className="min-w-410 flex flex-col gap-32">
      <h1 className="font-semibold text-24 text-black10"> 견적 보내기</h1>
      <LabeledInput
        label="금액"
        placeholder="금액을 입력해주세요."
        type="text"
        id="charge"
        onChange={handleChargeChange}
        value={value.charge === null ? '' : value.charge}
      />
      <LabeledInput
        label="작업 소요 일수"
        placeholder="작업 소요 일수를 입력해주세요."
        type="text"
        id="estimate-date"
        onChange={handleEstimadeDateChange}
        value={value.estimateDate === null ? '' : value.estimateDate}
      />
      <LabeledTextArea
        label="견적 설명"
        placeholder="요청사항에 대한 답변, 서비스 진행방식, 전문가 만의 강점이나 특징 등을 작성하세요."
        id="information"
        onChange={handleInformationChange}
        value={value.information === null ? '' : value.information}
      />

      <StandardButton
        disabled={!isFormValid}
        state="blue"
        size="full"
        text="견적 보내기"
        onClick={() => {
          onSubmit(value);
        }}
      />
    </div>
  );
}
