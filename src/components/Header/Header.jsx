import React from 'react';
import './Header.scss';


export const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__row">
          <div className="header__logo">Logo</div>
          <nav className="header__nav">nav</nav>
        </div>
      </div>
    </header>
  )
}
