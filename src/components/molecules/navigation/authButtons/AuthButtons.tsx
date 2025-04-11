import Link from 'next/link';
import Image from 'next/image';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { Member, UserRole } from '@/types/user';
import ProfileDropdown from '@/components/molecules/navigation/profileDropdown/ProfileDropdown';
import { useState, useRef, useEffect } from 'react';

interface AuthButtonsProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  member: Member | null;
  userRole?: UserRole;
}

export default function AuthButtons({
  isLoggedIn,
  onLoginClick,
  member,
  userRole = 'client',
}: AuthButtonsProps) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsReady(true); // 상태 복원 완료 플래그 설정
  }, []);

  // 외부 클릭 시 드롭다운 닫기 (모바일 환경용)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isReady) {
    return null; // 상태 복원 전에는 아무것도 렌더링하지 않음
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 300);
  };

  const handleClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  if (isLoggedIn && member) {
    return (
      <div className="relative flex items-center gap-32">
        <Link href={userRole === 'client' ? '/client/chat' : '/expert/chat'} className="block">
          <Image src="/icons/ChatBubbleLeftEllipsisLine.svg" alt="chat" width={26} height={22} />
        </Link>
        <button
          className="relative cursor-pointer"
          onClick={() => {
            alert('준비중인 기능입니다.');
          }}
        >
          <Image src="/icons/HeroiconsOutline.svg" alt="bell" width={20} height={20} />
        </button>
        <div
          ref={dropdownRef}
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={handleClick}
            className="w-40 h-40 block rounded-full bg-black1 overflow-hidden border border-black4"
            aria-expanded={isDropdownVisible}
            aria-haspopup="true"
          >
            <Image
              src={member.profileImage || '/images/DefaultImage.png'}
              alt={member.name ?? 'user0123'}
              width={40}
              height={40}
              className="size-full object-cover"
            />
          </button>
          {isDropdownVisible && <ProfileDropdown member={member} userRole={userRole} />}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-32">
      <Link href="/signup" className="block">
        <span>회원가입</span>
      </Link>
      <StandardButton text="로그인" state="blue" onClick={onLoginClick} disabled={false} />
    </div>
  );
}
