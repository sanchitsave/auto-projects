import React from "react";

const menu = [
  {
    category: "Appetizers",
    items: [
      { name: "Bruschetta", price: "$6.99" },
      { name: "Stuffed Mushrooms", price: "$7.99" },
      { name: "Garlic Bread", price: "$4.99" }
    ]
  },
  {
    category: "Main Courses",
    items: [
      { name: "Grilled Salmon", price: "$18.99" },
      { name: "Chicken Parmigiana", price: "$16.99" },
      { name: "Vegetable Lasagna", price: "$14.99" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Tiramisu", price: "$6.50" },
      { name: "Cheesecake", price: "$5.99" },
      { name: "Chocolate Lava Cake", price: "$7.50" }
    ]
  }
];

function App() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to My React App</h1>
        <h2>Delizia Ristorante - Menu</h2>
      </header>
      <div className="menu">
        {menu.map((cat) => (
          <section key={cat.category} className="menu-category">
            <h3>{cat.category}</h3>
            <ul>
              {cat.items.map((item) => (
                <li key={item.name} className="menu-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">{item.price}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;
