import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/formation">Formation</Link></li>
            <li><Link to="/admission">Admission</Link></li>
            <li><Link to="/actualite">Actualité</Link></li>
            <li><Link to="/alumni">Alumni</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 