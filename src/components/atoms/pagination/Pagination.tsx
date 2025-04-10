// defaultPage : 페이지를 몇번으로 시작
// limit : 몇게 단위로?
'use client';
import { useState } from 'react';

// total : 총 데이터수
interface PaginationProps {
  defaultPage: number;
  limit: number;
  total: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
}
const Pagination = ({ defaultPage, limit, total, onChange }: PaginationProps) => {
  const [page, setPage] = useState<number>(defaultPage);
  const totalPage = Math.ceil(total / limit);

  const handleChangePage = (newPage: number) => {
    onChange(newPage); // 부모에게 전달하는 page 번호
    setPage(newPage); // 현재 컴포넌트 내에서 선택된 page를 변경
  };

  return (
    <div>
      <button onClick={() => page !== 0 && handleChangePage(page - 1)}>이전</button>
      {Array.from(new Array(totalPage), (_, i) => i)
        .filter(i => {
          // 페이지 수가 많아지더라도 5개씩 끊어서 보여줌
          if (page < 3) {
            return i < 5;
          } else if (page > totalPage - 3) {
            return i >= totalPage - 5;
          }
          return i >= page - 2 && i <= page + 2;
        })
        .map(i => (
          <button
            key={i}
            onClick={() => handleChangePage(i)}
            style={{ backgroundColor: page === i ? 'red' : undefined }}
          >
            {i + 1}
          </button>
        ))}
      <button onClick={() => page !== totalPage - 1 && handleChangePage(page + 1)}>다음</button>
    </div>
  );
};
export default Pagination;
