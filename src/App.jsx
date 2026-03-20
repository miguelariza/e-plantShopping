
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
        <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
            {/* Landing Page Section */}
            <section id="landing" className="page-section landing-page active">
                <div className="landing-content">
                <AboutUs/>
                <button className="btn-primary" onClick={handleGetStartedClick}>Get Started</button>
                </div>
            </section>
        </div>
        <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick}/>
      </div>
    </div>
  );
}

export default App;



