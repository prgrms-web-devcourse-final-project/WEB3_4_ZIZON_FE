'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useInfiniteQuery, useQueries } from '@tanstack/react-query';
import { useUserStore } from '@/store/userStore';
import { getMyReviews } from '@/apis/review/getMyReviews';
import { getProjectById } from '@/apis/project/getProjectById';
import ReviewItem from '@/components/molecules/reviewItem/ReviewItem';
import EmptyState from '@/components/molecules/emptyState/EmptyState';
import LoadingSpinner from '@/components/atoms/loadingSpinner/LoadingSpinner';
import ErrorState from '@/components/molecules/errorState/ErrorState';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { Project } from '@/types/project';

const PAGE_SIZE = 10;

export default function MyReviewPage() {
  const router = useRouter();
  const { member } = useUserStore();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // 로그인 체크
  useEffect(() => {
    if (!member) {
      router.push('/login');
    }
  }, [member, router]);

  // 무한 스크롤 쿼리
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ['myReviews'],
      queryFn: async ({ pageParam = 0 }) => {
        try {
          return await getMyReviews({
            page: pageParam,
            size: PAGE_SIZE,
          });
        } catch (err) {
          // 에러 메시지 설정
          if (err instanceof Error) {
            setErrorMessage(err.message);
          } else {
            setErrorMessage('리뷰를 불러오는 중 오류가 발생했습니다');
          }
          throw err;
        }
      },
      getNextPageParam: lastPage => {
        // hasNext가 true이면 다음 페이지가 있음
        if (lastPage.hasNext) {
          return lastPage.currentPage + 1;
        }
        return undefined;
      },
      enabled: !!member,
      initialPageParam: 0,
      retry: 1, // 재시도 횟수 제한
    });

  // 초기 로딩 상태 처리
  useEffect(() => {
    if (!isLoading) {
      setIsInitialLoad(false);
    }
  }, [isLoading]);

  // 더 보기 버튼 클릭 핸들러
  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  // 페이지 새로고침 핸들러
  const handleRetry = () => {
    router.refresh();
  };

  // 리뷰 데이터 추출
  const reviews = data?.pages.flatMap(page => page.reviews) || [];
  const isEmpty = !isLoading && reviews.length === 0;

  // 프로젝트 정보 가져오기
  const projectQueries = useQueries({
    queries: reviews.map(review => ({
      queryKey: ['project', review.projectId],
      queryFn: () => getProjectById(review.projectId),
      enabled: !!review.projectId,
    })),
  });

  // 프로젝트 정보 매핑
  const projectMap = new Map<number, Project>();
  projectQueries.forEach((query, index) => {
    if (query.data && reviews[index]) {
      projectMap.set(reviews[index].projectId, query.data);
    }
  });

  // 에러 처리
  if (isError) {
    return (
      <div className="w-full max-w-1200 mx-auto px-20 py-40">
        <h1 className="text-24 font-bold mb-40">내가 쓴 리뷰</h1>
        <ErrorState
          title="리뷰를 불러오는 중 오류가 발생했습니다"
          message={errorMessage || '잠시 후 다시 시도해주세요'}
          onRetry={handleRetry}
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-1200 mx-auto px-20 py-40">
      <h1 className="text-24 font-bold mb-40">내가 쓴 리뷰</h1>

      {isInitialLoad ? (
        <div className="flex justify-center items-center h-200">
          <LoadingSpinner />
        </div>
      ) : isEmpty ? (
        <EmptyState
          title="작성한 리뷰가 없습니다"
          description="프로젝트를 완료하고 리뷰를 작성해보세요"
        />
      ) : (
        <div className="flex flex-col gap-32">
          {reviews.map((review, index) => {
            const project = projectMap.get(review.projectId);
            return (
              <ReviewItem
                key={`review-${review.projectId}-${index}`}
                profile_image={member?.profileImage}
                name={member?.name}
                content={review.content}
                review_type={project ? project.title : `프로젝트 ${review.projectId}`}
                created_at={new Date()} // TODO: 생성일 추가 필요
                rating={review.score}
              />
            );
          })}

          {/* 더 보기 버튼 */}
          {hasNextPage && (
            <div className="flex justify-center py-8">
              <StandardButton
                text={isFetchingNextPage ? '로딩 중...' : '더 보기'}
                onClick={handleLoadMore}
                disabled={isFetchingNextPage}
                state="default"
                size="fit"
              />
            </div>
          )}

          {/* 더 이상 데이터가 없을 때 표시 */}
          {!hasNextPage && reviews.length > 0 && (
            <EmptyState title="더 이상 리뷰가 없습니다" description="모든 리뷰를 확인하셨습니다" />
          )}
        </div>
      )}
    </div>
  );
}
