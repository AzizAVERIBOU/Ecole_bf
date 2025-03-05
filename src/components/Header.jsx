import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';
import { FiMenu, FiX } from 'react-icons/fi';
import lightTheme from "../../public/svg/light_mode.svg";
import darkTheme from "../../public/svg/dark_mode.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const textColor = isDarkMode ? 'text-light' : 'text-dark';
  const navigationColor = isDarkMode ? 'bg-dark' : 'bg-light';

  return (
    <>
      <header className={`header ${navigationColor}`}>
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.png" alt="Logo" className="header-logo" />
            </Link>
          </div>
          <button className={`menu-toggle ${textColor}`} onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
          <nav className={`navigation ${menuOpen ? 'open' : ''} ${navigationColor} d-flex justify-content-center align-items-center gap-5`}>
            <ul>
              <li><NavLink className={textColor} to="/" end onClick={toggleMenu}>Accueil</NavLink></li>
              <li><NavLink className={textColor} to="/about" onClick={toggleMenu}>À propos</NavLink></li>
              <li><NavLink className={textColor} to="/formation" onClick={toggleMenu}>Formation</NavLink></li>
              <li><NavLink className={textColor} to="/admission" onClick={toggleMenu}>Admission</NavLink></li>
              <li><NavLink className={textColor} to="/actualite" onClick={toggleMenu}>Actualité</NavLink></li>
              <li><NavLink className={textColor} to="/alumni" onClick={toggleMenu}>Alumni</NavLink></li>
              <li><NavLink className={textColor} to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <button onClick={toggleDarkMode} className="theme-toggle">
        {
          isDarkMode ? 
            <img src={lightTheme} alt="light mode icon" /> : <img src={darkTheme} alt="dark mode icon" />
        }
      </button>
    </>
  );
};

export default Header;
