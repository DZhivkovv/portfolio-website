import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  const handleToggle = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/close state
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to='/'>D. Zhivkov</Link>
      </div>

      {/* Hamburger button */}
      <div className={`menu-toggle ${menuOpen ? 'is-active' : ''}`} onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/about">About me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact me</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
