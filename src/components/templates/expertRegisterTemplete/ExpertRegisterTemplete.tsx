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
import { registerExpert } from '@/apis/expert/registerExpert';
import { SERVICES } from '@/types/expert';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  const handleRegister = async () => {
    if (!isStepValid()) return;

    try {
      setIsSubmitting(true);
      setErrorMessage(null);

      // 선택된 서비스의 라벨 가져오기
      const subCategoryNames = selectedServices
        .map(service => {
          const serviceObj = SERVICES[selectedValue!].find(s => s.value === service);
          return serviceObj ? serviceObj.label : '';
        })
        .filter(Boolean);

      // 카테고리 이름 변환
      const categoryNameMap: Record<ExpertCategory, string> = {
        move: '이사/청소',
        fix: '설치/수리',
        tutor: '과외',
        hobby: '취미생활',
      };

      // 전문가 등록 API 호출
      const response = await registerExpert({
        categoryName: categoryNameMap[selectedValue!] || '',
        subCategoryNames,
        careerYears: Number(expertDetail.careerYears),
        introduction: expertDetail.introduction,
        certificateNames: expertDetail.certifications,
        gender: expertDetail.gender,
        bankName: expertDetail.bankName,
        accountNumber: expertDetail.accountNumber,
        sellerInfo: '등록된 한국 사업자입니다.', // 기본값 설정
      });

      if (response.success) {
        alert('전문가 등록이 완료되었습니다.');
        router.push('/mypage/expertInfo');
      } else {
        setErrorMessage(response.message || '전문가 등록에 실패했습니다.');
      }
    } catch (error) {
      console.error('전문가 등록 오류:', error);
      setErrorMessage('전문가 등록 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (!isStepValid()) return;
    if (step < 3) {
      setStep(step + 1);
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
        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
        <ExpertStepFooterButton
          onClickBefore={handleBefore}
          onClickNext={handleNext}
          onClickRegister={handleRegister}
          state={step === 3 ? 'register' : 'next'}
          disabled={!isStepValid() || isSubmitting}
        />
      </div>
    </section>
  );
}

export default ExpertRegisterTemplete;
