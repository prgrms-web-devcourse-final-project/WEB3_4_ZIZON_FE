import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import DateInput from '@/components/atoms/inputs/dateInput/DateInput';
import NumberInput from '@/components/atoms/inputs/numberInput/NumberInput';
import InputLabel from '@/components/atoms/texts/inputLabel/InputLabel';
import { useState } from 'react';
import ContractInfo, { ContractInfoProps } from './ContractInfo';

const Divider = () => {
  return <div className="w-full h-1 bg-black3" />;
};

interface ContractModalProps {
  onClose: () => void;
  onSubmit: (formValue: FormValue) => void;
  offerData: ContractInfoProps;
}

interface FormValue {
  servicePrice: number;
  serviceStartDate: string;
  serviceEndDate: string;
}

export default function ContractModal({ onClose, offerData, onSubmit }: ContractModalProps) {
  const [formValue, setFormValue] = useState<FormValue>({
    servicePrice: 0,
    serviceStartDate: '',
    serviceEndDate: '',
  });
  const isFormValid =
    formValue.servicePrice > 0 &&
    formValue.serviceStartDate !== '' &&
    formValue.serviceEndDate !== '';

  const handlePriceChange = (value: number) => {
    setFormValue(prev => ({
      ...prev,
      servicePrice: value,
    }));
  };

  const handleStartDateChange = (value: string) => {
    setFormValue(prev => ({
      ...prev,
      serviceStartDate: value,
    }));
  };

  const handleEndDateChange = (value: string) => {
    setFormValue(prev => ({
      ...prev,
      serviceEndDate: value,
    }));
  };

  return (
    <div className="w-482 px-36 py-40 flex flex-col gap-32 bg-black1 rounded-[16px]">
      <h1 className="font-semibold text-black12 text-24">계약서 작성</h1>
      <div className="flex flex-col gap-24">
        {/* 전문가 프로필 */}
        <ContractInfo {...offerData} />
        <Divider />
        {/* 작성 폼 */}

        <div className="flex flex-col gap-8 ">
          <InputLabel label="서비스 금액" htmlFor="servicePrice" />
          <NumberInput
            id="servicePrice"
            placeholder="상대방과 협의한 금액을 입력해주세요"
            value={formValue.servicePrice}
            onChange={value => {
              handlePriceChange(value);
            }}
          />
        </div>
        <div className="flex flex-col gap-8 ">
          <InputLabel label="작업 시작일" htmlFor="serviceStartDate" />
          <DateInput
            id="serviceStartDate"
            value={formValue.serviceStartDate}
            onChange={value => {
              handleStartDateChange(value);
            }}
            disabled={false}
          />
        </div>
        <div className="flex flex-col gap-8 ">
          <InputLabel label="작업 종료일" htmlFor="serviceEndDate" />
          <DateInput
            id="serviceEndDate"
            value={formValue.serviceEndDate}
            onChange={value => {
              handleEndDateChange(value);
            }}
            disabled={false}
          />
        </div>
      </div>

      {/* 버튼그룹 */}
      <div className="flex flex-col gap-12">
        <StandardButton
          text="거래하기"
          state="blue"
          size="full"
          onClick={() => onSubmit(formValue)}
          disabled={!isFormValid}
        />
        <StandardButton
          text="취소"
          state="default"
          size="full"
          onClick={() => onClose()}
          disabled={false}
        />
      </div>
    </div>
  );
}
