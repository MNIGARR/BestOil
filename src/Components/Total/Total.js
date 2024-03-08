import React, { useState } from "react";

export default function Total({ totalFuelPrice, totalFoodPrice }) {
  const [totalPrice, setTotalPrice] = useState(null);

  const calculateTotalPrice = () => {
    const total = totalFuelPrice + totalFoodPrice;
    setTotalPrice(total);
  };

  return (
    <div>
      <button onClick={calculateTotalPrice}>Calculate</button>

      {totalPrice !== null && (
        <div>
          <h1>Total Price</h1>
          <h2>{totalPrice} $</h2>
        </div>
      )}
    </div>
  );
}
