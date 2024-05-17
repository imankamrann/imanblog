import React from 'react'
import './header.css';
import art from '../../assets/museum.jpeg';

const Header = () => {
  return (
      <div className='blog__header section_padding' id='home'>
          <div className='blog__header-content'>
              <h1 className='gradient__text'>Iman Kamran</h1>
              {/* <p>im just a girl</p> */}
              {/* <div className='blog__header-content__input'></div> */}
             
          </div>
          {/* <div className='blog__header-image'>
               <img src={art} alt='art' />
          </div> */}
      </div>
  )
}

export default Header