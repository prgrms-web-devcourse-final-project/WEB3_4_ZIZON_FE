'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useUserStore } from '@/store/userStore';
import { getMyReviews } from '@/apis/review/getMyReviews';
import ReviewItem from '@/components/molecules/reviewItem/ReviewItem';
import EmptyState from '@/components/molecules/emptyState/EmptyState';
import LoadingSpinner from '@/components/atoms/loadingSpinner/LoadingSpinner';
import ErrorState from '@/components/molecules/errorState/ErrorState';

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
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length;
        return nextPage;
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

  // 리뷰 데이터 추출
  const reviews = data?.pages.flatMap(page => page) || [];
  const isEmpty = !isLoading && reviews.length === 0;

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
          {reviews.map(review => (
            <ReviewItem
              key={review.projectId}
              profile_image="/images/DefaultImage.png" // TODO: 프로필 이미지 추가 필요
              name="내 리뷰" // TODO: 사용자 이름 추가 필요
              content={review.content}
              review_type={`프로젝트 ${review.projectId}`} // TODO: 프로젝트 제목 추가 필요
              created_at={new Date()} // TODO: 생성일 추가 필요
              rating={review.score}
            />
          ))}

          {/* 더 보기 버튼 */}
          {hasNextPage && (
            <div className="flex justify-center py-8">
              <button
                onClick={handleLoadMore}
                disabled={isFetchingNextPage}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
              >
                {isFetchingNextPage ? '로딩 중...' : '더 보기'}
              </button>
            </div>
          )}

          {/* 더 이상 데이터가 없을 때 표시 */}
          {!hasNextPage && reviews.length > 0 && (
            <div className="flex justify-center py-8">
              <p className="text-14 text-black6">더 이상 리뷰가 없습니다.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
