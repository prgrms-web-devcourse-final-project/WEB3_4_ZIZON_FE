'use client'
import React from 'react';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import IconSelectBox, { IconSelectBoxProps } from '@/components/organisms/iconSelectBox/IconSelectBox';
import CommissionTopBox, { CommissionTopBoxProps } from '@/components/molecules/commissionTopBox/CommissionTopBox';
import SelectedOptionList from '@/components/molecules/selectedOptionList/SelectedOptionList';

interface CommonStartStepperProps {
  commissionTopBoxProps: CommissionTopBoxProps;
  iconSelectBoxProps: IconSelectBoxProps;

}
function CommonStartStepperTemplate() {
  const onClickHandler = () => {

  }
  return (
    <div className='px-230 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'1.요청 분류'} progressStep={1} isBefore={false} onClickBefore={()=>{}}/>
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <IconSelectBox iconSelectBoxProps={[
            {type:"left", title:"설치 및 수리", subtitle: "가전제품부터 가구까지 손쉽게 옮기고 고쳐요", category: 'spanner', isOn: true},
            {type:"left", title:"과외", subtitle: "원하는 과목을 원하는 시간에 전문가와 공부해요", category: 'pencil', isOn: false},
            {type:"left", title:"이사 및 청소", subtitle: "입주 청소부터 이사 마무리까지 전문가의 손길로", category: 'home', isOn: false},
            {type:"left", title:"취미생활", subtitle: "댄스, 음악, 미술을 전문가와 함께 더 즐겁게 배워요", category: 'pallete', isOn: false}
          ]} title={'어떤 도움이 필요하신가요?'}/>
          <div className="float-end mr-40">
            <StandardButton text={'다음'} disabled={false} onClick={onClickHandler} state={'dark'} size={'fit'}/>
          </div>
        </div>
        <div className="w-3/4">
          <SelectedOptionList selectedOptionIndex={[{'과외 학생': '고등학교 1학년', '과외 형태': '개인'},{'과목 구분': '교과 과정 내', '선택 과목': '한국사'}]}/>
        </div>
      </div>
    </div>
  );
}

export default CommonStartStepperTemplate;