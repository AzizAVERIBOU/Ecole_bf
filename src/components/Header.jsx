import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Logo" className="header-logo" />
          </Link>
        </div>
        <nav className="navigation">
          <ul>
            <li><NavLink to="/" end>Accueil</NavLink></li>
            <li><NavLink to="/about">À propos</NavLink></li>
            <li><NavLink to="/formation">Formation</NavLink></li>
            <li><NavLink to="/admission">Admission</NavLink></li>
            <li><NavLink to="/actualite">Actualité</NavLink></li>
            <li><NavLink to="/alumni">Alumni</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 