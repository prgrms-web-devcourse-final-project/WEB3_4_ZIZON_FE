interface TextButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  type?: 'normal' | 'dark' | 'blue';
}

export default function TextButton({
  text,
  onClick,
  disabled = false,
  type = 'blue',
}: TextButtonProps) {
  const styleMap = {
    normal: 'text-16 font-regular text-black6',
    dark: 'text-16 font-semibold text-black10 ',
    blue: 'text-13 font-medium text-primary4 ',
  };
  const style = styleMap[type];
  return (
    <button
      onClick={() => onClick()}
      disabled={disabled}
      className={`cursor-pointer disabled:text-black6 disabled:cursor-not-allowed ${style} `}
    >
      {text}
    </button>
  );
}
