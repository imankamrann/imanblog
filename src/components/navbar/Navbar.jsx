import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/Baymax.webp';


const Navbar = () => {
  return (
      <div className='blog__navbar'>
          <div className='blog__navbar-links'>
              <div className='blog__navbar-links_logo'>
                  <img src={logo} alt='logo' />
              </div>
              <div className='blog__navbar-links_container'>
                  <p><a href='#home'>Home</a></p>
                  <p><a href='#about'>About</a></p>
                  <p><a href='#photos'>Photos</a></p>
                  <p><a href='#art'>Art</a></p>
                  <p><a href='#more'>More</a></p>

              </div>
          </div>
    </div>
  )
}

export default Navbar