'use client';

import React from 'react';
import VerticalTabTitle from '@/components/atoms/tabs/verticalTabTitle/VerticalTabTitle';
import VerticalTabItem from '@/components/atoms/tabs/verticalTabItem/VerticalTabItem';
import { usePathname, useRouter } from 'next/navigation';

interface UserStateTabContainerProps {
  isState: 'client' | 'expert';
}

function UserStateTabContainer({ isState }: UserStateTabContainerProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleTabClick = (name: string) => {
    router.push(`/mypage/${name}`);
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <VerticalTabTitle text="내 정보" size="small" />
      <VerticalTabItem
        name="myInfo"
        isFocused={pathname === '/mypage/myInfo'}
        text="내 정보"
        onClick={handleTabClick}
        size="small"
      />
      <VerticalTabItem
        name="myProject"
        isFocused={pathname === '/mypage/myProject'}
        text="내가 구매한 프로젝트"
        onClick={handleTabClick}
        size="small"
      />
      <VerticalTabItem
        name="boughtProduct"
        isFocused={pathname === '/mypage/boughtProduct'}
        text="구매한 상품"
        onClick={handleTabClick}
        size="small"
      />
      {isState === 'expert' && (
        <>
          <VerticalTabTitle text="전문가 정보" size="small" />
          <VerticalTabItem
            name="expertInfo"
            isFocused={pathname === '/mypage/expertInfo'}
            text="전문가 정보"
            onClick={handleTabClick}
            size="small"
          />
          <VerticalTabItem
            name="serviceStatus"
            isFocused={pathname === '/mypage/serviceStatus'}
            text="서비스 현황"
            onClick={handleTabClick}
            size="small"
          />
          <VerticalTabItem
            name="saleProduct"
            isFocused={pathname === '/mypage/saleProduct'}
            text="판매중인 상품"
            onClick={handleTabClick}
            size="small"
          />
        </>
      )}
    </div>
  );
}

export default UserStateTabContainer;
