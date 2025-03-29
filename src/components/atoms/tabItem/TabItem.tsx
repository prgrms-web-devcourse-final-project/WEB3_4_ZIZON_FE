interface TabItemProps {
  name: string;
  isFocused: boolean;
  text: string;
  onClick: (name: string) => void;
}

export default function TabItem({ name, text, onClick, isFocused = false }: TabItemProps) {
  const tabItemStyle = isFocused
    ? 'text-black10 border-b border-b-[1.5px] border-b-black10'
    : 'text-black6';

  return (
    <li
      onClick={() => onClick(name)}
      className={`box-content cursor-pointer list-none text-black6 text-16 font-semibold pb-10 transition-colors duration-500 ${tabItemStyle}`}
    >
      {text}
    </li>
  );
}
