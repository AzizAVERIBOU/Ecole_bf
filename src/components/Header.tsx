import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';
import { FiMenu, FiX } from 'react-icons/fi';
import ROUTES from '../routes/path';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header bg-light">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo-cpge.jpg" alt="CPGE MENAPLN" className="header-logo" />
          </Link>
        </div>
        <button className="menu-toggle text-dark" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav className={`navigation bg-light ${menuOpen ? 'open' : ''} d-flex justify-content-center align-items-center gap-5`}>
          <ul>
            <li><NavLink className="text-dark" to={ROUTES.HOME} end onClick={toggleMenu}>Accueil</NavLink></li>
            <li><NavLink className="text-dark" to={ROUTES.ABOUT} onClick={toggleMenu}>À propos</NavLink></li>
            <li><NavLink className="text-dark" to={ROUTES.FORMATION} onClick={toggleMenu}>Formation</NavLink></li>
            <li><NavLink className="text-dark" to={ROUTES.ADMISSION} onClick={toggleMenu}>Admission</NavLink></li>
            <li><NavLink className="text-dark" to={ROUTES.ACTUALITE} onClick={toggleMenu}>Actualité</NavLink></li>
            <li><NavLink className="text-dark" to={ROUTES.MEDIATHEQUE} onClick={toggleMenu}>Médiathèque</NavLink></li>
            <li><NavLink className="text-dark" to={ROUTES.ALUMNI} onClick={toggleMenu}>Alumni</NavLink></li>
            <li><NavLink className="text-dark" to={ROUTES.CONTACT} onClick={toggleMenu}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
