import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import SideNavigation from "./components/SideNavigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-layout-main">
        <aside className="app-sidenav">
          <SideNavigation />
        </aside>
        <main className="app-content">
          <h1>Welcome to My React App</h1>
          {/* Optionally add an introduction section or a hero food image */}
          <section className="app-hero-image">
            <img src="/images/hero-food.jpg" alt="Delicious Food" className="hero-image" />
          </section>
          <Menu />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
