import React from 'react';

type Props = {
    scrollHookRef: HTMLDivElement | null;
    fetchMore: () => void;
    hasMore: boolean;
};

// "IntersectionObserver"의 옵션들
const options: IntersectionObserverInit = {
  threshold: 0.5,
  rootMargin: '0px 0px 200px 0px',
};

/**
 * 무한 스크롤링 적용 훅
 * @param observerRef 감시할 element ref
 * @param fetchMore 추가 패치를 실행할 함수
 * @param hasMore 더 패치할 수 있는지 여부
 * @returns
 */
const useInfiniteScrolling = ({ scrollHookRef, fetchMore, hasMore }: Props) => {

    // 뷰포트 내에 감시하는 태그가 들어왔다면 패치
    const onScroll: IntersectionObserverCallback = React.useCallback(
        (entries, ) => {
            if (!entries[0].isIntersecting) return;

            // "redux"를 쓴다면 () => { dispatch(/* */); } 형태로 사용
            fetchMore();
        },
        [fetchMore]
    );

    // observer 등록 ( 해당 태그가 뷰포트에 들어오면 게시글 추가 패치 실행 )
    React.useEffect(() => {
        if (!scrollHookRef) return;

        // 콜백함수와 옵션값 지정
        const observer = new IntersectionObserver(onScroll, options);
        // 특정 요소 감시 시작
        observer.observe(scrollHookRef);

        // 더 가져올 게시글이 존재하지 않는다면 패치 중지
        if (!hasMore) observer.unobserve(scrollHookRef);

        // 감시 종료
        return () => observer.disconnect();
    }, [scrollHookRef, onScroll, hasMore]);

    return;
};

export default useInfiniteScrolling;