import React, { useState } from "react";
import "./MiniCafe.css";

export default function MiniCafe() {
  const foodItems = [
    { name: "Cheeseburger", price: 8.99 },
    { name: "Margherita Pizza", price: 10.49 },
    { name: "Salad", price: 6.99 },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (itemName) => {
    if (selectedItems.find((selectedItem) => selectedItem.item === itemName)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem.item !== itemName)
      );
    } else {
      setSelectedItems([...selectedItems, { item: itemName, amount: 1 }]);
    }
  };

  const totalFoodPrice = selectedItems.reduce((total, selectedItem) => {
    const item = foodItems.find((food) => food.name === selectedItem.item);
    return total + (item ? item.price * selectedItem.amount : 0);
  }, 0);

  const handleAmountChange = (e, itemName) => {
    const newAmount = parseInt(e.target.value);
    setSelectedItems(
      selectedItems.map((selectedItem) => {
        if (selectedItem.item === itemName) {
          return { ...selectedItem, amount: newAmount };
        }
        return selectedItem;
      })
    );
  };

  return (
    <div>
      <h2 id="minicafe-title">Food Menu</h2>
      <form id="food-form">
        {foodItems.map((food, index) => (
          <div key={index}>
            <label htmlFor={`food-checkbox-${index}`} id="foods">
              <input
                id={`food-checkbox-${index}`}
                type="checkbox"
                onChange={() => handleCheckboxChange(food.name)}
              />
              {food.name} ${food.price}
            </label>
            <input
              id={`food-amount-${index}`}
              type="number"
              min="0"
              value={
                selectedItems.find((item) => item.item === food.name)?.amount ||
                0
              }
              onChange={(e) => handleAmountChange(e, food.name)}
            />
          </div>
        ))}
      </form>
      <div id="ftp-1">
        <h3 id="food-totalprice-title"> Total Food Price </h3>
        <h3>${totalFoodPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}
