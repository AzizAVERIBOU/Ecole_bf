import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import '../styles/Header.css';
import ROUTES from '../routes/path';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header bg-light">
      <div className="header-content">
        <div className="logo-container">
          <Link to="/">
            <img src="/images/logo-cpge.jpg" alt="CPGE MENAPLN" className="header-logo" />
          </Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
          <ul>
            {[
              { name: 'Accueil', path: ROUTES.HOME },
              { name: 'À propos', path: ROUTES.ABOUT },
              { name: 'Formation', path: ROUTES.FORMATION },
              { name: 'Admission', path: ROUTES.ADMISSION },
              { name: 'Actualité', path: ROUTES.ACTUALITE },
              { name: 'Médiathèque', path: ROUTES.MEDIATHEQUE },
              { name: 'Alumni', path: ROUTES.ALUMNI },
              { name: 'Contact', path: ROUTES.CONTACT },
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  end={item.path === ROUTES.HOME}
                  onClick={toggleMenu}
                  className="nav-link"
                >
                  
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
