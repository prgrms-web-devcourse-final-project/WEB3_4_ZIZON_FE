'use client';

import TabItem from '@/components/atoms/tabs/tabItem/TabItem';
import SmallTag from '@/components/atoms/tags/smallTag/SmallTag';
import ServiceIntroduction from '@/components/atoms/texts/serviceIntroduction/ServiceIntroduction';
import { ReactElement, useState } from 'react';
import Briefcase from 'public/icons/Briefcase.svg';
import Image from 'next/image';
import ReviewItem, { ReviewItemProps } from '@/components/molecules/reviewItem/ReviewItem';
interface ExpertIntroduction {
  introduction: string;
  major_category: string;
  sub_category_names: string[];
  portfolioImage: string;
  career_years: number;
  certification?: string[];
  ReviewList?: ReviewItemProps[];
}
const Didivder = () => <div className="w-full h-[1px] bg-black4" />;

export default function ExpertIntroduction({
  introduction,
  major_category,
  sub_category_names,
  career_years,
  certification,
  portfolioImage,
  ReviewList,
}: ExpertIntroduction) {
  const [currTab, setCurrTab] = useState('all');
  const tabArray = [
    { name: 'all', text: '전체' },
    { name: 'introduction', text: '전문가소개' },
    { name: 'review', text: '리뷰' },
  ];
  return (
    <div className="w-full flex flex-col gap-40">
      {/* Tab 영역 */}
      <ul className="flex gap-32 border-b-[1px] border-b-black4 w-full">
        {tabArray.map(item => (
          <TabItem
            key={item.name}
            name={item.name}
            text={item.text}
            isFocused={item.name === currTab}
            onClick={name => setCurrTab(name)}
          />
        ))}
      </ul>

      {/* 전문가 소개 영역 */}
      <div className="flex flex-col gap-52" id="introduction">
        {/* 간단 소개 */}
        <ServiceIntroduction title="전문가 소개" content={introduction} />
        {/* 제공서비스 */}
        <div className="w-full flex flex-col gap-24">
          <h3 className="font-bold text-20 text-black12">제공서비스</h3>
          <div className="flex gap-8">
            <SmallTag text={major_category} theme="default" />
            {sub_category_names &&
              sub_category_names?.map((item, index) => (
                <SmallTag key={index} text={item} theme="default" />
              ))}
          </div>
        </div>
        {/* 경력 */}
        <div className="w-full flex flex-col gap-24">
          <h3 className="font-bold text-20 text-black12">경력</h3>
          <div className="flex flex-col items-start gap-16">
            <h4 className="flex gap-8 justify-center items-center text-secondary3 font-bold text-16">
              <Image
                src={Briefcase}
                width={15}
                height={15}
                className="w-15 h-15"
                alt="carrer-icon"
              />
              <span>총 경력 {career_years}년</span>
            </h4>

            {/* 자격증 목록 */}
            <ul className="flex flex-col gap-16 ">
              {certification &&
                certification.map((item, index) => (
                  <li key={index} className="text-black10 font-medium text-16">
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <Didivder />

      {portfolioImage === "" ? null : (
        <div>
          <h3 className="font-bold text-20 text-black12 mb-24">포트폴리오</h3>
          <Image src={portfolioImage} alt={''} />
        </div>
      )}
      {/* 리뷰 영역 */}
      <div id="review" className="w-full flex flex-col gap-24">
        <h3 className="font-bold text-20 text-black12">리뷰</h3>
        <ul className="flex flex-col gap-40">
          {ReviewList &&
            ReviewList.map((item, index) => (
              <li key={index} className="w-full mb-32">
                <ReviewItem {...item} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
