import Link from 'next/link';
import Image from 'next/image';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { Member, UserRole } from '@/types/user';
import ProfileDropdown from '@/components/molecules/navigation/profileDropdown/ProfileDropdown';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 500);
  };

  if (isLoggedIn && member) {
    return (
      <div className="flex items-center gap-24">
        <Link href="/" className="block">
          <Image src="/icons/ChatBubbleLeftEllipsisLine.svg" alt="chat" width={26} height={22} />
        </Link>
        <Link href="/" className="block">
          <Image src="/icons/HeroiconsOutline.svg" alt="bell" width={20} height={20} />
        </Link>
        <div
          className="relative"
          onClick={() => {
            router.push('/mypage/myInfo');
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/profile" className="w-32 h-32 block rounded-full bg-black1 overflow-hidden">
            <Image
              src={member.profileImage || '/images/DefaultImage.png'}
              alt={member.name ?? 'user0123'}
              width={32}
              height={32}
              className="size-full object-cover"
            />
          </Link>
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
