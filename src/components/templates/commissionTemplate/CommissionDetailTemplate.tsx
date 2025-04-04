import React from 'react';
import Image from 'next/image';
import RightArrow from 'public/icons/RightArrowLarge.svg';
import SmallTag from '@/components/atoms/tags/smallTag/SmallTag';
import CommissionInfoItem from '@/components/atoms/texts/commissionInfoItem/CommissionInfoItem';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';

function CommissionDetailTemplate() {
  return (
    <div>
      <div className="bg-black1 rounded-full w-53 h-53 px-18 py-13 mb-16 mt-78">
        <Image className="rotate-180" src={RightArrow} alt={''}/>
      </div>
      <div className="flex gap-29">
        <div className="bg-black1 rounded-xl px-52 py-48">
          <div className="flex gap-12">
            <SmallTag text={'과외'} theme={'lightPurple'}/>
            <SmallTag text={'수능 대비'}/>
          </div>
          <h3 className="text-28 font-semibold my-24">{'수능 대비 한국사 과외 선생님 구합니다.'}</h3>
          <p className="pb-24 border-b mb-24 text-black7 text-16">{'2025 수능을 대비해서 한국사 과외를 진행해주실 선생님을 구합니다. 연락주세요!'}</p>
          <div className="grid grid-cols-3 gap-24">
            <CommissionInfoItem label={'마감일'} content={new Date()}/>
            <CommissionInfoItem label={'근무지'} content={'서울시 강남구'}/>
            <CommissionInfoItem label={'예산'} content={150000}/>
          </div>
          <div className="mt-24 px-44 py-40 bg-black2 rounded-xl">
            <h3 className="text-20 font-semibold">요청 상세</h3>
            <div className="mt-32">
              <p className="text-black7 text-16 font-medium">어떤 도움이 필요하신가요?</p>
              <p className="text-black10 text-20 font-medium mt-8">과외</p>
            </div>
          </div>
        </div>
        <div className="p-28 bg-black1 rounded-xl h-fit">
          <Image className="rounded-xl" width={250} height={160} src={""} alt={""}/>
          <div className="text-20 font-semibold mt-20">
            <p>{'이진우'}님에게</p>
            <p>연락해보세요!</p>
          </div>
          <div className="text-13 text-black6 mt-20">
            <p>지금 요청에 참여해보세요!</p>
            <p>돕당 매니저가 빠르게 매칭해 드립니다.</p>
          </div>
          <div className="mt-20">
            <StandardButton text={'문의하기'} onClick={() => {}} disabled={false} state={'blue'} size={'full'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommissionDetailTemplate;