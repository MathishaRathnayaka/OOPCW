import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobile, setIsMobile] = useState(false);

  const handleNavClick = (link) => {
    setActiveLink(link);
    setIsMobile(false); // Close mobile menu when a link is clicked
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <img 
          src="your-logo-url-here" 
          alt="Logo" 
          className="navbar-logo"
        />
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? '✖' : '☰'}
        </button>
        <nav className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
          <Link
            to="/"
            className={activeLink === 'Home' ? 'active-link' : ''}
            onClick={() => handleNavClick('Home')}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={activeLink === 'About' ? 'active-link' : ''}
            onClick={() => handleNavClick('About')}
          >
            About
          </Link>
          <Link
            to="/services"
            className={activeLink === 'Services' ? 'active-link' : ''}
            onClick={() => handleNavClick('Services')}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={activeLink === 'Contact' ? 'active-link' : ''}
            onClick={() => handleNavClick('Contact')}
          >
            Contact
          </Link>
          <Link
            to="/LoginPage"
            className={activeLink === 'Login' ? 'active-link' : ''}
            onClick={() => handleNavClick('Login')}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
