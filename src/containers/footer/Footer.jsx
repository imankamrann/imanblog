import React from 'react'
import './footer.css';
import logo from '../../assets/spaceCat.png';

const Footer = () => {
  return (
    <div className='blog__footer section__padding'>
      <div className='blog__footer-heading'>
        <h1 className='gradient__text'>peepeepoopoo</h1>
      </div>

      <div className='blog__footer-btn'>
        <p>contact</p>
      </div>
      
       <div className='blog__footer-logo'>
          <img src={logo} alt='logo' />
        </div>
      <div className='blog__footer-copyright'>
         <p>Iman Kamran © 2024. All rights reserved</p>
      </div>

    </div>
  )
}

export default Footer