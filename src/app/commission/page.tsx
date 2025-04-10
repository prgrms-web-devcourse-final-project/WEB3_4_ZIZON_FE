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

  useInfiniteScrolling({
    scrollHookRef,
    fetchMore: async () => {
      // 데이터 조회할 곳
      const date = await getProjectsAll({page: 1});
      setPage(page + 1);
      setCommissionList([...commissionList, ...date.projects]);
    },
    hasMore: true,
  });
  return (
    <CommissionTemplate
      value={searchBar}
      onChange={setSearchBar}
      onReset={() => {}}
      commissionList={commissionList}
      ScrollHookRef={<div className="bg-red h-1 w-953 mt-100" ref={(ref) => setScrollHookRef(ref)}/>}
    />
  );
}