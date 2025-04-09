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
import { useUserStore } from '@/store/userStore';
import { getExpertById } from '@/apis/expert/getExpertById';
import { postImageUpload } from '@/apis/imageUpload/postImageUpload';
import { putS3Upload } from '@/apis/imageUpload/putS3Upload';
import { toast } from 'sonner';

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
    portfolioTitle: '',
    portfolioImage: '',
  });
  const [portfolioImageFile, setPortfolioImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setExpert } = useUserStore();

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

  // 이미지 업로드 함수
  const uploadPortfolioImage = async (file: File): Promise<string> => {
    try {
      // 파일 이름 생성 (타임스탬프 + 원본 파일명)
      const timestamp = new Date().getTime();
      const fileName = `${timestamp}_${file.name}`;

      // S3 업로드 URL 요청
      const response = await postImageUpload({
        folder: 'portfolios',
        fileName,
        contentType: 'image/webp',
      });

      // S3에 파일 업로드
      await putS3Upload(response.presignedUrl, file);

      return response.accessUrl;
    } catch (error) {
      console.error('포트폴리오 이미지 업로드 오류:', error);
      throw new Error('이미지 업로드에 실패했습니다.');
    }
  };

  const handleRegister = async () => {
    if (!isStepValid()) return;

    try {
      setIsSubmitting(true);

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

      // 포트폴리오 이미지 업로드 (파일이 있는 경우)
      let portfolioImageUrl = '';
      if (portfolioImageFile) {
        try {
          portfolioImageUrl = await uploadPortfolioImage(portfolioImageFile);
        } catch (uploadError) {
          console.error('포트폴리오 이미지 업로드 오류:', uploadError);
          toast.error('포트폴리오 이미지 업로드에 실패했습니다.');
          setIsSubmitting(false);
          return;
        }
      }

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
        portfolioTitle: expertDetail.portfolioTitle || '포트폴리오 이름',
        portfolioImage: portfolioImageUrl || '',
      });

      if (response) {
        toast.success('전문가 등록이 완료되었습니다.');

        const expertData = await getExpertById({ expertId: response.expertId });
        setExpert(expertData); // store에 전문가 정보 저장

        router.push('/mypage/expertInfo');
      } else {
        toast.error('전문가 등록에 실패했습니다.');
      }
    } catch (error) {
      console.error('전문가 등록 오류:', error);
      toast.error('전문가 등록 중 오류가 발생했습니다.');
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
        {step === 3 && (
          <ExpertDetailForm
            onSubmit={handleDetailSubmit}
            setPortfolioImageFile={setPortfolioImageFile}
          />
        )}
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
