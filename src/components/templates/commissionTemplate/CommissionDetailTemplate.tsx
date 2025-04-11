import React from 'react';
import Image from 'next/image';
import RightArrow from 'public/icons/RightArrowLarge.svg';
import SmallTag from '@/components/atoms/tags/smallTag/SmallTag';
import CommissionInfoItem from '@/components/atoms/texts/commissionInfoItem/CommissionInfoItem';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { ProjectIdResponse } from '@/apis/project/getProjectId';
import { getTimeStampTo } from '@/utils/dateFormat';

interface CommissionDetailTemplateProps {
  projectIdResponse: ProjectIdResponse;
  onClickInquiry: () => void;
  onClickBefore: () => void;
}
function CommissionDetailTemplate({
  projectIdResponse,
  onClickInquiry,
  onClickBefore,
}: CommissionDetailTemplateProps) {
  const rawDescription = projectIdResponse?.description;
  const description = JSON.parse(rawDescription).flatMap(obj =>
    Object.entries(obj).map(([key, value]) => ({ [key]: value })),
  );

  return (
    <div className="w-fit">
      <div
        onClick={onClickBefore}
        className="bg-black1 rounded-full w-53 h-53 px-18 py-13 mb-16 mt-78"
      >
        <Image className="rotate-180" src={RightArrow} alt={''} />
      </div>
      <section className="flex gap-29">
        <article className="bg-black1 rounded-xl px-52 py-48">
          <div className="flex gap-12">
            {projectIdResponse.categoryId === 1000 ? (
              <SmallTag text="이사/청소" theme="lightBlue" />
            ) : null}
            {projectIdResponse.categoryId === 2000 ? (
              <SmallTag text="설치/수리" theme="lightGreen" />
            ) : null}
            {projectIdResponse.categoryId === 3000 ? (
              <SmallTag text="과외" theme="lightPurple" />
            ) : null}
            {projectIdResponse.categoryId === 4000 ? (
              <SmallTag text="취미생활" theme="lightOrange" />
            ) : null}
            <SmallTag text={projectIdResponse.status} />
          </div>
          <h3 className="text-28 font-semibold my-24">{projectIdResponse.title}</h3>
          <p className="pb-24 border-b mb-24 text-black7 text-16">{projectIdResponse.summary}</p>
          <div className="grid grid-cols-3 gap-24">
            <CommissionInfoItem
              label={'마감일'}
              content={getTimeStampTo(projectIdResponse.deadline)}
            />
            <CommissionInfoItem label={'근무지'} content={projectIdResponse.region} />
            <CommissionInfoItem label={'예산'} content={projectIdResponse.budget} />
          </div>
          <div className="w-700 mt-24 px-44 py-40 bg-black2 rounded-xl">
            <h3 className="text-24 font-semibold mb-32">요청 상세</h3>
            {/* 프로젝트 설명 */}
            <div className="flex flex-col gap-32">
              {Object.entries(description).map(([index, obj]) => (
                <div key={index} className="flex flex-col gap-12">
                  <span className="font-medium text-black6 text-16">{Object.keys(obj)}</span>
                  <span className="font-medium text-black10 text-20">{Object.values(obj)}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
        <article className="p-28 bg-black1 rounded-xl h-fit">
          <div className="w-250 h-250 border border-black3 rounded-xl overflow-hidden mb-24">
            <Image
              width={250}
              height={250}
              src={
                projectIdResponse.clientProfileImageUrl === ''
                  ? '/images/DefaultImage.png'
                  : projectIdResponse.clientProfileImageUrl
              }
              alt={projectIdResponse.clientName}
              className="size-full object-cover"
            />
          </div>
          <p className="text-20 font-semibold mb-16">
            {projectIdResponse.clientName}님에게
            <br />
            연락해보세요!
          </p>
          <p className="text-16 text-black7 mb-20">
            지금 요청에 참여해보세요!
            <br />
            돕당 매니저가 빠르게 매칭해 드립니다.
          </p>
          <StandardButton
            text={'문의하기'}
            onClick={onClickInquiry}
            disabled={false}
            state={'blue'}
            size={'full'}
          />
        </article>
      </section>
    </div>
  );
}

export default CommissionDetailTemplate;
