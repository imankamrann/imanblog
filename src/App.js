import React from 'react'
import { Navbar, Welcome, Brand } from './components';
import { About, Header, Footer, Photos } from './containers';
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
          <a />
          {/* <Photos /> */}
          <Footer />
      </div>
  )
}

export default App