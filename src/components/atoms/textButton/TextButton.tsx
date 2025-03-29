interface TextButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function TextButton({ text, onClick, disabled = false }: TextButtonProps) {
  return (
    <button
      onClick={() => onClick()}
      disabled={disabled}
      className="font-medium text-primary4 text-13 cursor-pointer disabled:text-black6 disabled:cursor-not-allowed"
    >
      {text}
    </button>
  );
}
