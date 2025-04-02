import React from 'react';
import SelectedOption from '@/components/atoms/texts/selectedOption/SelectedOption';

type selectedOptionIndexObject = {
  [index: string]: string
}
interface SelectedOptionListProps {
  selectedOptionIndex: selectedOptionIndexObject[]
}
function SelectedOptionList({selectedOptionIndex}:SelectedOptionListProps) {
  const selectedOptionRow:  React.JSX.Element[] = [];
  selectedOptionIndex.forEach((item) => {
    for(const key in item) {
      selectedOptionRow.push(<SelectedOption type={'left-impact'} leftText={key} rightText={item[key]} />);
    }
    selectedOptionRow.push(<div className="border border-black3 my-16"/>)
  })
  selectedOptionRow.pop();
  return (
    <div className="px-40 py-32 bg-black1 rounded-lg">
      {selectedOptionRow.map((item) => {
        return(item)
      })}
    </div>
  );
}

export default SelectedOptionList;