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
        <div className='navbar-logo'>
          <img className='navbar-logo' src={logo} alt='Eco Redefine logo' />
        </div>
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
                <Link to="/story" onClick={toggleMenu}>
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
