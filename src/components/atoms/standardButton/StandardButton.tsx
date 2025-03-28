type ButtonStateType =
  | 'default'
  | 'light-blue'
  | 'blue'
  | 'blue-outline'
  | 'dark'
  | 'gray'
  | 'white';

interface StandardButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
  state?: ButtonStateType;
}

export default function StandardButton({
  text,
  onClick = () => {},
  disabled = false,
  state = 'default',
}: StandardButtonProps) {
  const stateVariants = {
    default: 'border border-black3 bg-black1 text-black7',
    'light-blue': 'bg-primary1 text-primary5',
    blue: 'bg-primary5 text-primary0',
    'blue-outline': 'border border-primary5 text-primary5 bg-black1',
    dark: 'bg-black12 text-white',
    gray: 'bg-black2 text-black7',
    white: 'bg-black1 text-black7',
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onClick()}
      className={`w-full px-16 py-12 rounded-[8px] text-16 text-black7 font-semibold cursor-pointer ${stateVariants[state]}`}
    >
      {text}
    </button>
  );
}
