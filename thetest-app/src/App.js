import React from "react";
import "./App.css";
import Menu from "./components/Menu";
// Import Header, SideNavigation, and Footer
import Header from "./components/Header";
import SideNavigation from "./components/SideNavigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-content-layout">
        <SideNavigation />
        <div className="App-main">
          <h1>Welcome to My React App</h1>
          <Menu />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
