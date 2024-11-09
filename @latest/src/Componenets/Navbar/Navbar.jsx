import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Veggies.</div>
      <ul className="navbar-links">
        <li><a href="#Hero">Home</a></li>
        <li><a href="#Product">Product</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
