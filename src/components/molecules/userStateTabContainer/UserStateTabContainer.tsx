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
    router.push(`/myPage/${name}`);
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <VerticalTabTitle text="내 정보" size="small" />
      <VerticalTabItem
        name="myInfo"
        isFocused={pathname === '/myPage/myInfo'}
        text="내 정보"
        onClick={handleTabClick}
        size="small"
      />
      <VerticalTabItem
        name="myProject"
        isFocused={pathname === '/myPage/myProject'}
        text="내가 구매한 프로젝트"
        onClick={handleTabClick}
        size="small"
      />
      <VerticalTabItem
        name="boughtProduct"
        isFocused={pathname === '/myPage/boughtProduct'}
        text="구매한 상품"
        onClick={handleTabClick}
        size="small"
      />
      <VerticalTabItem
        name="myReview"
        isFocused={pathname === '/myPage/myReview'}
        text="내가 쓴 리뷰"
        onClick={handleTabClick}
        size="small"
      />

      {isState === 'expert' && (
        <>
          <VerticalTabTitle text="전문가 정보" size="small" />
          <VerticalTabItem
            name="expertInfo"
            isFocused={pathname === '/myPage/expertInfo'}
            text="전문가 정보"
            onClick={handleTabClick}
            size="small"
          />
          <VerticalTabItem
            name="serviceStatus"
            isFocused={pathname === '/myPage/serviceStatus'}
            text="서비스 현황"
            onClick={handleTabClick}
            size="small"
          />
          <VerticalTabItem
            name="saleProduct"
            isFocused={pathname === '/myPage/saleProduct'}
            text="판매중인 상품"
            onClick={handleTabClick}
            size="small"
          />
          <VerticalTabItem
            name="receivedReview"
            isFocused={pathname === '/myPage/receivedReview'}
            text="내가 받은 리뷰"
            onClick={handleTabClick}
            size="small"
          />
        </>
      )}
    </div>
  );
}

export default UserStateTabContainer;
