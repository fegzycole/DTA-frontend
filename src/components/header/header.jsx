import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
  <header className="header">
    <div className="nav-links">
      <Link to="/">ALL PRODUCTS</Link>
      <Link to="/addproduct">ADD PRODUCT</Link>
    </div>
  </header>
);

export default Header;
