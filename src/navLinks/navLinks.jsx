import React from 'react';
import './navLinks.css';
import { NavLink} from 'react-router-dom';
import closeIcon from '../assets/icons8-close.svg';
import hamburgerMenu from '../assets/icons8-hamburger-menu-50.svg';
import { useState } from 'react';

export const NavLinks = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (


    <div className='first-container'>
      <ul className={!showMenu && 'dont-show' }>
          <li className='inherit-bg'>
              <NavLink  to='/create-repo' onClick={toggleMenu} className='accent-text inherit-bg'>Create</NavLink>
          </li>
          <li className='inherit-bg'>
            <NavLink  to='/nowhere' onClick={toggleMenu} className='accent-text inherit-bg'>404</NavLink>
          </li>
          <li className='inherit-bg'>
            <NavLink  to='/error-page' onClick={toggleMenu} className='accent-text inherit-bg'>Error</NavLink>
          </li>
          <img src={closeIcon} 
                alt="Close icon by icon8" 
                className="closeBtn" 
                onClick={toggleMenu}
                style={showMenu ? {'display':'block'} : {'display':'none'}}
                />
      </ul>
      <img src={hamburgerMenu} 
            alt="Hamburger menu by icons8"  
            onClick={toggleMenu} 
            className='hamburgerMenu'
            />
    </div>
  )
}
