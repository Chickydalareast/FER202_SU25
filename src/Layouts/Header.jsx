import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { APP_CONFIG } from "../Constants/index.js";
import './Style/headerStyle.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`main-header ${isScrolled ? 'scrolled' : ''}`}>

      <Link to="/" className="header-logo">
        <img
          src={APP_CONFIG.APP_LOGO}
          width="46"
          height="46"
          className="me-2"
        />
      </Link>

      <div className="header-search-container">
        <input
          type="text"
          className="header-search-input"
          placeholder="Bạn đang tìm kiếm gì vậy?"
        />
        <button className="btn header-shots-dropdown">
          Shots <FontAwesomeIcon icon={faChevronDown} size="xs" />
        </button>
        <button className="btn header-search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="header-nav-links-container">
        <Link to="/explore" className="header-nav-link">
          <span>Explore</span>
          <FontAwesomeIcon icon={faChevronDown} size="xs" />
        </Link>
        <Link to="/hire" className="header-nav-link"> Lộ Trình </Link>
        <Link to="/jobs" className="header-nav-link"> Khóa Học </Link>
        <Link to="/blog" className="header-nav-link"> Blog </Link>
      </div>

      <div className="header-auth-container">
        <Link to="/login" className="header-login-button"> Log in </Link>
      </div>
    </nav>
  );
};

export default Header;