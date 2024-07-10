import React, { useState } from 'react';
import './Navbar.css'; 

// Navbar component
const Navbar = () => {
  // State to manage the menu's open/closed status
  const [menuOpen, setMenuOpen] = useState(false); 

  // Function to handle menu toggle
  const handleToggle = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/close state
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">D. Zhivkov</div>

      {/* Hamburger button */}
      <div className={`menu-toggle ${menuOpen ? 'is-active' : ''}`} onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="">About me</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact me</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
