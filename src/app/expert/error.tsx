'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 ">
      <div className="w-500 bg-white shadow-md rounded-lg py-30 px-30 max-w-md text-center flex flex-col gap-20">
        <h1 className="text-2xl font-bold text-redWarning mb-4">오류가 발생했습니다.</h1>
        <p className="text-gray-600 mb-6">
          요청을 처리하는 중 문제가 발생했습니다.
          <br /> 잠시 후 다시 시도해주세요.
        </p>
        <button
          onClick={() => {
            startTransition(() => {
              router.refresh();
              reset();
            });
          }}
          className="px-16 py-12 bg-primary2 text-white font-semibold rounded-lg hover:bg-primary4 transition duration-300"
        >
          다시 시도하기
        </button>
      </div>
    </div>
  );
}
