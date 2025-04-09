import { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { ExpertCategory, ExpertCategoryName, SERVICES } from '@/types/expert';

// 비즈니스 분야 목록
const CATEGORY_LIST: { id: ExpertCategory; name: string }[] = [
  { id: 'move', name: '이사/청소' },
  { id: 'fix', name: '설치/수리' },
  { id: 'tutor', name: '과외' },
  { id: 'hobby', name: '취미생활' },
];

// 카테고리 이름 타입
interface CategorySectionProps {
  category: ExpertCategoryName;
  subCategories: string[];
  isEditable: boolean;
  onEditClick: () => void;
  onSave: () => void;
  onCategoryChange: (value: ExpertCategoryName) => void;
  onAddSubCategory: (tag: string) => void;
  onRemoveSubCategory: (index: number) => void;
  onResetSubCategories: () => void;
  disabled: boolean;
}

export default function CategorySection({
  category,
  subCategories,
  isEditable,
  onEditClick,
  onSave,
  onCategoryChange,
  onAddSubCategory,
  onRemoveSubCategory,
  onResetSubCategories,
  disabled,
}: CategorySectionProps) {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSubCategoryDropdownOpen, setIsSubCategoryDropdownOpen] = useState(false);
  const [prevCategory, setPrevCategory] = useState<ExpertCategoryName | null>(null);

  // 서비스 분야가 바뀌면 서브카테고리 초기화
  useEffect(() => {
    if (prevCategory !== null && prevCategory !== category && subCategories.length > 0) {
      // 서브카테고리 초기화
      onResetSubCategories();
    }
    setPrevCategory(category);
  }, [category, prevCategory, subCategories, onResetSubCategories]);

  const handleEditClick = () => {
    if (isEditable) {
      onSave();
    } else {
      onEditClick();
    }
  };

  const handleCategorySelect = (selectedCategory: ExpertCategory) => {
    // 선택된 카테고리의 이름 찾기
    const selectedCategoryItem = CATEGORY_LIST.find(item => item.id === selectedCategory);
    const categoryName = selectedCategoryItem ? selectedCategoryItem.name : selectedCategory;

    // 카테고리 이름을 전달
    onCategoryChange(categoryName as ExpertCategoryName);

    setIsCategoryDropdownOpen(false);
  };

  const handleSubCategorySelect = (selectedSubCategory: string) => {
    // 이미 선택된 서브카테고리인지 확인
    if (!subCategories.includes(selectedSubCategory)) {
      onAddSubCategory(selectedSubCategory);
    }
    setIsSubCategoryDropdownOpen(false);
  };

  // 현재 선택된 카테고리에 해당하는 서브카테고리 목록 가져오기
  const getSubCategories = () => {
    if (!category) return [];

    // 카테고리 이름을 ID로 변환
    const categoryId = CATEGORY_LIST.find(item => item.name === category)?.id;
    if (!categoryId) return [];

    return SERVICES[categoryId] || [];
  };

  return (
    <div className="flex flex-col gap-24">
      {/* 비즈니스 분야 섹션 */}
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h3 className="text-16 font-medium">비즈니스 분야</h3>
          <button
            onClick={handleEditClick}
            className="text-14 text-primary5 hover:text-primary4 transition-colors"
            disabled={disabled}
          >
            {isEditable ? '저장' : '수정'}
          </button>
        </div>
        {isEditable ? (
          <DropdownMenu open={isCategoryDropdownOpen} onOpenChange={setIsCategoryDropdownOpen}>
            <DropdownMenuTrigger className="w-full flex items-center justify-between px-16 py-12 border border-black5 rounded-sm bg-transparent text-16 text-black12 focus:outline-none focus:ring-1 focus:ring-primary5 focus:border-transparent">
              {category || '비즈니스 분야 선택'}
              <ChevronDown className="size-16" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-686 max-h-[240px] overflow-y-auto">
              {CATEGORY_LIST.map(category => (
                <DropdownMenuItem
                  key={category.id}
                  className="w-full px-16 py-12"
                  onClick={() => handleCategorySelect(category.id)}
                >
                  {category.name}
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
            {category || '비즈니스 분야 정보 없음'}
          </div>
        )}
      </div>

      {/* 제공 서비스 섹션 */}
      <div className="flex flex-col gap-8">
        <h3 className="text-16 font-medium">제공 서비스</h3>
        {isEditable ? (
          <div className="flex flex-col gap-16">
            {/* 서브카테고리 드롭다운 */}
            {category && (
              <DropdownMenu
                open={isSubCategoryDropdownOpen}
                onOpenChange={setIsSubCategoryDropdownOpen}
              >
                <DropdownMenuTrigger className="w-full flex items-center justify-between px-16 py-12 border border-black5 rounded-sm bg-transparent text-16 text-black12 focus:outline-none focus:ring-1 focus:ring-primary5 focus:border-transparent">
                  서브카테고리 선택
                  <ChevronDown className="size-16" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-686 max-h-[240px] overflow-y-auto">
                  {getSubCategories().map(subCategory => (
                    <DropdownMenuItem
                      key={subCategory.value}
                      className="w-full px-16 py-12"
                      onClick={() => handleSubCategorySelect(subCategory.label)}
                    >
                      {subCategory.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* 선택된 서브카테고리 목록 */}
            <div className="flex flex-wrap gap-8">
              {subCategories.map((subCategory, index) => (
                <div
                  key={index}
                  className="flex items-center gap-8 px-12 py-8 bg-primary1 text-primary5 rounded-sm"
                >
                  <span>{subCategory}</span>
                  <button
                    onClick={() => onRemoveSubCategory(index)}
                    className="text-primary5 hover:text-primary4"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className={`px-16 py-12 border border-black5 rounded-sm text-16 text-black12 ${
              isEditable ? '' : 'bg-black3'
            }`}
          >
            {subCategories.length > 0 ? subCategories.join(', ') : '제공 서비스 정보 없음'}
          </div>
        )}
      </div>
    </div>
  );
}
