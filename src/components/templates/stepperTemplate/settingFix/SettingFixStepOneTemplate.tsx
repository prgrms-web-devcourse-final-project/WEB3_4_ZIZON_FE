'use client'
import React from 'react';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList from '@/components/molecules/selectedOptionList/SelectedOptionList';
import CheckSelectBox from '@/components/organisms/checkSelectBox/CheckSelectBox';
import TextInputWithTitle from '@/components/molecules/textInputWithTitle/TextInputWithTitle';

export default function SettingFixStepOneTemplate() {
  const onClickHandler = () => {

  }
  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'2.대상 선정'} progressStep={2} isBefore={true} onClickBefore={() => {}} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <CheckSelectBox checkSelectBoxProps={[
            {label: "가전제품", caption: "냉장고, 세탁기, 에어컨 등", checked: false, onChange: () => alert('')},
            {label: "가구", caption: "소파, 침대, 옷장 등", checked: false, onChange: () => {}},
            {label: "생활용품", caption: "전등, 커튼 등", checked: false, onChange: () => {}},
            {label: "집", caption: "문고리, 창문, 환풍기, 주방후드 등", checked: false, onChange: () => {}},
          ]} title={"설치 및 수리의 대상이 무엇인가요?"}/>
          <TextInputWithTitle title={'구체적인 항목을 알려주세요'} id={''} placeholder={'무엇을 설치, 수리하고 싶으신가요?'} type={'text'} value={''}/>
          <div className="float-end mr-40 mt-32">
            <StandardButton text={'다음'} disabled={false} onClick={onClickHandler} state={'dark'} size={'fit'} />
          </div>
        </div>
        <div className="w-3/4">
          <SelectedOptionList
            selectedOptionIndex={[{ '과외 학생': '고등학교 1학년', '과외 형태': '개인' }, { '과목 구분': '교과 과정 내', '선택 과목': '한국사' }]} />
        </div>
      </div>
    </div>
  );
}

