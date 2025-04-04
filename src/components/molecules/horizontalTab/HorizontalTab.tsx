'use client';
import TabItem from '@/components/atoms/tabs/tabItem/TabItem';
import { useState } from 'react';

type tab = { name: string; text: string };
interface HorizontalTabProps {
  tabs: tab[];
}
export default function HorizontalTab({ tabs }: HorizontalTabProps) {
  const [currTab, setCurrTab] = useState('info');
  return (
    <ul className="flex gap-32 border-b-[1px] border-b-black4 w-full">
      {tabs.map(item => (
        <TabItem
          key={item.name}
          name={item.name}
          text={item.text}
          isFocused={item.name === currTab}
          onClick={name => setCurrTab(name)}
        />
      ))}
    </ul>
  );
}
