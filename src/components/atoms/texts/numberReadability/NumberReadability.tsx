import React from 'react';

interface props {
  value: number;
}

function NumberReadability({ value }: props) {
  return <span>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>;
}

export default NumberReadability;
