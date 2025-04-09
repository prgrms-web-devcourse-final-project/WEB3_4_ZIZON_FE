'use client'
import React from 'react';
import CommissionTemplate from '@/components/templates/commissionTemplate/CommissionTemplate';

export default function CommissionPage() {
  const [searchBar, setSearchBar] = React.useState<string>('')
  return (
    <CommissionTemplate
      value={searchBar}
      onChange={setSearchBar}
      onReset={() => {}}
    />
  );
}