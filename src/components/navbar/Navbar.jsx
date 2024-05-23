import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/spaceCat.png';
import { Link } from 'react-router-dom';


const Menu = () => (
    // react fragement tags are wrapped around links
    <>
        <p><a href='#home'>Home</a></p>
            <p><a href='#about'>About</a></p>
            <p><a href='#photos'>Photos</a></p>
            <p><a href='#art'>Art</a></p>
        <p><a href='#more'>More</a></p>
    </>
)


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

  return (
      <div className='blog__navbar'>
          <div className='blog__navbar-links'>
              <div className='blog__navbar-links_logo'>
                  <a href="#home">
            <img src={logo} alt='logo' />
            </a>
              </div>
              <div className='blog__navbar-links_container'>
                  <Menu/>

              </div>
          </div>

          <div className='blog__navbar-menu'>
             {toggleMenu
          ? <RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)} />
                  : <RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)} />}
              
              {toggleMenu && (
                  <div className='blog__navbar-menu_container scale-up-center'>
                      <div className='blog__navbar-menu_container-links'>
                          <Menu />
                      </div>
                  </div>
              ) }
          </div>
    </div>
  )
}

export default Navbar