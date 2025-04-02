import React from 'react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import "react-day-picker/style.css";

export interface DatePickerProps {
  selectedDay: Date;
  setSelectedDay: () => void;
}
function DatePicker({selectedDay, setSelectedDay}: DatePickerProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      mode="single"
      classNames={{
        nav: 'rdp-nav pb-12',
        day_button: 'm-4 w-34 h-34',
        weekday: 'text-black5',
        month_grid: 'mt-16',
        caption_label: 'ml-8',
        today: `border-red`, // Add a border to today's date
        selected: `bg-primary2 rounded-full text-white`, // Highlight the selected day
        root: `${defaultClassNames} max-w-fit px-22 py-16 bg-black2 rounded-xl`, // Add a shadow to the root element
        chevron: `${defaultClassNames} fill-black5` // Change the color of the chevron
      }}
      selected={selectedDay}
      onSelect={setSelectedDay}
    />
  );
}

export default DatePicker;