import React from 'react'
import { Navbar, Welcome, Brand } from './components';
import { About, Header, Footer, Details } from './containers';
import './App.css';


const App = () => {
  return (
      <div className='App'>
          <div className='gradient__bg'>
              <Navbar />
              <Header />
              <Welcome/>
          </div>
          <About />
          <Details />
          <Footer />
      </div>
  )
}

export default App