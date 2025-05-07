import logoImg from './../../img/icons/logo.svg'
import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logoImg} alt="Logo" />
            <span>Fashion</span>
          </div>
          <nav className="header__nav">
            <ul>
              <li>
                <a href="#!" className='header__nav-link'>
                  CATALOGUE
                </a>
              </li>
              <li>
                <a href="#!" className='header__nav-link'>
                  FASHION
                </a>
              </li>
              <li>
                <a href="#!" className='header__nav-link'>
                  FAVOURITE
                </a>
              </li>
              <li>
                <a href="#!" className='header__nav-link'>
                  LIFESTYLE
                </a>
              </li>
              <li>
                <a href="#!" className='header__nav-btn' >
                  SIGN UP
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
