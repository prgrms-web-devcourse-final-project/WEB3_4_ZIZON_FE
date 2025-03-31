import React from 'react';
import VerticalTabTitle from '@/components/atoms/verticalTabTitle/VerticalTabTitle';
import VerticalTabItem from '@/components/atoms/verticalTabItem/VerticalTabItem';
import { useRouter } from 'next/router';

type TabManager = "myInfo" | "expertInfo" | "myProject" | "boughtProduct" | "saleProject";
interface UserStateTabContainerProps {
  isState: boolean;
  tabManager: TabManager;
}
function UserStateTabContainer({isState, tabManager}: UserStateTabContainerProps) {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 gap-y-8 max-w-full">
      <VerticalTabTitle text={"내 정보 관리"} size={"large"} />
      <VerticalTabItem name={"내 정보"} isFocused={tabManager==="myInfo"} text={"내 정보"} onClick={() => {
        router.push({
          pathname:`/mypage/${isState? "expert": "client"}/setting`
        })}} size={"large"} />
      <VerticalTabItem name={"전문가 정보"} isFocused={tabManager==="expertInfo"} text={"전문가 정보"} onClick={() => {
        router.push({
          pathname:`/myPage/${isState? "expert": "client"}/setting`
        })}} size={"large"} />
      {isState ? <div className="grid grid-cols-1 gap-y-8 max-w-full">
          <VerticalTabTitle text={"판매 관리"} size={"large"} />
          <VerticalTabItem name={"내 프로젝트"} isFocused={tabManager === "myProject"} text={"내 프로젝트"} onClick={() => {
          }} size={"large"} />
          <VerticalTabItem name={"구매한 상품"} isFocused={tabManager === "saleProject"} text={"판매중인 상품"} onClick={() => {
          }} size={"large"} />
        </div>
        :
        <div className="grid grid-cols-1 gap-y-8 max-w-full">
          <VerticalTabTitle text={"구매 관리"} size={"large"} />
          <VerticalTabItem name={"내 프로젝트"} isFocused={tabManager === "myProject"} text={"내 프로젝트"} onClick={() => {
          }} size={"large"} />
          <VerticalTabItem name={"구매한 상품"} isFocused={tabManager === "boughtProduct"} text={"구매한 상품"} onClick={() => {
          }} size={"large"} />
        </div>}
    </div>
  );
}

export default UserStateTabContainer;