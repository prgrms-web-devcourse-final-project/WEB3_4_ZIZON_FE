'use client';

import { useState, useEffect } from 'react';
import ProgressBar, { ProgressStep } from '@/components/atoms/bars/progressBar/ProgressBar';
import SemiBoldText from '@/components/atoms/texts/semiBoldText/SemiBoldText';
import TextInput from '@/components/atoms/inputs/textInput/TextInput';
import InputLabel from '@/components/atoms/texts/inputLabel/InputLabel';
import XMarkTag from '@/components/atoms/tags/xMarkTag/XMarkTag';
import SelectedCard from '@/components/molecules/selectedCard/SelectedCard';

interface ExpertDetailFormProps {
  onSubmit: (data: ExpertDetailFormData) => void;
}

export interface ExpertDetailFormData {
  gender: boolean; // false: 남성, true: 여성
  careerYears: string;
  certifications: string[];
  introduction: string;
  bankName: string;
  accountNumber: string;
}

function ExpertDetailForm({ onSubmit }: ExpertDetailFormProps) {
  const [formData, setFormData] = useState<ExpertDetailFormData>({
    gender: false,
    careerYears: '',
    certifications: [],
    introduction: '',
    bankName: '',
    accountNumber: '',
  });

  const [newCertification, setNewCertification] = useState('');

  useEffect(() => {
    onSubmit(formData);
  }, [formData, onSubmit]);

  const handleGenderChange = (isFemale: boolean) => {
    setFormData(prev => ({ ...prev, gender: isFemale }));
  };

  const handleCareerYearsChange = (value: string) => {
    setFormData(prev => ({ ...prev, careerYears: value }));
  };

  const handleAddCertification = () => {
    if (newCertification.trim() && !formData.certifications.includes(newCertification)) {
      setFormData(prev => ({
        ...prev,
        certifications: [...prev.certifications, newCertification.trim()],
      }));
      setNewCertification('');
    }
  };

  const handleRemoveCertification = (certification: string) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(cert => cert !== certification),
    }));
  };

  return (
    <article className="w-636 flex flex-col items-center gap-64 px-54 py-64 bg-black1 rounded-xl">
      <ProgressBar step={ProgressStep.STEP3} />
      <SemiBoldText title="마지막으로 필수 정보를 입력해주세요." fontSize={28} />

      <div className="w-full flex flex-col gap-32">
        {/* 성별 선택 */}
        <div className="flex flex-col gap-12">
          <InputLabel size="16" label="성별" />
          <div className="flex gap-16">
            <div className="flex-1" onClick={() => handleGenderChange(false)}>
              <SelectedCard type="center" title="남성" category="men" isOn={!formData.gender} />
            </div>
            <div className="flex-1" onClick={() => handleGenderChange(true)}>
              <SelectedCard type="center" title="여성" category="women" isOn={formData.gender} />
            </div>
          </div>
        </div>

        {/* 경력 연차 */}
        <div className="flex flex-col gap-12">
          <InputLabel size="16" label="경력 연차" />
          <TextInput
            id="careerYears"
            type="text"
            placeholder="숫자만 입력해주세요. 신입의 경우 0을 입력하세요."
            value={formData.careerYears}
            onChange={handleCareerYearsChange}
          />
        </div>

        {/* 자격증 정보 */}
        <div className="flex flex-col gap-12">
          <InputLabel size="16" label="자격증 정보" />
          <div className="flex gap-8">
            <TextInput
              id="certification"
              type="text"
              placeholder="보유한 자격증이 있다면 입력해주세요!"
              value={newCertification}
              onChange={setNewCertification}
            />
            <button
              className="px-16 py-12 bg-primary5 text-black1 rounded-sm whitespace-nowrap"
              onClick={handleAddCertification}
            >
              추가
            </button>
          </div>
          {formData.certifications.length > 0 && (
            <div className="flex flex-wrap gap-8">
              {formData.certifications.map(cert => (
                <XMarkTag
                  key={cert}
                  text={cert}
                  color="default"
                  onClickXMark={() => handleRemoveCertification(cert)}
                />
              ))}
            </div>
          )}
        </div>

        {/* 소개글 */}
        <div className="flex flex-col gap-12">
          <InputLabel size="16" label="소개글" />
          <textarea
            className="w-full h-120 p-16 border border-black5 rounded-sm bg-transparent text-16 
            placeholder:text-black6 text-black12 focus:outline-none focus:ring-1 focus:ring-primary5 
            focus:border-transparent resize-none"
            placeholder="내용을 입력해주세요."
            value={formData.introduction}
            onChange={e => setFormData(prev => ({ ...prev, introduction: e.target.value }))}
          />
        </div>

        {/* 은행 선택 및 계좌번호 */}
        <div className="flex flex-col gap-12">
          <InputLabel size="16" label="은행 선택 및 계좌번호 입력" />
          <div className="flex gap-16">
            <TextInput
              id="bankName"
              type="text"
              placeholder="은행 선택"
              value={formData.bankName}
              onChange={value => setFormData(prev => ({ ...prev, bankName: value }))}
            />
            <TextInput
              id="accountNumber"
              type="text"
              placeholder="계좌번호"
              value={formData.accountNumber}
              onChange={value => setFormData(prev => ({ ...prev, accountNumber: value }))}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default ExpertDetailForm;
