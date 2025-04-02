'use client';

import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';

function BannerButtons() {
  return (
    <div className="flex gap-12">
      <StandardButton text="전문가 등록" state="default" onClick={() => {}} disabled={false} />
      <StandardButton text="견적요청" state="dark" onClick={() => {}} disabled={false} />
    </div>
  );
}

export default BannerButtons;
