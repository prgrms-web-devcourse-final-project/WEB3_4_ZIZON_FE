import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import InputLabel from '@/components/atoms/texts/inputLabel/InputLabel';
import { ChevronDown } from 'lucide-react';

export interface Category {
  value: string;
  label: string;
}

interface SubCategoryDropdownProps {
  label: string;
  categories: Category[];
  selectedValue?: string;
  onChange: (value: string) => void;
}

export default function SubCategoryDropdown({
  label,
  categories,
  selectedValue,
  onChange,
}: SubCategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedCategory = categories.find(cat => cat.value === selectedValue);

  return (
    <div className="flex flex-col gap-8">
      <InputLabel label={label} htmlFor="sub-category" />
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger className="w-full flex items-center justify-between px-16 py-12 border border-black5 rounded-sm bg-transparent text-16 text-black7 focus:outline-none focus:ring-1 focus:ring-primary5 focus:border-transparent">
          {selectedCategory?.label || '카테고리를 선택해주세요.'}
          <ChevronDown className="size-16" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] max-h-[240px] overflow-y-auto">
          {categories.map(category => (
            <DropdownMenuItem
              key={category.value}
              className="w-570 px-16 py-12"
              onClick={() => {
                onChange(category.value);
                setIsOpen(false);
              }}
            >
              {category.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
