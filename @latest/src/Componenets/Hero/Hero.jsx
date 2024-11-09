import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Farm-Fresh Vegetables Delivered to Your Door</h1>
            <p className="hero-subtitle">Explore a wide selection of organic, locally-sourced produce, picked at the peak of freshness.</p>
            <button className="hero-button">Shop Now</button>
          </div>
          <div className="hero-image">
            <img src="./images/vegetable.png" alt="Fresh Vegetables" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
