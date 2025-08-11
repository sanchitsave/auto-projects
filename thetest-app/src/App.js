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
            {/* Internet image example */}
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" alt="Delicious Food" className="hero-image" />
          </section>
          {/* Example of other commonly used internet/unsplash images: */}
          <section className="app-secondary-images" style={{ display: 'flex', gap: 16, margin: '32px 0' }}>
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Lunch" style={{ maxWidth: 180, borderRadius: 12 }} />
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Salad" style={{ maxWidth: 180, borderRadius: 12 }} />
            <img src="https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80" alt="Dessert" style={{ maxWidth: 180, borderRadius: 12 }} />
          </section>
          <Menu />
          {/* Example professional button */}
          <div style={{ margin: '36px 0', display: 'flex', gap: 24 }}>
            <button className="btn btn-primary">Order Now</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
