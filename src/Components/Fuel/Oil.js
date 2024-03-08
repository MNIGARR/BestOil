import React, { useState } from "react";
import Select from "react-select";
import "./Oil.css";

const fuelOptions = [
  { fuelname: "AI-95", price: 6.4 },
  { fuelname: "AI-98", price: 6.2 },
  { fuelname: "A-76", price: 5.93 },
  { fuelname: "A-72", price: 6.1 },
];

export default function Oil() {
  const [selectedFuel, setSelectedFuel] = useState(fuelOptions[0]);
  const [fuelAmount, setFuelAmount] = useState(0);

  const handleFuelChange = (selectedOption) => {
    setSelectedFuel(selectedOption);
  };

  const handleFuelAmountChange = (e) => {
    const newAmount = parseFloat(e.target.value);
    setFuelAmount(newAmount);
  };

  const totalFuelPrice = selectedFuel.price * fuelAmount;

  return (
    <div className="FuelPart">
      <div id="fuel-options">
        <h1>Fuel</h1>
        <Select
          className="fuel-selection"
          value={selectedFuel}
          onChange={handleFuelChange}
          options={fuelOptions}
          getOptionLabel={(option) => option.fuelname}
          getOptionValue={(option) => option.fuelname}
        />
      </div>

      <div id="fuel-price">
        <h1>Price {selectedFuel.price}</h1>
      </div>

      <div id="oap">
        <h3 id="oil-amount">Litr</h3>
        <input
          id="amount-input"
          type="number"
          min="0.00"
          value={fuelAmount}
          onChange={handleFuelAmountChange}
        />
      </div>

      <div id="total-fuel-price">
        <h3 id="tpi">Total Fuel Price</h3>
        <h3>{totalFuelPrice}$</h3>
      </div>
    </div>
  );
}
