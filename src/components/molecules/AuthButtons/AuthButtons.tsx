'use client';

import Link from 'next/link';
import Image from 'next/image';
import StandardButton from '@/components/atoms/standardButton/StandardButton';

interface AuthButtonsProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
}

export default function AuthButtons({ isLoggedIn, onLoginClick }: AuthButtonsProps) {
  if (isLoggedIn) {
    return (
      <div className="flex items-center gap-24">
        <Link href="/" className="block">
          <Image src="/icons/ChatBubbleLeftEllipsisLine.svg" alt="chat" width={26} height={22} />
        </Link>
        <Link href="/" className="block">
          <Image src="/icons/HeroiconsOutline.svg" alt="bell" width={20} height={20} />
        </Link>
        <Link href="/" className="w-32 h-32 block rounded-full bg-black1 overflow-hidden">
          <Image
            src="/images/DefaultImage.png"
            alt="user"
            width={32}
            height={32}
            className="size-full object-cover"
          />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-32">
      <Link href="/" className="block">
        <span>회원가입</span>
      </Link>
      <StandardButton text="로그인" state="blue" onClick={onLoginClick} disabled={false} />
    </div>
  );
}
