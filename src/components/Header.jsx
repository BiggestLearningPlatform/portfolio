import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <h1>Bilal's Portfolio</h1>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* hamburger icon */}
        </div>
        <ul className={menuOpen ? 'open' : ''}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
