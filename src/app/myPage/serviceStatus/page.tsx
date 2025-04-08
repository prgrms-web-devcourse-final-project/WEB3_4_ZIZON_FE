'use client';

import React, { useState, useMemo } from 'react';
import SellStateTabContainer from '@/components/molecules/sellStateTabContainer/SellStateTabContainer';
import OrderList from '@/components/organisms/orderList/OrderList';
import { SellState } from '@/types/sellState';
import NumberReadability from '@/components/atoms/texts/numberReadability/NumberReadability';

interface Order {
  imageUrl: string;
  price: number;
  sellState: SellState;
  category: string;
}

export default function ServiceStatusPage() {
  const [selectedState, setSelectedState] = useState<SellState | null>(null);

  const orders: Order[] = [
    {
      imageUrl: '/images/defaultImage.png',
      price: 150000,
      sellState: 'inProgress',
      category: '이사',
    },
    {
      imageUrl: '/images/defaultImage.png',
      price: 200000,
      sellState: 'cancelled',
      category: '청소',
    },
    {
      imageUrl: '/images/defaultImage.png',
      price: 200000,
      sellState: 'completed',
      category: '청소',
    },
  ];

  const filteredOrders = useMemo(() => {
    if (!selectedState) return orders;
    return orders.filter(order => order.sellState === selectedState);
  }, [orders, selectedState]);

  const counts = useMemo(() => {
    return {
      inProgress: orders.filter(order => order.sellState === 'inProgress').length,
      cancelled: orders.filter(order => order.sellState === 'cancelled').length,
      completed: orders.filter(order => order.sellState === 'completed').length,
    };
  }, [orders]);

  const totalRevenue = useMemo(() => {
    return orders
      .filter(order => order.sellState === 'completed')
      .reduce((sum, order) => sum + order.price, 0);
  }, [orders]);

  const handleAskButtonClick = (orderId: string) => {
    console.log('문의하기 클릭:', orderId);
    // 문의하기 기능 구현
  };

  const handleStateSelect = (state: SellState) => {
    setSelectedState(prev => (prev === state ? null : state));
  };

  return (
    <div className="w-full">
      <h3 className="text-20 font-semibold mb-24">서비스 현황</h3>

      <SellStateTabContainer
        counts={counts}
        selectedState={selectedState}
        onStateSelect={handleStateSelect}
        isExpertView={true}
      />
      <div className="flex items-center justify-end gap-20">
        <span className="text-16 text-black6">총 수익</span>
        <span className="text-24 font-bold text-primary">
          <NumberReadability value={totalRevenue} />원
        </span>
      </div>
      <div className="mt-24">
        <OrderList
          orders={filteredOrders}
          onAskButtonClick={handleAskButtonClick}
          isExpertView={true}
        />
      </div>
    </div>
  );
}
