


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<<< HEAD:src/components /Layout/Header/index.jsx
import { FaChevronDown, FaSearch, FaHeart, FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
import './index.scss';
========
import { FaChevronDown, FaSearch, FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.scss';
>>>>>>>> 119c1e504b8cbd7b5257f23edf9dbb721b1299e8:src/components/NavBar/NavBar.jsx

const NavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Left part of NavBar */}
        <div className="nav-left">
         
          <div className="logo">Logo</div>
        </div>

        <div className="nav-left">
        <FaBars className="toggle-icon" onClick={toggleNav} />
          <div className="logo">Logo</div>
          <div className="nav-item dropdown">
            Collections <FaChevronDown />
          </div>
          <Link to="/sales" className="nav-item">Sales</Link>
          <Link to="/delivery" className="nav-item">Delivery</Link>
          <Link to="/why-us" className="nav-item">Why Us</Link>
        </div>

        {/* Right part of NavBar */}
        <div className="nav-right">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <FaSearch className="search-icon" />
          </div>
          <Link to="/favourites" className="nav-item">
            <FaHeart />
          </Link>
          <Link to="/cart" className="nav-item">
            <FaShoppingCart />
          </Link>
          <Link to="/account" className="nav-item">
            <FaUser />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Modal */}
      {isNavVisible && (
        <div className="mobile-nav">
          <FaTimes className="close-icon" onClick={toggleNav} />
          <Link to="/collections" className="nav-item">
            Collections <FaChevronDown />
          </Link>
          <Link to="/sales" className="nav-item">
            Sales
          </Link>
          <Link to="/delivery" className="nav-item">
            Delivery
          </Link>
          <Link to="/why-us" className="nav-item">
            Why Us
          </Link>
          <Link to="/favourites" className="nav-item">
            <FaHeart /> Favourites
          </Link>
          <Link to="/cart" className="nav-item">
            <FaShoppingCart /> Cart
          </Link>
          <Link to="/account" className="nav-item">
            <FaUser /> Account
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
