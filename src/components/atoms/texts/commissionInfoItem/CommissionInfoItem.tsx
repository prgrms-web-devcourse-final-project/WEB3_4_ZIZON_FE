interface CommissionInfoItemProps {
  label: '마감일' | '근무지' | '예산';
  content: Date | string | number;
}

function formatContent(
  label: CommissionInfoItemProps['label'],
  content: CommissionInfoItemProps['content'],
): string {
  switch (label) {
    case '마감일':
      if (content instanceof Date) {
        const month = content.getMonth() + 1;
        const date = content.getDate();
        return `${month}월 ${date}일`;
      }
      return String(content);

    case '근무지':
      return String(content);

    case '예산':
      if (typeof content === 'number') {
        return content.toLocaleString('ko-KR') + '원';
      }
      return String(content);

    default:
      return String(content);
  }
}

function CommissionInfoItem({ label, content }: CommissionInfoItemProps) {
  const formattedContent = formatContent(label, content);

  return (
    <div className="flex flex-col px-24 py-20 gap-12 bg-black2 rounded-lg">
      <label className="text-16 font-regular text-black7">{label}</label>
      <p className="text-16 font-semibold text-black12">{formattedContent}</p>
    </div>
  );
}

export default CommissionInfoItem;
