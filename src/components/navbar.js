import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const closeMobileMenu=()=> setClick(false);
    const showButton = () => {
        if(window.innerWidth<=960)
        {
            setButton(false);
        }
        else
        {
            setButton(true);
        }
    };
  return (
  <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' >
          TRVL <i class='fab fa-typo3' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          
        </div>
  <ul className={click ? 'nav-bar-active': 'nav-menu'}>
    <li className= 'nav-item'>
      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
        Home
    </Link>
<li className= 'nav-item'>
      <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
        Services
    </Link>
      </li>
<li className= 'nav-item'>
      <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
        Products
    </Link>
      </li>
<li className= 'nav-item'>
      <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
        Sign Up
    </Link>
      </li>
      </li>
    </ul>
        </nav>
        );
        }
       
          
           

export default Navbar;
