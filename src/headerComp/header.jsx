import'./header.css';
import React from 'react'
import { NavLinks } from '../navLinks/navLinks';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <div className='userDetails'>
            <img src='https://avatars.githubusercontent.com/u/124740312?v=4' 
                  className='displayPic'
                  alt=''
                  />
            <Link to='/' className='accent-text'>Tennin's <br/>Repo</Link>
        </div>
        <NavLinks/>
    </header>
  )
}
