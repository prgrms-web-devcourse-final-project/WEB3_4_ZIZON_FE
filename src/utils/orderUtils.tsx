import React from 'react';
import { Order } from '@/types/order';

/**
 * 주문 상태에 따른 배지 색상 및 텍스트를 반환합니다.
 * @param status 주문 상태
 * @returns 배지 텍스트와 색상 클래스
 */
export const getStatusBadge = (status: Order['status']) => {
  switch (status) {
    case 'PAID':
      return { text: '결제완료', color: 'bg-blue-100 text-blue-800' };
    case 'PREPARING':
      return { text: '상품준비중', color: 'bg-yellow-100 text-yellow-800' };
    case 'SHIPPING':
      return { text: '배송중', color: 'bg-purple-100 text-purple-800' };
    case 'DELIVERED':
      return { text: '배송완료', color: 'bg-green-100 text-green-800' };
    case 'CANCELLED':
      return { text: '취소됨', color: 'bg-red-100 text-red-800' };
    default:
      return { text: '알 수 없음', color: 'bg-gray-100 text-gray-800' };
  }
};

/**
 * 상품 타입에 따른 아이콘을 반환합니다.
 * @param type 상품 타입
 * @returns 아이콘 JSX
 */
export const getProductTypeIcon = (type: Order['productType']) => {
  if (type === 'DIGITAL') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-blue-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-green-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
