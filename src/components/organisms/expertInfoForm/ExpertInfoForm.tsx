import { useState } from 'react';
import EditableField from '@/components/molecules/editableField/EditableField';
import TagList from '@/components/molecules/tagList/TagList';
import { Expert } from '@/types/user';

interface ExpertInfoFormProps {
  initialData: Expert;
}

export default function ExpertInfoForm({ initialData }: ExpertInfoFormProps) {
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

  const handleCategoryEditClick = () => {
    setIsCategoryEditable(!isCategoryEditable);
  };

  const handleSubCategoriesEditClick = () => {
    setIsSubCategoriesEditable(!isSubCategoriesEditable);
    setNewSubCategory('');
  };

  const handleCareerEditClick = () => {
    setIsCareerEditable(!isCareerEditable);
  };

  const handleCertificatesEditClick = () => {
    setIsCertificatesEditable(!isCertificatesEditable);
    setNewCertificate('');
  };

  const handleIntroductionEditClick = () => {
    setIsIntroductionEditable(!isIntroductionEditable);
  };

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
      />
    </div>
  );
}
