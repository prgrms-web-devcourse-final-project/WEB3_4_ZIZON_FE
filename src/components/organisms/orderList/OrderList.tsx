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
