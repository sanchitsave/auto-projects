import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import SideNavigation from "./components/SideNavigation";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return <div>Welcome to the Home Page!</div>;
}
function About() {
  return <div>About Page Content</div>;
}
function Services() {
  return <div>Services Page Content</div>;
}
function Contact() {
  return <div>Contact Page Content</div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app-content-layout">
          <aside className="app-sidebar">
            <SideNavigation />
          </aside>
          <main className="app-main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
