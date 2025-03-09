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
    <header className="header bg-light">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Logo" className="header-logo" />
          </Link>
        </div>
        <button className="menu-toggle text-dark" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav className={`navigation bg-light ${menuOpen ? 'open' : ''} d-flex justify-content-center align-items-center gap-5`}>
          <ul>
            <li><NavLink className="text-dark" to="/" end onClick={toggleMenu}>Accueil</NavLink></li>
            <li><NavLink className="text-dark" to="/about" onClick={toggleMenu}>À propos</NavLink></li>
            <li><NavLink className="text-dark" to="/formation" onClick={toggleMenu}>Formation</NavLink></li>
            <li><NavLink className="text-dark" to="/admission" onClick={toggleMenu}>Admission</NavLink></li>
            <li><NavLink className="text-dark" to="/actualite" onClick={toggleMenu}>Actualité</NavLink></li>
            <li><NavLink className="text-dark" to="/mediatheque" onClick={toggleMenu}>Médiathèque</NavLink></li>
            <li><NavLink className="text-dark" to="/alumni" onClick={toggleMenu}>Alumni</NavLink></li>
            <li><NavLink className="text-dark" to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
            <li><NavLink className="text-dark" to="/mediatheque" onClick={toggleMenu}>Médiathèque</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
