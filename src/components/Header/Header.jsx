import React, { useState } from 'react';
import { Link } from "react-scroll";
import "../Header/Header.css";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='header flex-element'>
      <div className='header_left'>
        <h1>Port<span>Folio</span></h1>
      </div>
      <div className='header_right flex-element'>
        {/* Hamburger Icon (visible on smaller screens) */}
        <div className="hamburger-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links (visible on larger screens or when menu is open) */}
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <Link to="about" smooth={true} offset={-100} duration={500} onClick={isMobileMenuOpen ? toggleMobileMenu : null}>
            <h4>About Me</h4>
          </Link>

          <Link to="skills" smooth={true} offset={-100} duration={500} onClick={isMobileMenuOpen ? toggleMobileMenu : null}>
            <h4>Skills</h4>
          </Link>

          <Link to="projects" smooth={true} offset={-100} duration={500} onClick={isMobileMenuOpen ? toggleMobileMenu : null}>
            <h4>Projects</h4>
          </Link>

          <Link to="GitStack" smooth={true} offset={-100} duration={500} onClick={isMobileMenuOpen ? toggleMobileMenu : null}>
            <h4>Statistics</h4>
          </Link>

          <Link to="contact" smooth={true} offset={-100} duration={500} onClick={isMobileMenuOpen ? toggleMobileMenu : null}>
            <h4>Contact</h4>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Header;