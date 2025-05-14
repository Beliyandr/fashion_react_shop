import logoImg from './../../img/icons/logo.svg'
import React from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__row">
          <Link to='/' className="header__logo">
            <img src={logoImg} alt="Logo" />
            <span>Fashion</span>
          </Link>
          <nav className="header__nav">
            <ul>
              <li>
                <NavLink to="catalogue" className={({ isActive }) => classNames('header__nav-link', { 'is-active': isActive })}>
                  CATALOGUE
                </NavLink>
              </li>
              <li>
                <NavLink to="fashion" className={({ isActive }) => classNames('header__nav-link', { 'is-active': isActive })}>
                  FASHION
                </NavLink>
              </li>
              <li>
                <NavLink to="favorite" className={({ isActive }) => classNames('header__nav-link', { 'is-active': isActive })}>
                  FAVOURITE
                </NavLink>
              </li>
              <li>
                <NavLink to="lifestyle" className={({ isActive }) => classNames('header__nav-link', { 'is-active': isActive })}>
                  LIFESTYLE
                </NavLink>
              </li>
              <li>
                <Link to="/login" className='header__nav-btn' >
                  SIGN UP
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
