'use client';

import React, { useState, useMemo } from 'react';
import SellStateTabContainer from '@/components/molecules/sellStateTabContainer/SellStateTabContainer';
import OrderList from '@/components/organisms/orderList/OrderList';
import getMyProjects from '@/apis/project/getMyProjects';
import { Project, ProjectStatus } from '@/types/project';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '@/components/atoms/loadingSpinner/LoadingSpinner';
import ErrorState from '@/components/molecules/errorState/ErrorState';
import EmptyState from '@/components/molecules/emptyState/EmptyState';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';

// Project를 Order 형식으로 변환하는 함수
const convertProjectToOrder = (project: Project) => {
  return {
    id: project.id,
    imageUrl: project.thumbnailImageUrl || '/images/defaultImage.png',
    price: project.budget,
    sellState: project.status,
    category: project.title,
  };
};

export default function MyProjectPage() {
  const [selectedState, setSelectedState] = useState<ProjectStatus | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;

  // useQuery를 사용하여 프로젝트 데이터 가져오기
  const { data, isLoading, isError } = useQuery({
    queryKey: ['myProjects', currentPage],
    queryFn: async () => {
      return getMyProjects({
        page: currentPage,
        size: pageSize,
        sort: [],
      });
    },
  });

  // 모든 프로젝트 데이터 추출
  const allProjects = useMemo(() => {
    if (!data) return [];
    return data.projects;
  }, [data]);

  // 필터링된 프로젝트
  const filteredProjects = useMemo(() => {
    if (!selectedState) return allProjects;
    return allProjects.filter(project => project.status === selectedState);
  }, [allProjects, selectedState]);

  // 상태별 프로젝트 수 계산
  const counts = useMemo(() => {
    return {
      inProgress: allProjects.filter(
        project => project.status === 'OPEN' || project.status === 'IN_PROGRESS',
      ).length,
      cancelled: allProjects.filter(project => project.status === 'CANCELLED').length,
      completed: allProjects.filter(project => project.status === 'COMPLETED').length,
    };
  }, [allProjects]);

  // 문의하기 버튼 클릭 핸들러
  const handleAskButtonClick = (orderId: string) => {
    console.log('문의하기 클릭:', orderId);
    // 문의하기 기능 구현
  };

  // 상태 선택 핸들러
  const handleStateSelect = (state: ProjectStatus) => {
    setSelectedState(prev => (prev === state ? null : state));
  };

  // 다음 페이지로 이동
  const handleNextPage = () => {
    if (data?.hasNext) {
      setCurrentPage(prev => prev + 1);
    }
  };

  // Order 형식으로 변환된 프로젝트 목록
  const orders = useMemo(() => {
    return filteredProjects.map(convertProjectToOrder);
  }, [filteredProjects]);

  // 로딩 중 표시
  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center py-40">
        <LoadingSpinner />
      </div>
    );
  }

  // 에러 표시
  if (isError) {
    return (
      <div className="w-full flex justify-center items-center py-40">
        <ErrorState
          title="데이터를 불러오는 중 오류가 발생했습니다"
          message="프로젝트 목록을 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요."
          onRetry={() => window.location.reload()}
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1 className="text-20 font-semibold mb-24">내가 구매한 프로젝트</h1>
      <SellStateTabContainer
        counts={counts}
        selectedState={selectedState}
        onStateSelect={handleStateSelect}
      />
      <div className="mt-24">
        {allProjects.length === 0 ? (
          <div className="flex justify-center py-8">
            <EmptyState
              title="아직 구매한 프로젝트가 없습니다"
              description="프로젝트를 구매하면 여기서 확인할 수 있습니다"
            />
          </div>
        ) : (
          <>
            <OrderList orders={orders} onAskButtonClick={handleAskButtonClick} />

            {/* 더 보기 버튼 */}
            {data?.hasNext && (
              <div className="flex justify-center py-24">
                <StandardButton
                  text="더 보기"
                  onClick={handleNextPage}
                  disabled={isLoading}
                  state="dark"
                />
              </div>
            )}

            {/* 더 이상 데이터가 없을 때 표시 */}
            {!data?.hasNext && allProjects.length > 0 && (
              <div className="flex justify-center py-24">
                <EmptyState
                  title="더 이상 프로젝트가 없습니다"
                  description="새로운 프로젝트가 추가되면 여기서 확인할 수 있습니다"
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
