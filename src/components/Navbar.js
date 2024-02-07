// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Update the import
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Add useNavigate hook

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="navbar-container">
        <div className="logo" onClick={() => navigate('/')}>
          Prandeep
        </div>
        <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {/* Use Link components for navigation */}
          <li onClick={closeMobileMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to="/projects">Projects</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
