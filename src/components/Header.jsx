import React from 'react';
import './css/Header.css';
import ButtonMenu from './Button_menu';
import Esferas from './Esferas';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className='header_name'>
          <h1>Eduardo Cesar</h1>
          <Esferas />
        </div>
        <nav>
          <ButtonMenu />
        </nav>
      </div>
    </header>
  );
}

export default Header;
