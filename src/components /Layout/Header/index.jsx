import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaSearch, FaHeart, FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
import './index.scss';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="nav-left">
          <div className="logo">Logo</div>
          <div className="nav-item dropdown">
            Collections <FaChevronDown />
          </div>
          <Link to="/sales" className="nav-item">Sales</Link>
          <Link to="/delivery" className="nav-item">Delivery</Link>
          <Link to="/why-us" className="nav-item">Why Us</Link>
        </div>
        <div className="nav-right">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <FaSearch className="search-icon" />
          </div>
          <Link to="/favourites" className="nav-item">
            <FaHeart /> Favourites
          </Link>
          <Link to="/cart" className="nav-item">
            <FaShoppingCart /> Cart
          </Link>
          <Link to="/account" className="nav-item">
            <FaUser /> Account
          </Link>
          <FaBars className="toggle-icon" onClick={toggleNav} />
        </div>
      </div>
      {isNavVisible && (
        <div className="mobile-nav">
          <Link to="/collections" className="nav-item">Collections <FaChevronDown /></Link>
          <Link to="/sales" className="nav-item">Sales</Link>
          <Link to="/delivery" className="nav-item">Delivery</Link>
          <Link to="/why-us" className="nav-item">Why Us</Link>
          <Link to="/favourites" className="nav-item"><FaHeart /> Favourites</Link>
          <Link to="/cart" className="nav-item"><FaShoppingCart /> Cart</Link>
          <Link to="/account" className="nav-item"><FaUser /> Account</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
