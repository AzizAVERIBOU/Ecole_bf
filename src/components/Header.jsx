import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Logo" className="header-logo" />
          </Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/" end onClick={toggleMenu}>Accueil</NavLink></li>
            <li><NavLink to="/about" onClick={toggleMenu}>À propos</NavLink></li>
            <li><NavLink to="/formation" onClick={toggleMenu}>Formation</NavLink></li>
            <li><NavLink to="/admission" onClick={toggleMenu}>Admission</NavLink></li>
            <li><NavLink to="/actualite" onClick={toggleMenu}>Actualité</NavLink></li>
            <li><NavLink to="/alumni" onClick={toggleMenu}>Alumni</NavLink></li>
            <li><NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;