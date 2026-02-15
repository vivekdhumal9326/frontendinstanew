import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <span className="logo-home"><i className="fa-solid fa-house"></i></span>
          <span className="logo-text">Home</span>
        </div>
        
        <div className='left-nav'>
          <Link to='/adminlogin' className='admin'>
          Admin
        </Link>
          <nav className="main-nav">
          <a href="#packages" className="pill active">Instagram Followers</a>
        </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
