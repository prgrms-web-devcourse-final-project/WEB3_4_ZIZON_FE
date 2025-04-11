'use client';

import { Member, UserRole } from '@/types/user';
import { useUserStore } from '@/store/userStore';
import SmallTag from '@/components/atoms/tags/smallTag/SmallTag';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProfileDropdownProps {
  member: Member;
  userRole: UserRole;
}

export default function ProfileDropdown({ member, userRole }: ProfileDropdownProps) {
  const router = useRouter();
  const logout = useUserStore(state => state.logout);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const userRoleText = userRole === 'client' ? '의뢰인' : '전문가';

  return (
    <div className="absolute right-0 top-full mt-8 min-w-280 bg-white pt-24 rounded-8 shadow-lg overflow-hidden z-10">
      <div className="w-full flex items-center justify-between px-28">
        <span className="text-20 font-bold">{member.name || '장난스러운짱구02'}</span>
        <SmallTag text={userRoleText} theme={userRole === 'client' ? 'default' : 'lightBlue'} />
      </div>
      {userRole === 'client' ? (
        <div className="px-28 py-32 flex flex-col gap-24 font-regular">
          <Link href="/myPage/myInfo">내 정보</Link>
          <Link href="/myPage/myProject">내가 구매한 프로젝트</Link>
          <Link href="/myPage/boughtProduct">구매한 상품</Link>
          <Link href="/myPage/myReview">내가 쓴 리뷰</Link>
        </div>
      ) : (
        <div className="px-28 py-32 flex flex-col gap-24 font-regular">
          <Link href="/myPage/expertInfo">전문가 정보</Link>
          <Link href="/myPage/serviceStatus">서비스 현황</Link>
          <Link href="/myPage/saleProduct">판매중인 상품</Link>
          <Link href="/myPage/receivedReview">내가 받은 리뷰</Link>
        </div>
      )}
      <button
        className="w-full px-20 py-16 bg-black3 hover:bg-black4 font-regular cursor-pointer"
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </div>
  );
}
