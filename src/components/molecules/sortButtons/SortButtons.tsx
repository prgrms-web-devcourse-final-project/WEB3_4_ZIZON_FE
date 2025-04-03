'use client';

import TextButton from '@/components/atoms/buttons/textButton/TextButton';
import { useRouter, useSearchParams } from 'next/navigation';

export type SortType = 'latest' | 'rating';

export default function SortButtons() {
  const searchParams = useSearchParams();
  const sort = searchParams.get('sort');
  const router = useRouter();

  const handleParameterChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', value);
    router.push(`/expert?${params.toString()}`);
  };

  return (
    <div className="flex gap-12">
      <TextButton
        text="최신 업데이트 순"
        onClick={() => {
          handleParameterChange('latest');
        }}
        type={sort === 'latest' ? 'dark' : 'normal'}
      />
      <TextButton
        text="평점 높은 순"
        onClick={() => {
          handleParameterChange('rating');
        }}
        type={sort === 'rating' ? 'dark' : 'normal'}
      />
    </div>
  );
}
