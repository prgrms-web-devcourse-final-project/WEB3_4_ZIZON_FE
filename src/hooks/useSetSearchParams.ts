import { useRouter, useSearchParams } from 'next/navigation';

// 현재 URL의 쿼리 파라미터를 설정하는 훅
const useSetSearchParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // 쿼리 파라미터를 업데이트하는 함수
  const setSearchParams = (key: string, value: string, url: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value); // 값이 있으면 설정
    } else {
      params.delete(key); // 값이 비어 있으면 삭제
    }
    router.push(`${url}?${params.toString()}`); // 업데이트된 URL로 이동
  };

  return setSearchParams; // 업데이트 함수를 반환
};

export default useSetSearchParams;
