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
  onClickBefore
}: CommissionDetailTemplateProps ) {
  return (
    <div>
      <div onClick={onClickBefore} className="bg-black1 rounded-full w-53 h-53 px-18 py-13 mb-16 mt-78">
        <Image className="rotate-180" src={RightArrow} alt={''}/>
      </div>
      <div className="flex gap-29">
        <div className="bg-black1 rounded-xl px-52 py-48">
          <div className="flex gap-12">
            <SmallTag text={'과외'} theme={'lightPurple'}/>
            <SmallTag text={'수능 대비'}/>
          </div>
          <h3 className="text-28 font-semibold my-24">{projectIdResponse.title}</h3>
          <p className="pb-24 border-b mb-24 text-black7 text-16">{projectIdResponse.summary}</p>
          <div className="grid grid-cols-3 gap-24">
            <CommissionInfoItem label={'마감일'} content={getTimeStampTo(projectIdResponse.deadline)}/>
            <CommissionInfoItem label={'근무지'} content={projectIdResponse.region}/>
            <CommissionInfoItem label={'예산'} content={projectIdResponse.budget}/>
          </div>
          <div className="mt-24 px-44 py-40 bg-black2 rounded-xl">
            <h3 className="text-20 font-semibold">요청 상세</h3>
            <div className="mt-32">
              <div className="flex flex-col gap-32">
                {Object.entries(JSON.parse(projectIdResponse.description)).map(([index, obj]) => (
                  <div key={index} className="flex flex-col gap-8">
                    <span className="font-medium text-black6 text-13">{Object.keys(obj)}</span>
                    <span className="font-medium text-black10 text-16">{Object.values(obj)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-28 bg-black1 rounded-xl h-fit">
          <Image className="rounded-xl" width={250} height={160} src={projectIdResponse.clientProfileImageUrl === "" ? "/images/DefaultImage.png" : projectIdResponse.clientProfileImageUrl} alt={''} />
          <div className="text-20 font-semibold mt-20">
            <p>{projectIdResponse.clientName}님에게</p>
            <p>연락해보세요!</p>
          </div>
          <div className="text-13 text-black6 mt-20">
            <p>지금 요청에 참여해보세요!</p>
            <p>돕당 매니저가 빠르게 매칭해 드립니다.</p>
          </div>
          <div className="mt-20">
            <StandardButton text={'문의하기'} onClick={onClickInquiry} disabled={false} state={'blue'} size={'full'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommissionDetailTemplate;