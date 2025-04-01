interface VerticalTabTitleProps {
  text: string;
  size: 'small' | 'large';
}

const sizeVariation = {
  small: 'w-194',
  large: 'w-217',
};

export default function VerticalTabTitle({ text, size }: VerticalTabTitleProps) {
  return (
    <div
      className={`bg-black2 px-20 py-12 rounded-[8px] text-20 font-semibold ${sizeVariation[size]}`}
    >
      {text}
    </div>
  );
}
