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
      <div className="app-content-layout">
        <aside className="app-sidebar">
          <SideNavigation />
        </aside>
        <main className="app-main-content">
          <Menu />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
