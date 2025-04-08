'use client';

export interface SemiBoldTextProps {
  title: string;
  fontSize?: number;
}

export default function SemiBoldText({ title, fontSize = 20 }: SemiBoldTextProps) {
  return <h3 className={`text-${fontSize} font-semibold text-black10`}>{title}</h3>;
}
