import React from "react";
import "./FoodMenu.css";

const foodData = [
  { name: "Pizza", amount: "$12" },
  { name: "Burger", amount: "$8" },
  { name: "Pasta", amount: "$10" },
  { name: "Sushi", amount: "$15" },
  { name: "Salad", amount: "$7" },
];

function FoodMenu() {
  return (
    <div className="food-menu-container">
      <h2 className="food-menu-title">Food Menu</h2>
      <ul className="food-menu-list">
        {foodData.map((item, idx) => (
          <li key={idx} className="food-menu-item">
            <span className="food-item-name">{item.name}</span>
            <span className="food-item-amount">{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodMenu;
