import React from 'react'
import { Navbar, CTA, Brand } from './components';
import { Blog, Header, Footer, Details } from './containers';
import './App.css';


const App = () => {
  return (
      <div className='App'>
          <div className='gradient__bg'>
              <Navbar />
              <Header />
          </div>
          <Brand />
          <Details />
          <Footer />
      </div>
  )
}

export default App