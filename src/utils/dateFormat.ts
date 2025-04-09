export const getTimeAgo = (date: Date): string => {
  const now = new Date();
  const timeDiff = now.getTime() - date.getTime();

  // 밀리초를 각 단위로 변환
  const minutes = Math.floor(timeDiff / (1000 * 60));
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years}년 전`;
  if (months > 0) return `${months}개월 전`;
  if (days > 0) return `${days}일 전`;
  if (hours > 0) return `${hours}시간 전`;
  if (minutes > 0) return `${minutes}분 전`;
  return '방금 전';
};

// Date 객체를 받아서 "YYYY.MM.DD" 형식의 문자열로 변환
export const getDotSeparatedDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

// Date 객체를 받아서 "YY.MM.DD" 형식의 문자열로 변환
export const getContractedDotSeparatedDate = (date: Date) => {
  const year = String(date.getFullYear()).slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};
export const getTimeStampTo = (date: string) => {
  if(typeof date !== 'string') return;
  let yymmdd = date.split('T');
  yymmdd = yymmdd[0].split('-');
  return `${yymmdd[0]}.${yymmdd[1]}.${yymmdd[2]}`
};
