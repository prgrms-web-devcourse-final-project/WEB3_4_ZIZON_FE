import ExpertInfoCard from '@/components/molecules/expert/expertInfoCard/ExpertInfoCard';
import RequestOfferBox from '@/components/molecules/expertDetail/requestOfferBox/RequestOfferBox';
import ExpertIntroduction from '@/components/organisms/expertDetail/expertIntroduction/ExpertIntroduction';
import ExpertProfile from '@/components/organisms/expertDetail/expertProfile/ExpertProfile';
import ExpertDetailTemplate from '@/components/templates/expertDetailTemplate/ExpertDetailTemplate';

export default function ExpertIdPage() {
  //여기서 전문가 정보 호출

  return (
    <div className="mt-78 flex justify-center">
      <ExpertDetailTemplate
        ExpertProfileComponent={
          <ExpertProfile
            ExpertInfoCardComponent={
              <ExpertInfoCard
                infoArray={[
                  { content: '홍길동', title: '이름' },
                  { content: '개발자', title: '직업' },
                  { content: '5년', title: '경력' },
                ]}
                type="large"
              />
            }
            categoryId={1000}
            introduction="단순한 이사가 아닌, 진짜 이사가 어떤 것인지 보여드립니다."
            name="이상훈"
            profileImageUrl="/images/DefaultImage.png"
          />
        }
        ExpertIntroductionComponent={
          <ExpertIntroduction
            ReviewList={[
              {
                content:
                  '이사 서비스가 정말 좋았습니다. 꼼꼼하게 포장해주시고, 시간도 잘 지켜주셨어요.',
                created_at: new Date('2025-03-31T00:00:00.000Z'),
                name: '김민수',
                profile_image: '/images/DefaultImage.png',
                rating: 5,
                review_type: '이사/청소',
              },
            ]}
            career_years={13}
            certification={['청소사업자 등록증', '청소전문가']}
            introduction="대학입시·논술·국영수 과외 전문가 이수정입니다."
            major_category="이사/청소"
            sub_category="이사"
          />
        }
        RequestOfferBoxComponent={<RequestOfferBox expertId="expertId" name="이수정" />}
      />
    </div>
  );
}
