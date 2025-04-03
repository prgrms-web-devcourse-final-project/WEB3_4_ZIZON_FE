'use client'
import React from 'react';
import CommissionTemplate from '@/components/templates/commissionTemplate/CommissionTemplate';

export default function CommissionPage() {
  const [searchBar, setSearchBar] = React.useState<string>('')
  return (
    <div>
      <CommissionTemplate
        value={searchBar}
        onChange={setSearchBar}
      />
    </div>
  );
}