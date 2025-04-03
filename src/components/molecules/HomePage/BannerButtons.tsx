'use client';

import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { useRouter } from 'next/navigation';

function BannerButtons() {
  const router = useRouter();

  return (
    <div className="flex gap-12">
      <StandardButton
        text="전문가 등록"
        state="default"
        onClick={() => {
          router.push('/expert/register');
        }}
        disabled={false}
      />
      <StandardButton text="견적요청" state="dark" onClick={() => {}} disabled={false} />
    </div>
  );
}

export default BannerButtons;
