import React from 'react';
import './navLinks.css';
import { Link } from 'react-router-dom';

export const NavLinks = () => {
  return (
    <ul className='inherit-bg'>
        <li className='inherit-bg'>
            <Link  to='/create-repo'  className='accent-text inherit-bg'>Create</Link>
        </li>
        <li className='inherit-bg'>
          <Link  to='/404page'  className='accent-text inherit-bg'>404</Link>
        </li>
        <li className='inherit-bg'>
          <Link  to='/error-page' onClick={()=>{throw new Error("oops something went wrong")}} 
            className='accent-text inherit-bg'>Error</Link>
        </li>
    </ul>
  )
}
