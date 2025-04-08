'use client'
import React from 'react';
import SettingFixStepOneTemplate from '@/components/templates/stepperTemplate/settingFix/SettingFixStepOneTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';

const checkSelectBoxItems: {key: string; label: string; caption: string}[] = [
  {key: "appliance", label: "가전제품", caption: "냉장고, 세탁기, 에어컨 등"},
  {key: "furniture", label: "가구", caption: "소파, 침대, 옷장 등"},
  {key: "lifeItem", label: "생활용품", caption: "전등, 커튼 등"},
  {key: "home", label: "집", caption: "문고리, 창문, 환풍기, 주방후드 등"},
]
export default function SettingFixStepOnePage() {
  const [selectedOptionList, setSelectedOptionList] = React.useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = React.useState<selectedOptionIndexObject[]>([]);
  const [detailItemText, setDetailItemText] = React.useState<string>('');
  const [selectedKey, setSelectedKey] = React.useState<string | null>(null)
  const router = useRouter();

  React.useEffect(() => {
    setSelectedOptionList(JSON.parse(localStorage.getItem('selectedIndex') as string));
  }, []);

  const onNextHandler = () => {
    if(!selectedKey && detailItemText.length > 0) return;
    const newIndex = selectedOptionListNewItem;
    newIndex[newIndex.length - 1]["세부 사항"] = detailItemText
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...newIndex]));
    router.push("/commission/settingFix/step2")
  }
  const onBeforeHandler = () => {
    setSelectedOptionListNewItem(selectedOptionList);
    router.push("/commission/common/start")
  }
  const handlerSelection = (key: string, label: string) => {
    setSelectedKey(key);
    setSelectedOptionListNewItem([{"요청 대상": label}]);
  }
  return (
    <SettingFixStepOneTemplate
      checkSelectBoxProps={checkSelectBoxItems.map(({key, label, caption}) => ({
        label,
        caption,
        checked: selectedKey === key,
        onChange: () => handlerSelection(key, label)
      }))}
      value={detailItemText}
      onChangeValueAction={setDetailItemText}
      onNextHandlerAction={onNextHandler}
      onBeforeAction={onBeforeHandler}
      selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}/>
  );
}