import "./App.css";
import Fuel from "../Fuel/Oil";
import MiniCafe from "../MiniCafe/MiniCafe";
import { useState, useEffect } from "react";
import Total from "../Total/Total";
import totalFoodPrice from "../MiniCafe/MiniCafe";
import totalFuelPrice from "../Fuel/Oil";

function App({ totalFoodPrice, totalFuelPrice }) {
  const [fuelPrice, setTotalFuelPrice] = useState(0);
  const [foodPrice, setTotalFoodPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fuelPrice = totalFuelPrice;
    setTotalFuelPrice(fuelPrice);
    const foodPrice = totalFoodPrice;
    setTotalFoodPrice(foodPrice);
  }, []);

  useEffect(() => {
    setTotalPrice(fuelPrice + foodPrice);
  }, [fuelPrice, foodPrice]);

  return (
    <div className="App">
      <div className="App-Header">
        <h3 id="app-title">BestOil</h3>
      </div>
      <div className="MainPart">
        <Fuel />
        <MiniCafe className="CafePart" />
        <Total totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default App;
