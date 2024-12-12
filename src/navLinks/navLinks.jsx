import React from 'react';
import './navLinks.css';
import { NavLink} from 'react-router-dom';

export const NavLinks = () => {
  return (
    <ul className='inherit-bg'>
        <li className='inherit-bg'>
            <NavLink  to='/create-repo'  className='accent-text inherit-bg'>Create</NavLink>
        </li>
        <li className='inherit-bg'>
          <NavLink  to='/nowhere'  className='accent-text inherit-bg'>404</NavLink>
        </li>
        <li className='inherit-bg'>
          <NavLink  to='/error-page' className='accent-text inherit-bg'>Error</NavLink>
        </li>
    </ul>
  )
}
