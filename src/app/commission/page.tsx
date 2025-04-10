'use client'
import React from 'react';
import CommissionTemplate from '@/components/templates/commissionTemplate/CommissionTemplate';
import useInfiniteScrolling from '@/hooks/useInfiniteScrolling';
import { CommissionListItemProps } from '@/components/molecules/commissionListItem/ComissionListItem';
import getProjectsAll from '@/apis/project/getProjectsAll';

export default function CommissionPage() {
  const [searchBar, setSearchBar] = React.useState<string>('');
  const [scrollHookRef, setScrollHookRef] = React.useState<null | HTMLDivElement>(null);
  const [commissionList, setCommissionList] = React.useState<CommissionListItemProps[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const [category, setCategory] = React.useState<number>(0);

  useInfiniteScrolling({
    scrollHookRef,
    fetchMore: async () => {
      // 데이터 조회할 곳
      const date = await getProjectsAll({page});
      setPage(page + 1);
      setCommissionList([...commissionList, ...date.projects]);
      console.log(date);
    },
    hasMore: true,
  });
  const categoryClickHandler = (value: number) => {
    setCategory(value);
    console.log(value);
  }
  const onResetHandler = () => {
    setCategory(0);
    console.log(0);
  }
  return (
    <CommissionTemplate
      value={searchBar}
      onChange={setSearchBar}
      onReset={onResetHandler}
      commissionList={commissionList}
      category={category}
      onCategoryClick={categoryClickHandler}
      ScrollHookRef={<div className="bg-red h-1 w-953 mt-100" ref={(ref) => setScrollHookRef(ref)}/>}
    />
  );
}