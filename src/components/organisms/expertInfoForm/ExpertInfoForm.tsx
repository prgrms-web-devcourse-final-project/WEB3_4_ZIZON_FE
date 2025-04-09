import { useState } from 'react';
import EditableField from '@/components/molecules/editableField/EditableField';
import TagList from '@/components/molecules/tagList/TagList';
import { Expert } from '@/types/user';
import { useUserStore } from '@/store/userStore';
import { updateExpert } from '@/apis/expert/updateExpert';
import { toast } from 'sonner';

interface ExpertInfoFormProps {
  initialData: Expert;
}

export default function ExpertInfoForm({ initialData }: ExpertInfoFormProps) {
  const { expert, setExpert } = useUserStore();
  const [categoryName, setCategoryName] = useState(initialData.categoryName);
  const [subCategoryNames, setSubCategoryNames] = useState(initialData.subCategoryNames);
  const [newSubCategory, setNewSubCategory] = useState('');
  const [careerYears, setCareerYears] = useState(initialData.careerYears.toString());
  const [certificateNames, setCertificateNames] = useState(initialData.certificateNames);
  const [newCertificate, setNewCertificate] = useState('');
  const [introduction, setIntroduction] = useState(initialData.introduction);
  const [isCategoryEditable, setIsCategoryEditable] = useState(false);
  const [isSubCategoriesEditable, setIsSubCategoriesEditable] = useState(false);
  const [isCareerEditable, setIsCareerEditable] = useState(false);
  const [isCertificatesEditable, setIsCertificatesEditable] = useState(false);
  const [isIntroductionEditable, setIsIntroductionEditable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
        categoryName,
        subCategoryNames,
        careerYears: parseInt(careerYears),
        introduction,
        certificateNames,
        gender: expert.gender,
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

  // 각 필드별 핸들러
  const handleCategoryEditClick = async () => {
    if (isCategoryEditable) {
      const success = await handleUpdate(
        'categoryName',
        '비즈니스 분야가 수정되었습니다.',
        '비즈니스 분야 수정에 실패했습니다.',
        expert => {
          setExpert({
            ...expert,
            categoryName,
          });
        },
      );

      if (success) {
        setIsCategoryEditable(false);
      }
    } else {
      setIsCategoryEditable(true);
    }
  };

  const handleSubCategoriesEditClick = async () => {
    if (isSubCategoriesEditable) {
      const success = await handleUpdate(
        'subCategoryNames',
        '제공 서비스가 수정되었습니다.',
        '제공 서비스 수정에 실패했습니다.',
        expert => {
          setExpert({
            ...expert,
            subCategoryNames,
          });
        },
      );

      if (success) {
        setIsSubCategoriesEditable(false);
      }
    } else {
      setIsSubCategoriesEditable(true);
      setNewSubCategory('');
    }
  };

  const handleCareerEditClick = async () => {
    if (isCareerEditable) {
      const success = await handleUpdate(
        'careerYears',
        '경력이 수정되었습니다.',
        '경력 수정에 실패했습니다.',
        expert => {
          setExpert({
            ...expert,
            careerYears: parseInt(careerYears),
          });
        },
      );

      if (success) {
        setIsCareerEditable(false);
      }
    } else {
      setIsCareerEditable(true);
    }
  };

  const handleCertificatesEditClick = async () => {
    if (isCertificatesEditable) {
      const success = await handleUpdate(
        'certificateNames',
        '자격증이 수정되었습니다.',
        '자격증 수정에 실패했습니다.',
        expert => {
          setExpert({
            ...expert,
            certificateNames,
          });
        },
      );

      if (success) {
        setIsCertificatesEditable(false);
      }
    } else {
      setIsCertificatesEditable(true);
      setNewCertificate('');
    }
  };

  const handleIntroductionEditClick = async () => {
    if (isIntroductionEditable) {
      const success = await handleUpdate(
        'introduction',
        '소개가 수정되었습니다.',
        '소개 수정에 실패했습니다.',
        expert => {
          setExpert({
            ...expert,
            introduction,
          });
        },
      );

      if (success) {
        setIsIntroductionEditable(false);
      }
    } else {
      setIsIntroductionEditable(true);
    }
  };

  // 태그 관련 핸들러
  const handleAddSubCategory = () => {
    if (newSubCategory.trim()) {
      setSubCategoryNames([...subCategoryNames, newSubCategory.trim()]);
      setNewSubCategory('');
    }
  };

  const handleAddCertificate = () => {
    if (newCertificate.trim()) {
      setCertificateNames([...certificateNames, newCertificate.trim()]);
      setNewCertificate('');
    }
  };

  const handleRemoveSubCategory = (index: number) => {
    const newSubCategories = subCategoryNames.filter((_, i) => i !== index);
    setSubCategoryNames(newSubCategories);
  };

  const handleRemoveCertificate = (index: number) => {
    const newCertificates = certificateNames.filter((_, i) => i !== index);
    setCertificateNames(newCertificates);
  };

  return (
    <div className="flex flex-col gap-32">
      <EditableField
        id="categoryName"
        label="비즈니스 분야"
        value={categoryName}
        placeholder="이사/청소"
        onChange={setCategoryName}
        isEditable={isCategoryEditable}
        onEditClick={handleCategoryEditClick}
        disabled={isLoading}
      />

      <TagList
        label="제공 서비스"
        tags={subCategoryNames}
        isEditable={isSubCategoriesEditable}
        newTagValue={newSubCategory}
        placeholder="제공하는 서비스를 입력하세요"
        onEditClick={handleSubCategoriesEditClick}
        onAddTag={handleAddSubCategory}
        onRemoveTag={handleRemoveSubCategory}
        onNewTagChange={setNewSubCategory}
      />

      <EditableField
        id="careerYears"
        label="경력"
        value={careerYears}
        placeholder="5"
        onChange={setCareerYears}
        isEditable={isCareerEditable}
        onEditClick={handleCareerEditClick}
        disabled={isLoading}
      />

      <TagList
        label="자격증"
        tags={certificateNames}
        isEditable={isCertificatesEditable}
        newTagValue={newCertificate}
        placeholder="보유한 자격증을 입력하세요"
        onEditClick={handleCertificatesEditClick}
        onAddTag={handleAddCertificate}
        onRemoveTag={handleRemoveCertificate}
        onNewTagChange={setNewCertificate}
      />

      <EditableField
        id="introduction"
        label="전문가 소개"
        value={introduction}
        placeholder="안녕하세요, 5년 경력의 웹 개발 전문가입니다..."
        onChange={setIntroduction}
        isEditable={isIntroductionEditable}
        onEditClick={handleIntroductionEditClick}
        useTextarea={true}
        rows={6}
        disabled={isLoading}
      />
    </div>
  );
}
