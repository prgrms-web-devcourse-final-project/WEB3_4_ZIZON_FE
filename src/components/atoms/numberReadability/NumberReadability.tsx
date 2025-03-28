import React from 'react';

interface props {
  value: number;
}
function NumberReadability({value}:props) {
  return (
    <p>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
  );
}

export default NumberReadability;