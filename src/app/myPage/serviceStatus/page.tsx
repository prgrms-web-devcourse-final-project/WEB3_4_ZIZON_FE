'use client';

import React, { useState, useMemo } from 'react';
import SellStateTabContainer from '@/components/molecules/sellStateTabContainer/SellStateTabContainer';
import OrderList from '@/components/organisms/orderList/OrderList';
import NumberReadability from '@/components/atoms/texts/numberReadability/NumberReadability';
import { getMyContracts } from '@/apis/contract/getMyContracts';
import { Contract } from '@/types/contract';
import { ContractStatus } from '@/types/contract';
import { useInfiniteQuery } from '@tanstack/react-query';
import LoadingSpinner from '@/components/atoms/loadingSpinner/LoadingSpinner';
import ErrorState from '@/components/molecules/errorState/ErrorState';
import EmptyState from '@/components/molecules/emptyState/EmptyState';

// Contract를 Order 형식으로 변환하는 함수
const convertContractToOrder = (contract: Contract) => {
  return {
    id: contract.contractId.toString(),
    imageUrl: '/images/defaultImage.png', // 기본 이미지 사용
    price: contract.price,
    sellState: contract.status,
    category: contract.projectTitle,
  };
};

export default function ServiceStatusPage() {
  const [selectedState, setSelectedState] = useState<ContractStatus | null>(null);

  // useInfiniteQuery를 사용하여 계약 데이터 가져오기
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ['myContracts'],
      queryFn: async ({ pageParam = 0 }) => {
        return getMyContracts({
          page: pageParam,
          size: 10,
        });
      },
      getNextPageParam: (lastPage, allPages) => {
        // 다음 페이지가 있는지 확인
        if (lastPage.length < 10) return undefined;
        return allPages.length;
      },
      initialPageParam: 0,
    });

  // 모든 계약 데이터 추출
  const allContracts = useMemo(() => {
    if (!data) return [];
    return data.pages.flatMap(page => page);
  }, [data]);

  // 필터링된 계약
  const filteredContracts = useMemo(() => {
    if (!selectedState) return allContracts;
    return allContracts.filter(contract => contract.status === selectedState);
  }, [allContracts, selectedState]);

  // 상태별 계약 수 계산
  const counts = useMemo(() => {
    return {
      inProgress: allContracts.filter(contract => contract.status === 'IN_PROGRESS').length,
      cancelled: allContracts.filter(contract => contract.status === 'CANCELLED').length,
      completed: allContracts.filter(contract => contract.status === 'COMPLETED').length,
    };
  }, [allContracts]);

  // 총 수익 계산
  const totalRevenue = useMemo(() => {
    return allContracts
      .filter(contract => contract.status === 'COMPLETED')
      .reduce((sum, contract) => sum + contract.price, 0);
  }, [allContracts]);

  // 문의하기 버튼 클릭 핸들러
  const handleAskButtonClick = (orderId: string) => {
    console.log('문의하기 클릭:', orderId);
    // 문의하기 기능 구현
  };

  // 상태 선택 핸들러
  const handleStateSelect = (state: ContractStatus) => {
    setSelectedState(prev => (prev === state ? null : state));
  };

  // 더 보기 버튼 클릭 핸들러
  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  // Order 형식으로 변환된 계약 목록
  const orders = useMemo(() => {
    return filteredContracts.map(convertContractToOrder);
  }, [filteredContracts]);

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
          message="계약 목록을 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요."
          onRetry={() => window.location.reload()}
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <h3 className="text-20 font-semibold mb-24">서비스 현황</h3>

      <SellStateTabContainer
        counts={counts}
        selectedState={selectedState}
        onStateSelect={handleStateSelect}
        isExpertView={true}
      />
      <div className="flex items-center justify-end gap-20">
        <span className="text-16 text-black6">총 수익</span>
        <span className="text-24 font-bold text-primary">
          <NumberReadability value={totalRevenue} />원
        </span>
      </div>
      <div className="mt-24">
        {allContracts.length === 0 ? (
          <div className="flex justify-center py-8">
            <EmptyState
              title="아직 진행 중인 서비스가 없습니다"
              description="서비스를 제공하면 여기서 확인할 수 있습니다"
            />
          </div>
        ) : (
          <>
            <OrderList
              orders={orders}
              onAskButtonClick={handleAskButtonClick}
              isExpertView={true}
            />

            {/* 더 보기 버튼 */}
            {hasNextPage && (
              <div className="flex justify-center py-8">
                <button
                  onClick={handleLoadMore}
                  disabled={isFetchingNextPage}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50 flex items-center gap-2"
                >
                  {isFetchingNextPage ? (
                    <>
                      <LoadingSpinner />
                      <span>로딩 중...</span>
                    </>
                  ) : (
                    '더 보기'
                  )}
                </button>
              </div>
            )}

            {/* 더 이상 데이터가 없을 때 표시 */}
            {!hasNextPage && allContracts.length > 0 && (
              <div className="flex justify-center py-24">
                <EmptyState
                  title="더 이상 서비스가 없습니다"
                  description="새로운 서비스가 추가되면 여기서 확인할 수 있습니다"
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
