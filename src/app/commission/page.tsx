'use client';
import React, { useEffect } from 'react';
import CommissionTemplate from '@/components/templates/commissionTemplate/CommissionTemplate';
import useInfiniteScrolling from '@/hooks/useInfiniteScrolling';
import getProjectsAll, { ProjectType } from '@/apis/project/getProjectsAll';

export default function CommissionPage() {
  const [searchBar, setSearchBar] = React.useState<string>('');
  const [scrollHookRef, setScrollHookRef] = React.useState<null | HTMLDivElement>(null);
  const [commissionList, setCommissionList] = React.useState<ProjectType[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const [category, setCategory] = React.useState<number>(0);
  const [hasMore, setHasMore] = React.useState(true);

  const fetchProjects = async (pageNum: number, reset = false) => {
    const data = await getProjectsAll({ page: pageNum });
    if (data.projects.length === 0) {
      setHasMore(false);
      return;
    }
    setCommissionList(prev => (reset ? data.projects : [...prev, ...data.projects]));
    setPage(prev => prev + 1);
  };

  useInfiniteScrolling({
    scrollHookRef,
    fetchMore: () => fetchProjects(page),
    hasMore,
  });

  useEffect(() => {
    // 카테고리 변경 시 새로 불러오기
    setPage(1);
    setHasMore(true);
    fetchProjects(1, true);
  }, [category]);

  const categoryClickHandler = (value: number) => {
    setCategory(value);
  };

  const onResetHandler = () => {
    setCategory(0);
  };

  return (
    <CommissionTemplate
      value={searchBar}
      onChange={setSearchBar}
      onReset={onResetHandler}
      commissionList={commissionList}
      category={category}
      onCategoryClick={categoryClickHandler}
      ScrollHookRef={<div className="bg-red h-1 w-740 mt-100" ref={ref => setScrollHookRef(ref)} />}
    />
  );
}
