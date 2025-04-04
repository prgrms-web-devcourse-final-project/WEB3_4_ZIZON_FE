'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ExpertStepFooterButton from '@/components/atoms/buttons/expertStepFooterButton/ExpertStepFooterButton';
import ExpertCategoryList from '@/components/organisms/expertRegister/expertMajorCategoryList/ExpertMajorCategoryList';
import { ExpertCategory } from '@/components/atoms/buttons/labelWithIconButton/LabelWithIconButton';
import ExpertServices from '@/components/organisms/expertRegister/expertSubCategoryList/ExpertSubCategoryList';
import ExpertDetailForm, {
  ExpertDetailFormData,
} from '@/components/organisms/expertRegister/expertDetailForm/ExpertDetailForm';
import type { Service } from '@/types/expert';

function ExpertRegisterTemplete() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [selectedValue, setSelectedValue] = useState<ExpertCategory | null>(null);
  const [selectedServices, setSelectedServices] = useState<Service[ExpertCategory][]>([]);
  const [expertDetail, setExpertDetail] = useState<ExpertDetailFormData>({
    gender: false,
    careerYears: '',
    certifications: [],
    introduction: '',
    bankName: '',
    accountNumber: '',
  });

  const isStepValid = () => {
    switch (step) {
      case 1:
        return selectedValue !== null;
      case 2:
        return selectedServices.length > 0;
      case 3:
        return (
          expertDetail.careerYears !== '' &&
          expertDetail.introduction !== '' &&
          expertDetail.bankName !== '' &&
          expertDetail.accountNumber !== ''
        );
      default:
        return false;
    }
  };

  useEffect(() => {
    const category = searchParams.get('expert-category') as ExpertCategory | null;
    if (category) {
      setSelectedValue(category);
    }
  }, [searchParams]);

  const handleNext = () => {
    if (!isStepValid()) return;

    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      // TODO: 전문가 등록 API 호출
      console.log('전문가 등록 데이터:', {
        category: selectedValue,
        services: selectedServices,
        detail: expertDetail,
      });
    }
  };

  const handleBefore = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleCategoryChange = (name: string, value: ExpertCategory | null) => {
    setSelectedValue(value);
    if (value) {
      router.push(`?${name}=${value}`);
    } else {
      router.push('/expert/register');
    }
  };

  const handleDetailSubmit = (data: ExpertDetailFormData) => {
    setExpertDetail(data);
  };

  return (
    <section className="w-full flex justify-center my-72">
      <div className="flex flex-col items-end gap-32">
        {step === 1 && (
          <ExpertCategoryList
            selectedValue={selectedValue}
            setSelectedValue={handleCategoryChange}
          />
        )}
        {step === 2 && (
          <ExpertServices
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
          />
        )}
        {step === 3 && <ExpertDetailForm onSubmit={handleDetailSubmit} />}
        <ExpertStepFooterButton
          onClickBefore={handleBefore}
          onClickNext={handleNext}
          state={step === 3 ? 'register' : 'next'}
          disabled={!isStepValid()}
        />
      </div>
    </section>
  );
}

export default ExpertRegisterTemplete;
