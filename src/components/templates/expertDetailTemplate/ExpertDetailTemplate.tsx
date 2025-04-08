import RequestOfferBox from '@/components/molecules/expertDetail/requestOfferBox/RequestOfferBox';
import ExpertIntroduction from '@/components/organisms/expertDetail/expertIntroduction/ExpertIntroduction';
import ExpertProfile from '@/components/organisms/expertDetail/expertProfile/ExpertProfile';
import { ReactElement } from 'react';

interface ExpertDetailTemplateProps {
  ExpertProfileComponent: ReactElement<typeof ExpertProfile>;
  ExpertIntroductionComponent: ReactElement<typeof ExpertIntroduction>;
  RequestOfferBoxComponent: ReactElement<typeof RequestOfferBox>;
}

export default function ExpertDetailTemplate({
  ExpertProfileComponent,
  ExpertIntroductionComponent,
  RequestOfferBoxComponent,
}: ExpertDetailTemplateProps) {
  return (
    <div className="w-953 relative ">
      <div className="w-628 h-fit flex flex-col gap-24">
        {/* 프로필 영역 */}
        {ExpertProfileComponent}
        {/* 전문가 정보 영역 */}
        {ExpertIntroductionComponent}
      </div>
      {/* 견적요청 버튼 */}
      <div className="absolute right-0 top-176">{RequestOfferBoxComponent}</div>
    </div>
  );
}
