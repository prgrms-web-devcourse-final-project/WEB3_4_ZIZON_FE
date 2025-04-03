import MakeOfferTemplate from '@/components/templates/makeOfferTemplate/MakeOfferTemplate';

// 요청서(Project)를 보고 견적서(Offer)를 작성하는 페이지
export default function MakeOfferPage() {
  // TODO : 요청서 써머리 데이터 요청

  const PROJECT_SUMMARY = {
    clientProfile: '/images/DefaultImage.png',
    clientName: '홍길동',
    location: '서울특별시 강남구 역삼동',
    projectName: '과외',
    description: {
      '어떤 도움이 필요한가요': '과외',
      '과외생은 어디에 속해있나요': '고등학교 1학년',
      '어떤 교과과목 인가요': '한국사',
    },
  };

  return (
    <div className="px-520 mt-46">
      <MakeOfferTemplate projectSummary={PROJECT_SUMMARY} />
    </div>
  );
}
