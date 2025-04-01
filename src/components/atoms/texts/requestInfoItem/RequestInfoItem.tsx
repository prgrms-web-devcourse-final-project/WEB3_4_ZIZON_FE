interface RequestInfoItemProps {
  question: string;
  answer: string;
  type: 'small' | 'large';
}

export default function RequestInfoItem({
  question,
  answer,
  type = 'small',
}: RequestInfoItemProps) {
  const styleMap = {
    small: {
      question: 'text-13 font-medium text-black7',
      answer: 'text-16 font-medium text-black10',
    },
    large: {
      question: 'text-16 font-medium text-black7',
      answer: 'text-20 font-medium text-black10',
    },
  };
  const style = styleMap[type];

  return (
    <div className="w-322 h-fit flex flex-col gap-8">
      <h4 className={`${style.question}`}>{question}</h4>
      <p className={`${style.answer}`}>{answer}</p>
    </div>
  );
}
