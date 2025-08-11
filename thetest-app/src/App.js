import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import SideNavigation from "./components/SideNavigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App app-bg-image">
      <Header />
      {/* Overlay menu directly, remove multiple images */}
      <main className="app-main-content" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        minHeight: '60vh',
        position: 'relative',
      }}>
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
