import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SideNav from './components/SideNav';
import Header from './components/Header';
import Footer from './components/Footer';

// Placeholder components for each page
const Page1 = () => <h2>Page 1</h2>;
const Page2 = () => <h2>Page 2</h2>;
const Page3 = () => <h2>Page 3</h2>;
const Page4 = () => <h2>Page 4</h2>;
const Page5 = () => <h2>Page 5</h2>;

function MainContent() {
  const navigate = useNavigate();
  return (
    <div className="main-content">
      <h1>Welcome to My React App</h1>
      <div className="button-group">
        <button onClick={() => navigate('/page1')}>Button 1</button>
        <button onClick={() => navigate('/page2')}>Button 2</button>
        <button onClick={() => navigate('/page3')}>Button 3</button>
        <button onClick={() => navigate('/page4')}>Button 4</button>
        <button onClick={() => navigate('/page5')}>Button 5</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
