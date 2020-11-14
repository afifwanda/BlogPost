import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.style.css';

function Navbar(){
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return(
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' 
            className='navbar-logo'
            onClick={closeMobileMenu} 
            style={{ color: '#FFF', textDecoration: 'none' }}>
            Forum Anak IT
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click? 'nav-menu active' : 'nav-menu'}>
            <li className='search-container'>
              <input type="text"
               className='search-input'
               placeholder='search' 
              />
            </li>
            <li className='nav-item'>
              <Link to="/" 
               className='nav-links'
               onClick={closeMobileMenu}
               style={{ color: '#FFF', textDecoration: 'none' }}
               >
                Categories
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/" 
               className='nav-links' 
               onClick={closeMobileMenu}
               style={{ color: '#FFF', textDecoration: 'none' }}>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/" 
               className='nav-links' 
               onClick={closeMobileMenu}
               style={{ color: '#FFF', textDecoration: 'none' }}>
                Register
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  )
}

export default Navbar