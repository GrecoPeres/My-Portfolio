import React, { useState, useEffect } from 'react';
import "./header.css";
import LogoLight from "../../assets/logo-preto.png";
import LogoDark from "../../assets/logo-branca.png";
import DayNightToggle from 'react-day-and-night-toggle';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('data-theme') === 'dark');

  useEffect(() => {
    const currentTheme = localStorage.getItem('data-theme');
    if (currentTheme) {
      document.body.setAttribute('data-theme', currentTheme);
      setIsDarkMode(currentTheme === 'dark');
    } else {
      localStorage.setItem('data-theme', 'light');
      document.body.setAttribute('data-theme', 'light');
    }
  }, []);

  const handleChangeTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('data-theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  }

  const [Toggle, showMenu] = useState(false);

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href="index.html" className='nav__logo'>
          <img src={isDarkMode ? LogoDark : LogoLight} alt="Logo Greco" style={{
            width: "5rem",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0.8rem",
          }} />
        </a>
          
          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className='nav__list grid'>
              <li className='nav__item'>
                <a href='#home' className='nav__link active-link'>
                  <i className='uil uil-estate nav__icon'></i> Home
                </a>
              </li>
  
              <li className='nav__item'>
                <a href='#about' className='nav__link'>
                  <i className='uil uil-user nav__icon'></i> Sobre
                </a>
              </li>
  
              <li className='nav__item'>
                <a href='#skills' className='nav__link'>
                  <i className='uil uil-file-alt nav__icon'></i> Skills
                </a>
              </li>
  
              <li className='nav__item'>
                <a href='#services' className='nav__link'>
                  <i className='uil uil-briefcase-alt nav__icon'></i> Serviços
                </a>
              </li>
  
              <li className='nav__item'>
                <a href='#portfolio' className='nav__link'>
                  <i className='uil uil-scenery nav__icon'></i> Portfolio
                </a>
              </li>
  
              <li className='nav__item'>
                <a href='#contact' className='nav__link'>
                  <i className='uil uil-message nav__icon'></i> Contato
                </a>
              </li>
              <DayNightToggle size={45} onChange={handleChangeTheme} checked={isDarkMode} />
            </ul>
            <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i>
          </div>
  
          <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
            <i className='uil uil-apps'></i>
          </div>
        </nav>
      </header>
    )
}

export default Header