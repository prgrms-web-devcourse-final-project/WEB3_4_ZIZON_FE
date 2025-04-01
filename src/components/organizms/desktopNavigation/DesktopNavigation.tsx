'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import StandardButton from '@/components/atoms/standardButton/StandardButton';

function DesktopNavigation() {
  const router = useRouter();

  return (
    <header className="w-full px-320 py-20 flex justify-between items-center">
      <div className="flex items-center gap-40">
        {/* 로고 */}
        <h1 className="w-61 h-32">
          <Link href="/" className="block">
            <Image src="/logo/dopdang-logo-kr.svg" alt="dopdang-logo" width={61} height={32} />
          </Link>
        </h1>

        {/* 네비게이션 */}
        <nav className="flex items-center ">
          <ul className="flex items-center gap-24">
            <li>
              <Link href="/" className="block">
                <span>견적요청</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="block">
                <span>전문가찾기</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="block">
                <span>프로젝트찾기</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="block">
                <span>스토어</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="block">
                <span>커뮤니티</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* 로그인 전 */}
      <div className="flex items-center gap-32">
        <Link href="/" className="block">
          <span>회원가입</span>
        </Link>
        <StandardButton
          text="로그인"
          state="blue"
          onClick={() => router.push('/')}
          disabled={false}
        />
      </div>

      {/* 로그인 시 */}
      {/* <div className="flex items-center gap-24">
        <Link href="/client/chat" className="block">
          <Image src="/icons/ChatBubbleLeftEllipsisLine.svg" alt="chat" width={26} height={22} />
        </Link>
        <Link href="/client/chat" className="block">
          <Image src="/icons/HeroiconsOutline.svg" alt="bell" width={20} height={20} />
        </Link>
        <Link
          href="/client/profile"
          className="w-32 h-32 block rounded-full bg-black1 overflow-hidden"
        >
          <Image
            src="/images/DefaultImage.png"
            alt="user"
            width={32}
            height={32}
            className="size-full object-cover"
          />
        </Link>
      </div> */}
    </header>
  );
}

export default DesktopNavigation;
