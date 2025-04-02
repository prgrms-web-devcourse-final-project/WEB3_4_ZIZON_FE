import React from 'react';
import DatePicker, { DatePickerProps } from '@/components/atoms/datePicker/DatePicker';
import SemiBoldText20Black10 from '@/components/atoms/texts/semiBoldText20Black10/SemiBoldText20Black10';

interface DatePickerWithTitleProps extends DatePickerProps {
  title: string;
}
function DatePickerWithTitle({selectedDay, setSelectedDay, title}: DatePickerWithTitleProps) {
  return (
    <div>
      <SemiBoldText20Black10 title={title} />
      <DatePicker selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
    </div>
  );
}

export default DatePickerWithTitle;