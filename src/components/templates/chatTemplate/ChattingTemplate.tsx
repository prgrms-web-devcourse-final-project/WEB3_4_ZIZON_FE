import { ReactElement, ReactNode } from 'react';

export default function ChattingTemplate({ children }: { children: ReactNode }) {
  return <div className="w-full flex gap-24 mt-46 items-start">{children}</div>;
}
