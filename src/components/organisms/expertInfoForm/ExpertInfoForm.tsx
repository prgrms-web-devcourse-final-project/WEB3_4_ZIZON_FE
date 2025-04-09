import { useState } from 'react';
import { Expert } from '@/types/user';
import { useUserStore } from '@/store/userStore';
import { updateExpert } from '@/apis/expert/updateExpert';
import { toast } from 'sonner';
import { useExpertForm } from '@/hooks/useExpertForm';
import { putImageUpload } from '@/apis/imageUpload/putImageUpload';
import CategorySection from './sections/CategorySection';
import CareerSection from './sections/CareerSection';
import CertificatesSection from './sections/CertificatesSection';
import IntroductionSection from './sections/IntroductionSection';
import BankInfoSection from './sections/BankInfoSection';
import PortfolioSection from './sections/PortfolioSection';
import { ExpertCategoryName } from '@/types/expert';

interface ExpertInfoFormProps {
  initialData: Expert;
}

export default function ExpertInfoForm({ initialData }: ExpertInfoFormProps) {
  const { expert, setExpert } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);

  // 폼 데이터 상태 관리
  const { formData, setFormData, editableFields, toggleEditable } = useExpertForm(initialData);

  // 공통 업데이트 함수
  const handleUpdate = async (
    fieldName: string,
    successMessage: string,
    errorMessage: string,
    updateStore: (expert: Expert) => void,
  ) => {
    if (!expert?.id) return;

    setIsLoading(true);
    try {
      await updateExpert(expert.id, {
        categoryName: formData.categoryName,
        careerYears: parseInt(formData.careerYears),
        introduction: formData.introduction,
        certificateNames: formData.certificateNames,
        gender: expert.gender,
        bankName: formData.bankName,
        accountNumber: formData.accountNumber,
        portfolioTitle: formData.portfolioTitle,
        portfolioImage: formData.portfolioImage,
        subCategoryNames: formData.subCategoryNames,
      });

      updateStore(expert);
      toast.success(successMessage);
      return true;
    } catch (err) {
      console.error('전문가 정보 수정 중 오류:', err);
      toast.error(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // 각 섹션별 업데이트 핸들러
  const handleCategoryUpdate = async () => {
    const success = await handleUpdate(
      'categoryName',
      '비즈니스 분야가 수정되었습니다.',
      '비즈니스 분야 수정에 실패했습니다.',
      expert => {
        setExpert({
          ...expert,
          categoryName: formData.categoryName,
          subCategoryNames: formData.subCategoryNames,
        });
      },
    );

    if (success) {
      toggleEditable('categoryName');
    }
  };

  const handleCareerUpdate = async () => {
    const success = await handleUpdate(
      'careerYears',
      '경력이 수정되었습니다.',
      '경력 수정에 실패했습니다.',
      expert => {
        setExpert({
          ...expert,
          careerYears: parseInt(formData.careerYears),
        });
      },
    );

    if (success) {
      toggleEditable('careerYears');
    }
  };

  const handleCertificatesUpdate = async () => {
    const success = await handleUpdate(
      'certificateNames',
      '자격증이 수정되었습니다.',
      '자격증 수정에 실패했습니다.',
      expert => {
        setExpert({
          ...expert,
          certificateNames: formData.certificateNames,
        });
      },
    );

    if (success) {
      toggleEditable('certificateNames');
    }
  };

  const handleIntroductionUpdate = async () => {
    const success = await handleUpdate(
      'introduction',
      '소개가 수정되었습니다.',
      '소개 수정에 실패했습니다.',
      expert => {
        setExpert({
          ...expert,
          introduction: formData.introduction,
        });
      },
    );

    if (success) {
      toggleEditable('introduction');
    }
  };

  const handleBankInfoUpdate = async () => {
    const success = await handleUpdate(
      'bankInfo',
      '계좌 정보가 수정되었습니다.',
      '계좌 정보 수정에 실패했습니다.',
      expert => {
        setExpert({
          ...expert,
          bankName: formData.bankName,
          accountNumber: formData.accountNumber,
        });
      },
    );

    if (success) {
      toggleEditable('bankInfo');
    }
  };

  const handlePortfolioUpdate = async () => {
    const success = await handleUpdate(
      'portfolio',
      '포트폴리오가 수정되었습니다.',
      '포트폴리오 수정에 실패했습니다.',
      expert => {
        setExpert({
          ...expert,
          portfolioTitle: formData.portfolioTitle,
          portfolioImage: formData.portfolioImage,
        });
      },
    );

    if (success) {
      toggleEditable('portfolio');
    }
  };

  return (
    <div className="flex flex-col gap-32">
      <CategorySection
        category={formData.categoryName as ExpertCategoryName}
        subCategories={formData.subCategoryNames}
        isEditable={editableFields.categoryName}
        onEditClick={() => toggleEditable('categoryName')}
        onSave={handleCategoryUpdate}
        onCategoryChange={value => setFormData({ ...formData, categoryName: value })}
        onAddSubCategory={tag => {
          setFormData({
            ...formData,
            subCategoryNames: [...formData.subCategoryNames, tag],
            newSubCategory: '',
          });
        }}
        onRemoveSubCategory={index => {
          const newTags = formData.subCategoryNames.filter((_, i) => i !== index);
          setFormData({ ...formData, subCategoryNames: newTags });
        }}
        onResetSubCategories={() => {
          setFormData({ ...formData, subCategoryNames: [] });
        }}
        disabled={isLoading}
      />

      <hr />

      <CareerSection
        value={formData.careerYears}
        onChange={value => setFormData({ ...formData, careerYears: value })}
        isEditable={editableFields.careerYears}
        onEditClick={() => toggleEditable('careerYears')}
        onSave={handleCareerUpdate}
        disabled={isLoading}
      />

      <hr />

      <CertificatesSection
        tags={formData.certificateNames}
        newTagValue={formData.newCertificate}
        isEditable={editableFields.certificateNames}
        onEditClick={() => toggleEditable('certificateNames')}
        onAddTag={tag => {
          setFormData({
            ...formData,
            certificateNames: [...formData.certificateNames, tag],
            newCertificate: '',
          });
        }}
        onRemoveTag={index => {
          const newTags = formData.certificateNames.filter((_, i) => i !== index);
          setFormData({ ...formData, certificateNames: newTags });
        }}
        onNewTagChange={value => setFormData({ ...formData, newCertificate: value })}
        onSave={handleCertificatesUpdate}
      />

      <hr />

      <IntroductionSection
        value={formData.introduction}
        onChange={value => setFormData({ ...formData, introduction: value })}
        isEditable={editableFields.introduction}
        onEditClick={() => toggleEditable('introduction')}
        onSave={handleIntroductionUpdate}
        disabled={isLoading}
      />

      <hr />

      <BankInfoSection
        bankName={formData.bankName}
        accountNumber={formData.accountNumber}
        isEditable={editableFields.bankInfo}
        onEditClick={() => toggleEditable('bankInfo')}
        onBankNameChange={value => setFormData({ ...formData, bankName: value })}
        onAccountNumberChange={value => setFormData({ ...formData, accountNumber: value })}
        onSave={handleBankInfoUpdate}
        disabled={isLoading}
      />

      <hr />

      <PortfolioSection
        title={formData.portfolioTitle}
        image={formData.portfolioImage}
        isEditable={editableFields.portfolio}
        onEditClick={() => toggleEditable('portfolio')}
        onTitleChange={value => setFormData({ ...formData, portfolioTitle: value })}
        onImageUpload={async file => {
          try {
            setIsLoading(true);
            const accessUrl = await putImageUpload({
              tableUnionType: 'portfolios',
              file,
            });

            if (accessUrl) {
              setFormData({ ...formData, portfolioImage: accessUrl });
              toast.success('포트폴리오 이미지가 업로드되었습니다.');
            } else {
              throw new Error('이미지 업로드 실패');
            }
          } catch (error) {
            console.error('포트폴리오 이미지 업로드 오류:', error);
            toast.error('이미지 업로드에 실패했습니다. 다시 시도해주세요.');
          } finally {
            setIsLoading(false);
          }
        }}
        onSave={handlePortfolioUpdate}
        disabled={isLoading}
      />
    </div>
  );
}
