import React, { useState } from 'react';
import logo from '../../assets/Logo/1.png';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <div className={`navbar ${menuOpened ? 'expanded' : ''}`}>
      <Link to="/"><div className='navbar-logo'>
       <img className='navbar-logo' src={logo} alt='Eco Redefine logo' />
        </div></Link> 
        <ul className='sub-menu--mod'>
              <li className='sub-menu--mod__list-item'>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li className='sub-menu--mod__list-item'>
                <Link to="/ourstory">
                  Our Story
                </Link>
              </li>
              <li className='sub-menu--mod__list-item'>
                <Link to="/testimonials">
                  Testimonials
                </Link>
              </li>
              <li className='sub-menu--mod__list-item'>
                <Link to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className='sub-menu--mod__list-item'>
                <Link to="/login">
                  Login
                </Link>
              </li>
            </ul>
        <div className={`open ${menuOpened ? 'oppenned' : ''}`} onClick={(e) => e.stopPropagation()}>
          <span className='cls' onClick={toggleMenu}></span>
          <span>
            <ul className='sub-menu'>
              <li className='navbar-list__item'>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className='navbar-list__item'>
                <Link to="/ourstory" onClick={toggleMenu}>
                  Our Story
                </Link>
              </li>
              <li className='navbar-list__item'>
                <Link to="/testimonials" onClick={toggleMenu}>
                  Testimonials
                </Link>
              </li>
              <li className='navbar-list__item'>
                <Link to="/blogs" onClick={toggleMenu}>
                  Blogs
                </Link>
              </li>
              <li className='navbar-list__item'>
                <Link to="/login" onClick={toggleMenu}>
                  Login
                </Link>
              </li>
            </ul>
          </span>
          <span className='cls' onClick={toggleMenu}></span>
        </div>
      </div>
    </>
  );
}

export default Header;