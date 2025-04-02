import React from 'react';

export interface SemiBoldText20Black10Props {
  title: string;
}
export default function SemiBoldText20Black10({title}: SemiBoldText20Black10Props) {
  return (
    <h3 className="text-20 font-semibold mb-24 text-black10">{title}</h3>
  );
}