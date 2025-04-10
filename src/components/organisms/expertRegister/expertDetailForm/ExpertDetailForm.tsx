'use client';

import { useState, useEffect } from 'react';
import ProgressBar, { ProgressStep } from '@/components/atoms/bars/progressBar/ProgressBar';
import SemiBoldText from '@/components/atoms/texts/semiBoldText/SemiBoldText';
import TextInput from '@/components/atoms/inputs/textInput/TextInput';
import InputLabel from '@/components/atoms/texts/inputLabel/InputLabel';
import XMarkTag from '@/components/atoms/tags/xMarkTag/XMarkTag';
import SelectedCard from '@/components/molecules/selectedCard/SelectedCard';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import ImageUploadField from '@/components/molecules/imageUploadField/ImageUploadField';

interface ExpertDetailFormProps {
  onSubmit: (data: ExpertDetailFormData) => void;
  setPortfolioImageFile: (file: File) => void;
}

export interface ExpertDetailFormData {
  gender: boolean; // false: 남성, true: 여성
  careerYears: string;
  certifications: string[];
  introduction: string;
  bankName: string;
  accountNumber: string;
  portfolioTitle: string;
  portfolioImage: string;
}

// 은행 목록 객체
const BANK_LIST = [
  { id: 'kb', name: '국민은행' },
  { id: 'nh', name: '농협은행' },
  { id: 'ibk', name: '기업은행' },
  { id: 'toss', name: '토스뱅크' },
  { id: 'woori', name: '우리은행' },
  { id: 'hana', name: '하나은행' },
  { id: 'shinhan', name: '신한은행' },
  { id: 'kakao', name: '카카오뱅크' },
  { id: 'busan', name: '부산은행' },
  { id: 'gyeongnam', name: '경남은행' },
  { id: 'gwangju', name: '광주은행' },
  { id: 'jeonbuk', name: '전북은행' },
  { id: 'jeju', name: '제주은행' },
];

function ExpertDetailForm({ onSubmit, setPortfolioImageFile }: ExpertDetailFormProps) {
  const [formData, setFormData] = useState<ExpertDetailFormData>({
    gender: false,
    careerYears: '',
    certifications: [],
    introduction: '',
    bankName: '',
    accountNumber: '',
    portfolioTitle: '',
    portfolioImage: '',
  });

  const [newCertification, setNewCertification] = useState('');
  const [isBankDropdownOpen, setIsBankDropdownOpen] = useState(false);

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

  const handleBankSelect = (bankName: string) => {
    setFormData(prev => ({ ...prev, bankName }));
    setIsBankDropdownOpen(false);
  };

  const handlePortfolioTitleChange = (value: string) => {
    setFormData(prev => ({ ...prev, portfolioTitle: value }));
  };

  const handlePortfolioImageUpload = (file: File) => {
    setPortfolioImageFile(file);
  };

  return (
    <article className="w-636 flex flex-col items-center gap-64 px-54 py-64 bg-black1 rounded-xl">
      <ProgressBar step={ProgressStep.STEP5} />
      <SemiBoldText title="마지막으로 필수 정보를 입력해주세요." fontSize={28} />

      <div className="w-full flex flex-col gap-32">
        {/* 성별 선택 */}
        <div className="flex flex-col gap-12">
          <InputLabel size="16" label="성별" />
          <div className="flex gap-16">
            <SelectedCard
              type="center"
              title="남성"
              category="men"
              isOn={!formData.gender}
              onClick={() => handleGenderChange(false)}
            />
            <SelectedCard
              type="center"
              title="여성"
              category="women"
              isOn={formData.gender}
              onClick={() => handleGenderChange(true)}
            />
          </div>
        </div>

        {/* 경력 연차 */}
        <div className="flex flex-col gap-12">
          <InputLabel size="16" label="경력 연차" />
          <TextInput
            id="careerYears"
            type="number"
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
          <div className="grid grid-cols-3 gap-16">
            <div className="col-span-1">
              <DropdownMenu open={isBankDropdownOpen} onOpenChange={setIsBankDropdownOpen}>
                <DropdownMenuTrigger className="w-full flex items-center justify-between px-16 py-12 border border-black5 rounded-sm bg-transparent text-16 text-black12 focus:outline-none focus:ring-1 focus:ring-primary5 focus:border-transparent">
                  {formData.bankName || '은행 선택'}
                  <ChevronDown className="size-16" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-164 max-h-[240px] overflow-y-auto">
                  {BANK_LIST.map(bank => (
                    <DropdownMenuItem
                      key={bank.id}
                      className="px-16 py-12"
                      onClick={() => handleBankSelect(bank.name)}
                    >
                      {bank.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="col-span-2">
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

        <hr />

        <div className="w-full flex flex-col gap-20">
          {/* 포트폴리오 제목 */}
          <h3 className="text-16 font-semibold text-black12">포트폴리오</h3>
          <div className="flex flex-col gap-12">
            <InputLabel size="16" label="포트폴리오 제목" />
            <TextInput
              id="portfolioTitle"
              type="text"
              placeholder="예) 한국관광공사 프로젝트"
              value={formData.portfolioTitle}
              onChange={handlePortfolioTitleChange}
            />
          </div>

          {/* 포트폴리오 이미지 업로드 */}
          <ImageUploadField label="포트폴리오 이미지" onImageChange={handlePortfolioImageUpload} />
        </div>
      </div>
    </article>
  );
}

export default ExpertDetailForm;
