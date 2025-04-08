'use client';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import NumberInput from '@/components/atoms/inputs/numberInput/NumberInput';
import InputLabel from '@/components/atoms/texts/inputLabel/InputLabel';
import LabeledInput from '@/components/molecules/labeledInput/LabeledInput';
import LabeledTextArea from '@/components/molecules/labeledTextArea/LabeledTextArea';
import { useState } from 'react';

export interface OfferFormType {
  charge: number;
  estimateDate: number;
  information: string | null;
}

interface OfferFormProps {
  onSubmit: (value: OfferFormType) => void;
}

export default function OfferForm({ onSubmit }: OfferFormProps) {
  const [value, setValue] = useState<OfferFormType>({
    charge: 0,
    estimateDate: 0,
    information: null,
  });

  const handleChargeChange = (chargeValue: number) => {
    setValue(prev => ({ ...prev, charge: chargeValue }));
  };

  const handleEstimadeDateChange = (estimateDateValue: number) => {
    setValue(prev => ({ ...prev, estimateDate: estimateDateValue }));
  };

  const handleInformationChange = (informationValue: string) => {
    setValue(prev => ({ ...prev, information: informationValue }));
  };

  const isFormValid = Object.values(value).every(v => v !== null && v !== '');
  return (
    <div className="min-w-410 flex flex-col gap-32">
      <h1 className="font-semibold text-24 text-black10"> 견적 보내기</h1>

      <div className="flex flex-col gap-8 ">
        <InputLabel label="금액" htmlFor="servicePrice" />
        <NumberInput
          id="servicePrice"
          placeholder="금액을 입력해주세요"
          value={value.charge}
          onChange={value => {
            handleChargeChange(value);
          }}
        />
      </div>

      <div className="flex flex-col gap-8 ">
        <InputLabel label="작업 소요 일수" htmlFor="servicePrice" />
        <NumberInput
          id="estimateDate"
          placeholder="작업 소요 일수을 입력해주세요"
          value={value.estimateDate}
          onChange={value => {
            handleEstimadeDateChange(value);
          }}
        />
      </div>

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
