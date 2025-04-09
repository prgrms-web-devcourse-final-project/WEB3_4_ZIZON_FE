import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

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

interface BankInfoSectionProps {
  bankName: string;
  accountNumber: string;
  isEditable: boolean;
  onEditClick: () => void;
  onBankNameChange: (value: string) => void;
  onAccountNumberChange: (value: string) => void;
  onSave: () => void;
  disabled: boolean;
}

export default function BankInfoSection({
  bankName,
  accountNumber,
  isEditable,
  onEditClick,
  onBankNameChange,
  onAccountNumberChange,
  onSave,
  disabled,
}: BankInfoSectionProps) {
  const [isBankDropdownOpen, setIsBankDropdownOpen] = useState(false);

  const handleEditClick = () => {
    if (isEditable) {
      onSave();
    } else {
      onEditClick();
    }
  };

  const handleBankSelect = (selectedBankName: string) => {
    onBankNameChange(selectedBankName);
    setIsBankDropdownOpen(false);
  };

  return (
    <div className="flex flex-col gap-16">
      <div className="flex justify-between items-center">
        <h3 className="text-16 font-medium">계좌 정보</h3>
        <button
          onClick={handleEditClick}
          className="text-14 text-primary5 hover:text-primary4 transition-colors"
          disabled={disabled}
        >
          {isEditable ? '저장' : '수정'}
        </button>
      </div>
      <div className="flex flex-col gap-16">
        <div className="grid grid-cols-3 gap-16">
          <div className="col-span-1">
            <label className="block text-14 text-black8 mb-8">은행명</label>
            {isEditable ? (
              <DropdownMenu open={isBankDropdownOpen} onOpenChange={setIsBankDropdownOpen}>
                <DropdownMenuTrigger className="w-full flex items-center justify-between px-16 py-12 border border-black5 rounded-sm bg-transparent text-16 text-black12 focus:outline-none focus:ring-1 focus:ring-primary5 focus:border-transparent">
                  {bankName || '은행 선택'}
                  <ChevronDown className="size-16" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-218 max-h-[240px] overflow-y-auto">
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
            ) : (
              <div
                className={`px-16 py-12 border border-black5 rounded-sm text-16 text-black12 ${
                  isEditable ? '' : 'bg-black3'
                }`}
              >
                {bankName || '은행 정보 없음'}
              </div>
            )}
          </div>
          <div className="col-span-2">
            <label className="block text-14 text-black8 mb-8">계좌번호</label>
            {isEditable ? (
              <input
                type="text"
                value={accountNumber}
                onChange={e => onAccountNumberChange(e.target.value)}
                placeholder="계좌번호를 입력하세요"
                className="w-full px-16 py-12 border border-black5 rounded-sm bg-transparent text-16 text-black12 focus:outline-none focus:ring-1 focus:ring-primary5 focus:border-transparent"
                disabled={disabled}
              />
            ) : (
              <div
                className={`px-16 py-12 border border-black5 rounded-sm text-16 text-black12 ${
                  isEditable ? '' : 'bg-black3'
                }`}
              >
                {accountNumber || '계좌번호 정보 없음'}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
