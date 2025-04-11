'use client';

import React, { useState } from 'react';
import { mockOrderPageResponse } from '@/mocks/orderData';
import OrderCard from '@/components/organisms/orderCard/OrderCard';
import EmptyOrderList from '@/components/organisms/emptyOrderList/EmptyOrderList';

export default function BoughtProductPage() {
  const [orders] = useState(mockOrderPageResponse.content);

  return (
    <div className="w-full pt-24 pl-64">
      <h1 className="text-24 font-bold mb-40">구매한 상품</h1>

      {orders.length === 0 ? (
        <EmptyOrderList />
      ) : (
        <div className="w-full flex flex-col gap-20">
          {orders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}
