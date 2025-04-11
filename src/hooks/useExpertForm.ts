import { useState } from 'react';
import { Expert } from '@/types/user';
import { ExpertCategoryName } from '@/types/expert';

interface ExpertFormData {
  categoryName: ExpertCategoryName;
  subCategoryNames: string[];
  newSubCategory: string;
  careerYears: string;
  certificateNames: string[];
  newCertificate: string;
  introduction: string;
  bankName: string;
  accountNumber: string;
  portfolioTitle: string;
  portfolioImage: string;
}

interface EditableFields {
  categoryName: boolean;
  subCategoryNames: boolean;
  careerYears: boolean;
  certificateNames: boolean;
  introduction: boolean;
  bankInfo: boolean;
  portfolio: boolean;
}

export function useExpertForm(initialData: Expert) {
  // 폼 데이터 상태
  const [formData, setFormData] = useState<ExpertFormData>({
    categoryName: initialData.categoryName as ExpertCategoryName,
    subCategoryNames: initialData.subCategoryNames,
    newSubCategory: '',
    careerYears: initialData.careerYears.toString(),
    certificateNames: initialData.certificateNames,
    newCertificate: '',
    introduction: initialData.introduction,
    bankName: initialData.bankName || '',
    accountNumber: initialData.accountNumber || '',
    portfolioTitle: initialData.portfolioTitle || '',
    portfolioImage: initialData.portfolioImage || '',
  });

  // 편집 가능한 필드 상태
  const [editableFields, setEditableFields] = useState<EditableFields>({
    categoryName: false,
    subCategoryNames: false,
    careerYears: false,
    certificateNames: false,
    introduction: false,
    bankInfo: false,
    portfolio: false,
  });

  // 편집 상태 토글 함수
  const toggleEditable = (fieldName: keyof EditableFields) => {
    setEditableFields(prev => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  return {
    formData,
    setFormData,
    editableFields,
    toggleEditable,
  };
}
