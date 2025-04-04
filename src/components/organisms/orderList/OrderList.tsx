'use client';

import React from 'react';
import OrderListItem from '@/components/molecules/orderListItem/OrderListItem';
import { SellState } from '@/types/sellState';

interface Order {
  imageUrl: string;
  price: number;
  sellState: SellState;
  category: string;
}

interface OrderListProps {
  orders: Order[];
  onAskButtonClick: (orderId: string) => void;
  isExpertView?: boolean;
}

export default function OrderList({
  orders,
  onAskButtonClick,
  isExpertView = false,
}: OrderListProps) {
  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-40">
        <p className="text-16 text-black6">주문 내역이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-16">
      {orders.map((order, index) => (
        <OrderListItem
          key={`${order.category}-${index}`}
          {...order}
          onClickAskButton={() => onAskButtonClick(`${order.category}-${index}`)}
          isExpertView={isExpertView}
        />
      ))}
    </div>
  );
}
