import React from 'react';
import logo from '../img/Zomato_company_logo.png';
import '../styles/header.scss';

const Header = () => (
  <header className="header">
    <img src={logo} alt="logo" />
  </header>
);

export default Header;