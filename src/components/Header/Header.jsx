import React, { useState } from 'react';
import logo from '../../assets/Logo/1.png';
import './Header.scss';

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className={`navbar ${menuOpened ? 'expanded' : ''}`}>
      <div className='navbar-logo'>
        <img className='navbar-logo' src={logo} alt='Eco Redefine logo' />
      </div>
      <div className={`open`} onClick={toggleMenu}>
        <span className={`${menuOpened ? 'cls close' : 'cls'}`}></span>
        <span>
          <ul className={`sub-menu ${menuOpened ? 'oppenned' : ''}`}>
            <li className='navbar-list__item'>
              <a href="/">Home</a>
            </li>
            <li className='navbar-list__item'>
              <a href="/story">Our Story</a>
            </li>
            <li className='navbar-list__item'>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li className='navbar-list__item'>
              <a href="/blogs">Blogs</a>
            </li>
            <li className='navbar-list__item'>
              <a href="/login">Login</a>
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
}

export default Header;
