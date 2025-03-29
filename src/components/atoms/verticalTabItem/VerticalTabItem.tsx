interface VerticalTabItemProps {
  name: string;
  isFocused: boolean;
  text: string;
  onClick: (name: string) => void;
  tabStyle: 'shopping' | 'mypage';
}

const tabStyleVariation = {
  shopping: 'w-217 text-16', // 큰거
  mypage: 'w-194 text-12', // 작은거
};

export default function VerticalTabItem({
  name,
  isFocused,
  text,
  onClick,
  tabStyle,
}: VerticalTabItemProps) {
  const focusedTabStyle = isFocused
    ? 'bg-primary1 border-1 border-primary2 text-black12'
    : 'bg-black2 text-black6';
  return (
    <li
      onClick={() => onClick(name)}
      className={`list-none px-20 py-12 rounded-[8px] hover:bg-black3 font-semibold transition-colors duration-200 ${focusedTabStyle} ${tabStyleVariation[tabStyle]}`}
    >
      {text}
    </li>
  );
}
